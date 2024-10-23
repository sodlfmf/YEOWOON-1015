import { tlScript } from "@/mock/about/aboutTl";
import Script from "../script-component";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const AboutTlItem = () => {
  const attendRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(gsap);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    
  });

  return (
    <div className="atl_attends" ref={attendRef}>
      {tlScript.map(({ year, attends }, i) => {
        return (
          <div className="atl_attend_item" key={i} id={`year${i}`}>
            <h3 className="notobold">{year}</h3>
            {attends.map((item, i) => {
              return (
                <div key={i}>
                  <p>
                    <Script param={item} />
                  </p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default AboutTlItem;
