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
        subject : 'YEOWOON 문의 메일',
        html : `
        <h3> 문의 내용 </h3>
        <div> ${inquiry}</div>
        </br>
        <p> 발신자 메일 : ${email}</p>
        <p>발신인 : ${name}</p>`
    };
    return transporter.sendMail(mailOption);
}

