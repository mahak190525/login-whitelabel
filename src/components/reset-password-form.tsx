import { cn } from "@/lib/utils"
import { supabase } from "@/lib/supabase";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import {
    Field,
    FieldGroup,
    FieldLabel,
  } from "@/components/ui/field"
import { useState } from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";

export default function ResetPasswordForm({
    className,
    ...props
}: React.ComponentProps<"div">) {

    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)

    // Function to reset password (send reset email)
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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        await resetPassword(email)
        setEmail('')
        toast.success("Open the link sent to your email to reset your password!")
        setLoading(false)
    }

  return (
    <div className={cn("", className)} {...props}>
        <Card>
        <CardHeader>
            <CardTitle>Reset Password</CardTitle>
        </CardHeader>
        <CardContent>
            <form onSubmit={handleSubmit}>
            <FieldGroup>
                <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Field>
                <Field>
                    <Button type="submit" disabled={loading}>{loading ? "Sending reset email..." : "Reset Password"}</Button>
                </Field>
            </FieldGroup>
            </form>
        </CardContent>
        </Card>
    </div>
  )
}