'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin ,faWhatsapp,faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import '@fortawesome/fontawesome-svg-core/styles.css'
import "./page.scss";
import { useState } from 'react';
import { SandContactEmail } from '@/components/contact-mail';
import MenuModal from '@/components/menu-modal';
import { SondMailChack } from '@/components/contact-chack';
import { useGSAP } from '@gsap/react';
import { gsap } from "gsap"
import { TextPlugin } from "gsap/dist/TextPlugin"
import { SendMessageType } from '@/util/email';

gsap.registerPlugin(TextPlugin)
const Contact=()=>{
    const [contact,setcontact] = useState({name : '', email : '' , inquiry : ''});
    const [submitMessage1,setSubmitMessage1] = useState("");
    const [submitMessage2,setSubmitMessage2] = useState("");
    const onchange = (e : any) =>{
        setcontact({...contact,[e.target.name] : e.target.value}) ;     
    }   

    const setSubmitMessage = (message : string) =>{
        if(submitMessage1 === "" && submitMessage2 === ""){
            setSubmitMessage1(message)
        }else if (submitMessage1 !== "") {
            setSubmitMessage2(message)
            setSubmitMessage1("")
        }else{
            setSubmitMessage1(message)
            setSubmitMessage2("")
        }
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        const elements = document.querySelectorAll<HTMLElement>(".submit_message")
        e.preventDefault();
        const sandchack = SondMailChack(contact)
        if(sandchack[1]=== false){
            setSubmitMessage(sandchack[0] as string)
            document.getElementById(`${sandchack[2]}`)?.focus();
            elements.forEach(message=>{
                message.style.color= "rgb(255,204,102)"
            })
        }else{
            gsap.defaults({ease:"none"})
            const roding = gsap.timeline({repeat:3,repeatDelay:0.5,yoyo:true})
            setSubmitMessage("Sending your message.")
            roding.to(".submit_message p span",{duration:1, text : " . ."})
            const data = SandContactEmail({...contact}) 
            setcontact({name : '', email : '' , inquiry : ''})
            data.then((result : SendMessageType)=>{
                if(result.status === 500){
                    elements.forEach(message=>{
                        message.style.color= "rgb(255,204,102)"
                    })
                }else {
                    elements.forEach(message=>{
                        message.style.color= "white"
                    })
                }
                setSubmitMessage(result.message)
                roding.kill();
                gsap.set(".submit_message p span",{text : ""})
            })
        }
        const tl = gsap.timeline();
        if(submitMessage1 === "") {
            tl.fromTo("#sm1",{
                rotateX:-90,
                opacity:0,
                height:0,
                y:10,
                },{
                rotateX:0,
                opacity:1,
                duration: 0.5,
                height : 38,
                y:0,
                }
            ) .to("#sm2",{
                y:-10,
                rotateX:90,
                opacity:0,
                height:0,
                duration: 0.5,
                },"<"
            )   
        }
        else if(submitMessage1 !== "") {
            tl.to("#sm1",{
                y:-10,
                rotateX:90,
                opacity:0,
                height:0,
                duration: 0.5,
                }
            ) .fromTo("#sm2",{
                rotateX:-90,
                opacity:0,
                height:0,
                y:10,
                },{
                rotateX:0,
                opacity:1,
                duration: 0.5,
                height : 38,
                y:0,
                },"<"
            ) 
        }
    }


    
    return (
        <div className="contact">
            <MenuModal />
            <div>
                <div className="contact_Us">
                    <h1 className='notoExbold'>Contact us</h1>
                    <form className='sandMail' method='post' 
                         onSubmit={onSubmit}   >
                        <div>
                            <div><input id="name" name="name" placeholder="Name" onChange={onchange} value={contact.name} autoComplete='off' ></input></div>
                            <div><input id="email" name="email" placeholder="Email" onChange={onchange} value={contact.email} autoComplete='off' ></input></div>
                            <div><textarea id="inquiry" name="inquiry" rows={1} placeholder="Inquiry" onChange={onchange} value={contact.inquiry} autoComplete='off'></textarea></div>
                        </div>
                        <button ><p className='notoblack'>SUBMIT</p></button>
                    </form>
                        <div className='submit_message' id="sm1"><p>{submitMessage1}<span></span></p></div>
                        <div className='submit_message' id="sm2"><p>{submitMessage2}<span></span></p></div>
                </div>
            </div>
            <div className="contact_link">
                <div>
                    <div className="mailIcon"><FontAwesomeIcon icon={faEnvelope} size="6x" /></div>
                    <div><a href="mailto:yeowoon@yeowoon.co.kr"><b className='notoExbold'>yeowoon@yeowoon.co.kr</b></a></div>
                </div>
                <div className="links">
                    <div >
                        <div className="icon"><FontAwesomeIcon icon={faLinkedin} size="4x" /></div>
                        <b>LinkedIn</b>
                        <div>
                            <a href="https://www.linkedin.com/in/soonhee-jung-the-yeowoon/">
                                Jung Soonhee
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="icon"><FontAwesomeIcon icon={faWhatsapp} size="4x" /></div>
                        <b>What&apos;sapp</b>   
                        <p>+8210-9573-4680</p>
                    </div>
                    <div>
                        <div className="icon"><FontAwesomeIcon icon={faInstagram} size="4x" /></div>
                        <b>Instagram</b>
                        <div><a href="https://www.instagram.com/s.tree_official/">@s.tree_offcial</a></div>
                        <div><a href="https://www.instagram.com/soonhee_official/">@soonhee.offcial</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact