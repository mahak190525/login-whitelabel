import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";
import { useNavigate } from "react-router";

export default function Success() {
    const navigate = useNavigate();

    async function signOut() {
        const {error} = await supabase.auth.signOut();
        if (error) {
            console.log("Error signing out:",error)
        }
        else {
            console.log("Successfully signed out");
            navigate('/');
        }
    }
    return (
        <>
        <h2>Successfully signed in with your account</h2>
        <Button onClick = {signOut}>Sign Out</Button>
        </>
    )
}