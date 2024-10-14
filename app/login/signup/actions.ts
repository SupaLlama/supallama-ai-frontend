'use server'

import sgMail from '@sendgrid/mail'

import { type SignupFormStatus } from './signupFormStatus'


sgMail.setApiKey(process.env.SENDGRID_API_KEY!)


interface BetaInviteRequestData {
  name: string
  email: string
  company: string
  companySize: string
  chatbotDescription: string
}


async function generateEmailText(betaInviteRequestData: BetaInviteRequestData) {
  return(
    'Hi!\n\n'
    + 'You have successfully requested an invite to the SupaLlama beta!\n\n'
    + 'Your info:\n'
    + 'Name: ' + betaInviteRequestData.name + '\n'
    + 'Email: ' + betaInviteRequestData.email + '\n'
    + 'Company: ' + betaInviteRequestData.company + '\n'
    + 'Company Size: ' + betaInviteRequestData.companySize + '\n'
    + 'Chatbot Description: ' + betaInviteRequestData.chatbotDescription + '\n\n'
    + 'Thank you so much!!! We will get back to you ASAP!\n'
    + ':-)'
  )
}


async function sendBetaEmailConfirmation(recipient: string, body: string) {
  const message = {
    to: recipient,
    from: 'hello@supallama.ai',
    subject: 'Confirming your request for a Supallama Beta invite',
    text: body, 
  }
  try {
    await sgMail.send(message)
  } catch (error) {
    console.error('Error sending confirmmation email:', error)
  }
}


async function sendBetaEmailNotification(body: string) {
  const message = {
    to: 'support@supallama.ai',
    from: 'hello@supallama.ai',
    subject: 'SupaLlama Beta Invite Request',
    text: body,
  }
  try {
    await sgMail.send(message)
  } catch (error) {
    console.error('Error sending notification email:', error)
  }
}


export async function requestBetaInvite(previousState: SignupFormStatus, formData: FormData) {
  try {
    // TODO: validate form inputs
    const betaInviteRequestData: BetaInviteRequestData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
      companySize: formData.get('company-size') as string,
      chatbotDescription: formData.get('chatbot-description') as string,    
    }

    const emailBody = await generateEmailText(betaInviteRequestData)

    // Send an email confirmation to email in the form
    sendBetaEmailConfirmation(betaInviteRequestData.email, emailBody)

    // Send an email notification to the SupaLlama Support team
    sendBetaEmailNotification(emailBody)
  
    previousState.status = 'success'
  } catch (error) {
    console.error('Error requesting beta invite:', error)
    previousState.status = 'error'
  }

  return previousState
}
