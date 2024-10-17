import { ContactType } from "@/util/email";

export async function SandContactEmail(emailFrom : ContactType) {
    const response = await fetch('/contact/api', {
        method: 'POST',
        body : JSON.stringify(emailFrom),
        headers:{
            'Content-Type' : 'application/json',
        }
    })
    const data = await response.json();
    
    console.log(data);
    if(!response.ok){   
        throw new Error(data.message || "Sending message...");
    }

    return data.message;
}