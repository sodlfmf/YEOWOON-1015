import { tlScript } from "@/mock/about/aboutTl";
import Script from "../script-component";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { notoSansBold } from "@/fonts";

const AboutTlItem = () => {
  const attendRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(gsap);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {});

  return (
    <section id="atl_attends" className="atl_attends" ref={attendRef}>
      {tlScript.map(({ year, attends }, i) => {
        return (
          <figure className="atl_attend_item" key={i} id={`year${i}`}>
            <h3 className={notoSansBold.className}>{year}</h3>
            {attends.map((item, i) => {
              return (
                <label key={i}>
                  <p>
                    <Script param={item} />
                  </p>
                </label>
              );
            })}
          </figure>
        );
      })}
    </section>
  );
};

export default AboutTlItem;
