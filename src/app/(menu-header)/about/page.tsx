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
import { notoSansBlack} from "@/fonts";

gsap.registerPlugin(gsap);

export const AboutTeam = () => {
  return (
    <article className="at_container">
      <header className={`at_title ${notoSansBlack.className}`}>Our Team</header>
      <AboutTeamItem />
    </article>
  );
};

const About = () => {
  useEffect(() => {
    commonLenis();
  });

  return (
    <article className="about_container">
      <MenuModal />
      <AboutYEOWOON />
      <AboutTl />
      <AboutTeam />
      <AboutSwiper />
      <AboutHQ />
    </article>
  );
};

export default About;
