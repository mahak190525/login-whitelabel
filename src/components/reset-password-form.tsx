import { supabase } from "@/lib/supabase";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export async function updatePassword(newPassword: string) {
    const { data, error } = await supabase.auth.updateUser({
        password: newPassword,
    })
    if (error) {
        console.log("Error updating password:", error)
    }
    else {
        console.log("Successfully updated password:", data)
}
}

export default function ResetPasswordForm() {

    async function resetPassword(email: string) {
        const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: window.location.origin + "/update-password",
        })
        if (error) {
            console.log("Error resetting password:", error)
        }
        else {
            console.log("Successfully reset password:", data)
        }
    }
    
    useEffect(() => {
        supabase.auth.onAuthStateChange(async (event, session) => {
          if (event == "PASSWORD_RECOVERY") {
            const newPassword = prompt("What would you like your new password to be?");
            const { data, error } = await supabase.auth
              .updateUser({ password: newPassword as string })
            if (data) alert("Password updated successfully!")
            if (error) alert("There was an error updating your password.")
          }
        })
      }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await resetPassword(email)
  }
  const [email, setEmail] = useState('')
  return (
    <>
    {/* <div>reset-password-form</div> */}
        <Card>
        <CardHeader>
            <CardTitle>Reset Password</CardTitle>
        </CardHeader>
        <CardContent>
            <form onSubmit={handleSubmit}>
            <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            {/* <Button type="submit">Reset Password</Button> */}
            <Button type="submit">Reset Password</Button>
            </form>
        </CardContent>
        {/* <CardContent>
            <form>
            <Input type="password" placeholder="New Password" />
            </form>
        </CardContent> */}
        </Card>
    </>
  )
}