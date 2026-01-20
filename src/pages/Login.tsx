import { supabase } from "@/lib/supabase"
import { useNavigate } from "react-router"
import { useEffect, useRef } from "react";
import { LoginForm } from "@/components/login-form";
import { toast } from "sonner";

export default function Login() {

    const navigate = useNavigate();
    const previousProviderRef = useRef<string | null>(null);

    // handle session changes
    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (session) {
                navigate('/success')
            }
        })
        
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((event, session) => {
            if (event === 'SIGNED_IN' && session) {
                console.log("Session exists:",session)
                
                // Check if this is an OAuth login by checking the provider
                const provider = session.user?.app_metadata?.provider || 
                                session.user?.identities?.[0]?.provider;
                
                // Show success toast for OAuth logins (not email/password, which shows its own toast)
                if (provider && provider !== 'email' && previousProviderRef.current !== provider) {
                    const providerName = provider === 'azure' ? 'Microsoft' : 
                                       provider === 'google' ? 'Google' : provider;
                    toast.success(`Successfully signed in with ${providerName}`);
                    previousProviderRef.current = provider;
                }
                
                navigate('/success')
            } else if (event === 'SIGNED_OUT' || !session) {
                // User signed out, ensure we're on login page
                previousProviderRef.current = null;
                if (window.location.pathname !== '/') {
                    navigate('/')
                }
            }
        })
        
        return () => subscription.unsubscribe()
    }, [navigate])
    
    return (
        <>
            <div className="page-layout">
                <LoginForm className="max-w-md w-full"/>
            </div>
        </>
    )
}