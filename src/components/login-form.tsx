import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { supabase } from "@/lib/supabase"
import { useState } from "react"
import { useNavigate } from "react-router"
export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  // Function to sign in with Microsoft or Google
  async function signIn(provider: 'azure' | 'google') {
      const {data, error} = await supabase.auth.signInWithOAuth({
          provider: provider,
          options: {
              scopes: 'email openid',
              redirectTo: window.location.origin,
          },
      })
      if (error) {
          console.log("Error signing in with",provider,":",error)
      } else {
          console.log("Successfully signed in with",provider,":",data)
      }
  }

  // Function to sign in with email and password
  async function signInWithEmail(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })
    if (error) {
      console.log("Error signing in with email and password:",error)
    } else {
      console.log("Successfully signed in with email and password:",data)
      navigate('/success')
    }
  }

  return (
    <div className={cn("", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input 
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Field>
              <Field>
                <Button type="submit" onClick={() => signInWithEmail(email, password)}>Login</Button>
                <FieldSeparator className="my-2">Or continue with</FieldSeparator>
                <Button variant="outline" type="button" onClick={() => signIn('google')}>
                  Login with Google
                </Button>
                <Button variant="outline" type="button" onClick={() => signIn('azure')}>
                  Login with Microsoft
                </Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account? <a href="/signup">Sign up</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
