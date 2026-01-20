import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export default function Success() {
    const navigate = useNavigate();

    async function signOut() {
        const {error} = await supabase.auth.signOut({scope: 'local'});
        if (error) {
            console.log("Error signing out:",error)
            toast.error(`Error signing out: ${error.message}`)
        }
        else {
            navigate('/');
            toast.success("Successfully signed out");
        }
    }
    return (
        <>
            <div className="page-layout">
                <div className="max-w-md w-full text-center space-y-4">
                    <h2>Successfully signed in with your account</h2>
                    <Button onClick={signOut}>Sign Out</Button>
                </div>
            </div>
        </>
    )
}