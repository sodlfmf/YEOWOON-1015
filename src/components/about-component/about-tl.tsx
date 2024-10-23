"use client";

import Image from "next/image";
import AboutTlItem from "./about-tl-item";
import "./about-tl.scss";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { gsap } from "gsap";
import { useRef } from "react";
import { tlImg, tlyear } from "./../../mock/about/aboutTl";

const AboutTl = () => {
  const attendRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef(null);
  gsap.registerPlugin(gsap);
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  const imgDown = gsap.timeline();
  useGSAP(() => {
    const imgFade = gsap.timeline({
      defaults: {
        ease: "none",
      },
    });
    const { toArray } = gsap.utils;
    const imgs: HTMLElement[] = toArray(".imgLR");
    let imgR: any[] = [];
    imgs.map((img, i) => {
      imgR.push(img.querySelector(".atl_r"));
    });
    if (window.innerWidth > 768) {
      const nav: HTMLElement[] = toArray(".navs");
      const label = ["#year0", "#year3", "#year5", "#year8"];

      nav.forEach((a, i) => {
        const naviST = ScrollTrigger.create({
          trigger: label[i],
          start: "top 60px",
        });
        ScrollTrigger.create({
          trigger: label[i],
          start: "top center",
          end: "bottom center",
        });
        a.addEventListener("click", (e) => {
          e.preventDefault();
          gsap.to(window, { scrollTo: naviST.start });
        });
      });

      imgFade
        .to([imgs[0], nav[0]], { duration: 1, opacity: 0 }, "<1")
        .to(".year0", { duration: 1, rotateX: -90 }, "<")
        .to([imgs[1], nav[1]], { duration: 2, opacity: 1 })
        .to(imgR[1], { duration: 3, top: "3rem", left: "5rem" })
        .to(".year1", { duration: 1, rotateX: 0 }, "<")
        .to([imgs[1], nav[1]], { duration: 1, opacity: 0 })
        .to(".year1", { duration: 1, rotateX: -90 }, "<")
        .to([imgs[2], nav[2]], { duration: 2, opacity: 1 })
        .to(imgR[2], { duration: 3, top: "3rem", left: "5rem" })
        .to(".year2", { duration: 1, rotateX: 0 }, "<")
        .to([imgs[2], nav[2]], { duration: 1, opacity: 0 })
        .to(".year2", { duration: 1, rotateX: -90 }, "<")
        .to([imgs[3], nav[3]], { duration: 1, opacity: 1 })
        .to(imgR[3], { duration: 3, top: "3rem", left: "5rem" })
        .to(".year3", { duration: 1, rotateX: 0 }, "<");
      // .to(imgs[3], { duration: 1, opacity: 0 });

      ScrollTrigger.create({
        animation: imgFade,
        trigger: tlRef.current,
        start: "top 10%",
        end: "bottom bottom",
        scrub: true,
        id: "atl_img",
        onEnter() {
          const tl = gsap.timeline({
            defaults: {
              duration: 2,
            },
          });
          tl.to(
            imgR[0],
            {
              top: "5rem",
              left: "5rem",
            },
            "<"
          );
        },
      });

      const pinDivs = [".atl_img", ".scroll"];
      pinDivs.forEach((pinDiv) => {
        ScrollTrigger.create({
          trigger: pinDiv,
          endTrigger: ".atl_attends",
          start: "top 10%",
          end: "bottom bottom",
          pin: true,
        });
      });
    }
  });

  const CollNavs = () => {
    const navis = [];
    for (let i = 0; i < 4; i++) {
      navis.push(
        <div key={i} className="nav_item">
          <div id={`nav${i}`} className="navs"></div>
        </div>
      );
    }
    return navis;
  };

  return (
    <div className="atl_container" ref={tlRef}>
      <div className="atl_contents">
        <div className="atl_img">
          {tlImg.map(({ l, r }, i) => {
            return (
              <div className="imgLR" key={i}>
                <Image
                  className="atl_l"
                  src={`/img/about/tl/tl-r1.jpg`}
                  width={660}
                  height={680}
                  style={{}}
                  alt={"atl-l"}
                />
                <Image
                  className="atl_r"
                  src={`${r}`}
                  width={660}
                  height={680}
                  style={{}}
                  alt={"atl-r"}
                />
              </div>
            );
          })}

          {tlyear.map(({ fyear, syear }, i) => {
            return (
              <div key={i} className="atl_year_digit">
                <div className="yearF">
                  <h2 className={`year${i}`}>{fyear} ~</h2>
                </div>
                <div className="yearS">
                  <h2 className={`year${i}`}>{syear}</h2>
                </div>
              </div>
            );
          })}
        </div>
        <svg
          className="tl_line_horizon"
          height="4"
          viewBox="0 0 2920 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            id="tl_line_horizon_path"
            d="M0 2H2920"
            stroke="white"
            strokeWidth="40"
          />
        </svg>

        <AboutTlItem />
        <div className="scroll">
          <CollNavs />
        </div>
      </div>
      <div className="atl_end"></div>
      <div className="widthscroll"><div className="scrollbar"></div></div>
    </div>
  );
};

export default AboutTl;
