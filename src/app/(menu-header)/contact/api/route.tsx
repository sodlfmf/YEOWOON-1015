import { sendEmail } from "@/util/email";
import { redirect } from "next/navigation";
import { ContactType } from "@/util/email";
import { SondMailChack } from "@/components/contact-chack";


export async function POST(req: Request) {
    
    const body = await req.json() as ContactType;
    console.log(body)
    console.log("객채확인");
    try {
        
        
        if (Object.keys(body).length != 3 ) {
            console.log("실패-길이");
            return new Response(JSON.stringify({ message: "Failed to send message - Condition not met" , status:500}), {
                status: 500,
            });
        } 
        const sandchack = SondMailChack(body)
        console.log(sandchack);
        console.log("실패-컴포넌트");
        
        if(sandchack[1]=== false){
            return new Response(JSON.stringify({ message: `${sandchack[0]}` , status:500}), {
                status: 500,
            });
            
            
        } else {
            console.log(body);
            console.log("실패-전송");
            await sendEmail(body);
            console.log("성공");
            return new Response(JSON.stringify({ message: "Your message has been sent." ,status:200 }), {
                status: 200,
            }); 
        }
    } catch (error) {
        console.log("실패-서버");
        return new Response(JSON.stringify({ message: "Failed to send message - Server error", status:500 }), {
            status: 500,
        });
    }
    
}
export async function GET(req: Request) {
    
    redirect(`/contact`)
   
}