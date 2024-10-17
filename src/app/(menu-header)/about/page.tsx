"use client";

import { useEffect, useState } from "react";
import "./page.scss";
import { commonLenis } from "../../../util/lenis";
import AboutYEOWOON from "@/components/about-component/about-YEOWOON";
import AboutTl from "@/components/about-component/about-tl";
import AboutSwiper from "@/components/about-component/about-swiper";
import AboutTeamItem from "@/components/about-component/about-team-Item";
import AboutHQ from "@/components/about-component/about-hq";
import MenuModal from "@/components/menu-modal";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

gsap.registerPlugin(gsap);

export const AboutTeam = () => {
  return (
    <div className="at_container">
      <div className="at_title">Our Team</div>
      <AboutTeamItem />
    </div>
  );
};

const About = () => {
  useEffect(() => {
    commonLenis();
  });

  useGSAP(() => {});

  return (
    <div className="about_container">
      <MenuModal />
      <AboutYEOWOON />
      <AboutTl />
      <AboutTeam />
      <AboutSwiper />
      <AboutHQ />
    </div>
  );
};

export default About;
