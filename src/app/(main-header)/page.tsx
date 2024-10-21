"use client";

import "./page.scss";
import Image from "next/image";
import MenuModal from "@/components/menu-modal";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useState } from "react";
import AboutYEOWOON from "@/components/about-component/about-YEOWOON";
import { commonLenis, mainLenis } from "@/util/lenis";
import AboutTl from "@/components/about-component/about-tl";
import { AboutTeam } from "../(menu-header)/about/page";
import AboutSwiper from "@/components/about-component/about-swiper";
import AboutHQ from "@/components/about-component/about-hq";
import MainFloatingBar from "@/components/main-floating-bar";
import { useGSAP } from "@gsap/react";
import { createModalStore } from "@/store/modal-store";

export default function Home() {
  gsap.registerPlugin(gsap);
  gsap.registerPlugin(ScrollTrigger);

  const [wheel, setWheel] = useState(true);
  const [aboutY, setAboutY] = useState(false);
  const [atl, setAtl] = useState(false);
  const { isModalOpen, setIsModalOpen } = createModalStore();

  useEffect(() => {
    if (aboutY === false) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }

    mainLenis();
    ScrollTrigger.create({
      trigger: ".ay_container",
      start: "top 10%",
      end: "bottom 10%",
      once: true,
      pinSpacing: false,
      onEnter() {
        setAtl(true);
        commonLenis();
        gsap.to(".link", {
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: ".ay_subtitle",
            start: "top 5%",
            end: "50px",
            scrub: true,
          },
        });
      },
    });
  }, [aboutY]);

  return (
    <>
      <div
        className="main_bg"
        onTouchMove={(e) => {
          if (isModalOpen === true) return;
          if (wheel === true) {
            setAboutY(true);
            setWheel(true);
          }
        }}
        onWheel={(e) => {
          if (isModalOpen === true) return;
          if (wheel === true) {
            setAboutY(true);
            setWheel(true);
          }
        }}>
        <video loop muted autoPlay playsInline>
          <source src="/video/mainBG.mp4" type="video/mp4" />
        </video>
        <section>
          <Image
            className="mainTitle"
            src={"/img/mainTitle.svg"}
            width={200}
            height={200}
            style={{}}
            alt={"mainTitle"}
          />
          <div className="script_1">
            <p>It's uncustomary joy after sentiment fades down</p>
          </div>
          <div className="script_2">
            <p>
              We create jewelry that lasts a long time, like a yeowoon,{" "}
              <br />a feeling people can look back on for as long as they
              want
            </p>
          </div>
        </section>

        <svg
          className="mainArrow"
          viewBox="0 0 300 103"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 18L74.5649 59.5L154.78 101L299 18"
            stroke="#CCCCCC"
            strokeWidth="3"
          />
          <path
            d="M1 2L74.5649 43.5L154.78 85L299 2"
            stroke="#CCCCCC"
            strokeWidth="3"
          />
        </svg>
        <MenuModal />
      </div>
      {aboutY === true && (
        <div className="main_about_container">
          <AboutYEOWOON />
          {atl === true && (
            <>
              <AboutTl />
              <AboutTeam />
              <AboutSwiper />
              <AboutHQ />
            </>
          )}
          <MainFloatingBar />
        </div>
      )}
    </>
  );
}
