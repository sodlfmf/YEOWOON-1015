"use client";

import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./about-hq.scss";
import Image from "next/image";
import AboutHqFooter from "./about-hq-footer";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { notoSansBold } from "@/fonts";

const AboutHQ = () => {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const pathname = usePathname().replace("/", "");
  return (
    <article
      className={`ahq_container ${
        pathname !== "about" && width <= 1080 ? `mobile_footer` : ""
      } ${notoSansBold.className}`}>
      <header className="ahq_title">
        <h2>Head Quarters</h2>
      </header>
      <section className="ahq_content">
        <figure className="ahq_img">
          <Image
            priority
            style={{}}
            src={"/img/about/aboutHQ.png"}
            width={770}
            height={560}
            alt={"HQ Image"}
          />
        </figure>
        <figure className="ahq_map notosans">
          <div>
            <iframe
              className="gmap"
              width={"100%"}
              height={"400"}
              style={{}}
              loading={"lazy"}
              allowFullScreen
              src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GMAP_API_KEY}&q=${process.env.NEXT_PUBLIC_YEOWOON_ADDRESS}&region=KR&language=ko`}></iframe>
            <FontAwesomeIcon
              icon={faMapLocationDot}
              size="3x"
              className="mapIcon"
            />
            <p>7, Insadong 1-gil, Jongno-gu, Seoul,</p>
            <p>Republic of Korea</p>
          </div>
        </figure>
      </section>
      <AboutHqFooter />
    </article>
  );
};

export default AboutHQ;
