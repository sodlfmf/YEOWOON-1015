import { exhibiton } from "@/mock/data"
import Image from "next/image"
import "./archive-exhibiton.scss"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import {ScrollToPlugin} from "gsap/ScrollToPlugin"
import {ScrollTrigger} from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP, ScrollToPlugin,ScrollTrigger);

const Exhibiton = () =>{
  const master = gsap.timeline();
  useGSAP(()=>{
    function dropbooks(targets : string) {

      const handleResize = () => {
        const elements = gsap.utils.toArray(`${targets}`).reverse().slice(0,-1);
        if (window.innerWidth>768){

          const drop = gsap.timeline({
            defaults:{
              ease : "none",
              stagger: { amount: 1,}
            },});
            drop.to(window,{scrollTo:{y:"max"}})
            .fromTo(elements,{
              y:-500,
              opacity:0,
              rotate: 15, 
              x:function(i){ return i%2 === 1 ? 60: -60}, 
              rotateY:function(i){return i%2 === 1 ? 1.5 : -1.5}
            },
            {
              duration:0.2,
              y:-120,
              opacity:1,
              rotate : 15
            })
    
          .to(elements,{duration: 0.3,rotate: -3,y:0,},"<0.2")
          .to(elements,{duration: 0.2,rotate: 1},"<0.2")
          .to(elements,{duration: 0.2,rotate: 0},"<0.2")
          .to(window,{duration: 0.8,scrollTo:{y:"min"}},"<0.1")
          .fromTo(".couture2024",{rotateY:0,rotateX:65},{duration:0.3,rotateX:0, opacity:1});
         
          
          master.add(drop);
          
          master.play();
        }

      }

      handleResize();
    }
      
      
    
    dropbooks('.book');
    const skip = () =>{
      master.progress(1);
    }
    
    const skipbutton = document.getElementById("barButton")
    skipbutton?.addEventListener("click",skip)
  });

  
  
  return (
      <div className="exhibition_books notoblack">
        {exhibiton.map(({id,title,imgUrl}) =>{
          return (
            <div key={id} className={`${id} book`}><p>{title}</p><div><Image src={imgUrl} style={{}} alt={"EXHIBITON"} width={600} height={80} /></div></div>
          )
        })}
      </div>
  )
}

export default Exhibiton