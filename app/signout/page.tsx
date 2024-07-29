import { redirect } from "next/navigation";
import { signout } from "./actions";

export default function SignOutPage() {
  try {
    signout() 
  } catch(error) {
    redirect('/error')
  } finally {
    // Redirect in a `finally` block to avoid NextJS errors
    redirect('/')
  }
}