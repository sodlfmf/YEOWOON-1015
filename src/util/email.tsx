import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth : {
        user : process.env.NEXT_PUBLIC_EMAIL,
        pass : process.env.NEXT_PUBLIC_PASSWORD,
    }
})

export type SendMessageType={
    message : string,
    status : number,
}

export type ContactType={
    name : string;
    email: string;
    inquiry : string;
}

type MAilOptionType = {
    to : string;
    email : string;
    subject : string;
    html : string;
}


export function sendEmail({ name, email, inquiry} : ContactType){
    const mailOption : MAilOptionType ={
        to : process.env.NEXT_PUBLIC_EMAIL || '',
        email,
        subject : `[YEOWOON] Inquir from ${email}`,
        html : `
        <h3>Yeowoon Inquir from...</h3>
        </br>
        <div>성함: ${name}</div>
        <div>이메일 주소: ${email}</div>
        </br>
        <h3>문의 내용 </h3>
        <p>${inquiry}</p>`
    };
    return transporter.sendMail(mailOption);
}

