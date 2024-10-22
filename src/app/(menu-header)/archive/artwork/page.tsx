"use client";

import "./page.scss";

import MenuModal from "@/components/menu-modal";
import ArtworkModal from "@/components/artwork-modal/artwork-modal";
import { campaignData } from "@/mock/artwork/campaign";
import { artistData } from "@/mock/artwork/artist";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { artistImgType, campImgType } from "@/types";
import CampaignImgItem from "@/components/artwork-component/campaign-img-Item";
import ArtistImgItem from "@/components/artwork-component/artist-img-Item";
import { useEffect, useRef, useState } from "react";

import { createArtworkModalStore } from "@/store/modal-store";

const Artwork = () => {
  const campTlRef = useRef<GSAPTimeline>();
  const artistTlRef = useRef<GSAPTimeline>();
  const { isArtworkModalOpen, setIsArtworkModalOpen } =
    createArtworkModalStore();
  gsap.registerPlugin(gsap);

  useEffect(() => {
    if (isArtworkModalOpen === true) {
    } else {
    }
  }, [isArtworkModalOpen]);

  useGSAP(() => {
    const { toArray } = gsap.utils;

    let lines = [
      {
        container: toArray(".camp.item_container"),
        xPercent: -45,
        items: toArray(".camp.img_item"),
        tl: campTlRef,
        tlParam: { speed: 25, duration: 30, repeatDelay: -14 },
      },
      {
        container: toArray(".artist.item_container"),
        xPercent: 45,
        items: toArray(".artist.img_item"),
        tl: artistTlRef,
        tlParam: { speed: -30, duration: 40, repeatDelay: -18 },
      },
    ];

    const tlArray: React.MutableRefObject<GSAPTimeline | undefined>[] = [];

    let horizonDefaults = {
      defaults: {
        ease: "none",
        repeat: -1,
      },
    };

    let mm = gsap.matchMedia(),
      breakPoint = 1081;

    mm.add(
      {
        isDesktop: `(min-width: ${breakPoint}px)`,
        // isMobile: `(max-width: ${breakPoint - 1}px)`,
      },
      (context) => {
        context.conditions?.isDesktop &&
          lines.map(
            (
              {
                container,
                xPercent,
                items,
                tl,
                tlParam: { speed, duration, repeatDelay },
              },
              i
            ) => {
              tl.current = gsap
                .timeline(horizonDefaults)
                .set(container, { xPercent: xPercent })
                .to(items, {
                  x() {
                    return this._targets[0].offsetWidth * speed;
                  },
                  duration,
                  repeatDelay,
                });
              tlArray.push(tl);
              return tlArray;
            }
          );
      }
    );
  });

  return (
    <section className="artwork_container">
      <h1>ART WORK</h1>

      <main className="artwork_grid">
        <article className="camp item_container">
          {campaignData.map(({ id, ImgUrl, title }) => {
            const imgProps: campImgType = { id, ImgUrl, title };
            return (
              <div key={id} className="camp img_item">
                <CampaignImgItem imgProps={imgProps} />
              </div>
            );
          })}
        </article>
        <article className="artist item_container">
          {artistData.map(({ id, ImgUrl, artist }) => {
            const imgProps: artistImgType = {
              id,
              ImgUrl,
              artist,
            };
            return (
              <div key={id} className="artist img_item">
                <ArtistImgItem imgProps={imgProps} />
              </div>
            );
          })}
        </article>
      </main>
      <MenuModal />
      <ArtworkModal />
    </section>
  );
};

export default Artwork;
