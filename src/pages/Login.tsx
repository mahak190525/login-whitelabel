import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/supabase"
import { useNavigate } from "react-router"
import { useEffect } from "react";
import { LoginForm } from "@/components/login-form";

export default function Login() {

    const navigate = useNavigate();

    // handle session changes
    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (session) {
            navigate('/success')
            }
        })
        
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            if (session) {
            console.log("Session exists:",session)
            // navigate('/success')
            }
        })
        
        return () => subscription.unsubscribe()
    }, [])
    
    return (
        <>
            <div className="">
                <LoginForm className="max-w-md"/>
            </div>
        </>
    )
}