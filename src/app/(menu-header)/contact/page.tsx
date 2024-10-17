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

const Contact=()=>{
    const [contact,setcontact] = useState({name : '', email : '' , inquiry : ''});
    const [submitText,setsubmitText] = useState("");
    const onchange = (e : any) =>{
        setcontact({...contact,[e.target.name] : e.target.value}) ;     
    }   
    const onSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const sandchack = SondMailChack(contact)
        if(sandchack[1]=== false){
            setsubmitText(sandchack[0] as string)
            document.getElementById(`${sandchack[2]}`)?.focus();
        }else{
            setsubmitText("Your inquiry has been forwarded.")
            const data = SandContactEmail({...contact})
            setcontact({name : '', email : '' , inquiry : ''})
            data.then((result)=>{
                setsubmitText(result)
                
            })
        }
    }
    
    return (
        <div className="contact">
            <MenuModal />
            <div>
                <div className="contact_Us">
                    <h1>Contact us</h1>
                    <form className='sandMail' method='post' 
                         onSubmit={onSubmit}   >
                        <div>
                            <div><input id="name" name="name" placeholder="Name" onChange={onchange} value={contact.name} autoComplete='off' ></input></div>
                            <div><input id="email" name="email" placeholder="Email" onChange={onchange} value={contact.email} autoComplete='off' ></input></div>
                            <div><textarea id="inquiry" name="inquiry" rows={1} placeholder="Inquiry" onChange={onchange} value={contact.inquiry} autoComplete='off'></textarea></div>
                        </div>
                        <button aria-controls="submit_message"><p>SUBMIT</p></button>
                    </form>
                        <div id='submit_message'><p>{submitText}</p></div>
                </div>
            </div>
            <div className="contact_link">
                <div>
                    <div className="mailIcon"><FontAwesomeIcon icon={faEnvelope} size="6x" /></div>
                    <div><a href="mailto:yeowoon@yeowoon.co.kr"><b>yeowoon@yeowoon.co.kr</b></a></div>
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