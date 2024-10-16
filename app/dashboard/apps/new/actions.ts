'use server'

import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server'

import { type AppCreationFormStatus } from './appCreationFormStatus';

export async function createNewApp(prevState: AppCreationFormStatus, formData: FormData) {
  const supabase = createClient();

  const { data: auth_user_data , error: error_with_user_auth } = await supabase.auth.getUser()

  const { user } = auth_user_data

  console.log(formData)
  if (user) {
    const app_name = formData.get('appName') as string
    const app_status = 'Queued'
    const app_type = formData.get('appType') as string
    const github_username_for_transfer = formData.get('githubUsername') as string
    const user_id = user.id 
  
    // Retrieve the session to retrieve and pass 
    // the user's Access Token to the Python backend 
    const { data: { session }, error: errorRetrievingSession }= await supabase.auth.getSession()
  
    if (app_name?.trim().length === 0) {
      prevState.status = 'error'
      return prevState
    }
    if (app_type?.trim().length === 0) {
      prevState.status = 'error'
      return prevState
    }
    if (github_username_for_transfer?.trim().length === 0) {
      prevState.status = 'error'
      return prevState
    }

    // Check if an app with this name already exists
    try {
      let { data: supallama_apps_with_same_name, error: error_app_name_already_taken } = await supabase
        .from('supallama_apps')
        .select('app_name')
        .eq('app_name', app_name)

      console.log('supallama_apps data')    
      console.log(supallama_apps_with_same_name)

      if (supallama_apps_with_same_name && supallama_apps_with_same_name.length > 0) {
        console.log('Argument Error: An app with this name already exists')
        prevState.status = 'error'
        return prevState
      }
    } catch (error) {
      console.log('Database Error: Unable to check if an app with this name already exists')
      prevState.status = 'error'
      return prevState
    }

    // Insert new row in the supallama_apps table
    try {
      const { data: new_supallama_app, error: error_inserting_into_supallama_apps_table } = await supabase
        .from('supallama_apps')
        .insert([
          { 
            app_name: app_name,
            app_status: app_status,
            app_type: app_type,
            github_username_for_transfer: github_username_for_transfer,
            user_id: user_id,
          }
        ])
        .select()
      console.log('created new supallama app')
      console.log(new_supallama_app)
      
      // If we were able to create the new app in Supabase,
      // then we'll clone template repos for the new app
      if (new_supallama_app) {
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        headers.append('Accept', 'application/json')
        
        const supaLlamaAiApiHostPort = process.env.SUPALLAMA_AI_API
        const request = new Request(
          `${supaLlamaAiApiHostPort}/github/create-repos-from-templates`, {
            headers: headers,
            method: 'POST',
            mode: 'cors',
            body: `{ "supallama_app_id": "${new_supallama_app[0].id}", "access_token": "${session?.access_token}", "app_name": "${app_name}", "app_type": "${app_type}", "github_username_for_transfer": "${github_username_for_transfer}"}`
          }
        )
      
        const response = await fetch(request)
        await response.json()

        prevState.status = 'success'
        return prevState
      } else {
        prevState.status = 'error'
        return prevState
      }
      
    } catch(error) {
      prevState.status = 'error'
      return prevState
    }
  }

  return prevState
}
