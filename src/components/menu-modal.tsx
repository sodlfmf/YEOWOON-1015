"use client";

import { useEffect, useRef, useState } from "react";
import "./menu-modal.scss";
import { createPortal } from "react-dom";
import { createModalStore } from "@/store/modal-store";
import { archiveSubMenu, headerMenu } from "@/mock/data";
import { gsap } from "gsap";
import { usePathname, useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";
import { lock, unlock } from "tua-body-scroll-lock";

const MenuModal = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { isModalOpen, setIsModalOpen } = createModalStore();
  const pathname = usePathname().replace("/", "");
  const router = useRouter();

  useEffect(() => {
    if (isModalOpen === true) {
      // lock(document.body);
      document.body.style.overflowY = "hidden";
    } else if (isModalOpen === false) {
      // unlock(document.body);
      document.body.style.overflowY = "scroll";
    }
  }, [isModalOpen]);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
      dialogRef.current?.scrollTo({
        top: 0,
      });
    } else if (dialogRef.current?.open === true) {
      dialogRef.current?.close();
    }
  });

  gsap.registerPlugin(gsap);

  const archiveHover = () => {
    const tl = gsap.timeline();

    tl.set(".archive_sub_li", {
      display: "list-item",
    })
      .set(".archive_menu", {
        display: "none",
      })
      .to(".archive_sub_li", {
        duration: 1,
        height: "5rem",
      });
  };

  useGSAP(() => {
    if (isModalOpen) {
      const tl = gsap.timeline();
      tl.from(".modal_dialog", {
        duration: 1,
        opacity: 0,
      }).from(
        ".modal_dialog .menu",
        {
          delay: 0.3,
          duration: 1.5,
          opacity: 0,
          stagger: { each: 0.2 },
        },
        "-=0.5"
      );
    }
  }, [isModalOpen]);

  if (!isModalOpen) return null;
  return createPortal(
    <dialog
      onClose={() => setIsModalOpen(false)}
      data-lenis-prevent
      className="modal_dialog"
      ref={dialogRef}>
      <div className="modal_close_Btn">
        <button
          onClick={() => {
            setIsModalOpen(false);
            unlock(document.body);
          }}>
          <svg
            width="36"
            height="36"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              id="X-W-closeBtn"
              d="M2 2L24.5 24M24.5 2L2 24"
              stroke="white"
              strokeWidth="3"
            />
          </svg>
        </button>
      </div>
      <nav>
        <ul>
          {headerMenu.map((link, i) => {
            return link === "archive" ? (
              <li key={i} className="menu">
                <a
                  className="archive_menu"
                  onClick={() => archiveHover()}
                  onMouseEnter={() => archiveHover()}>
                  {link}
                </a>
                <ul className="archive_sub_ul">
                  {archiveSubMenu.map((sub, i) => {
                    return (
                      <li className="archive_sub_li" key={i}>
                        <a
                          onClick={() => {
                            setIsModalOpen(false);
                            unlock(document.body);
                            router.push(`/${link}/${sub}`);
                          }}>
                          {sub}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </li>
            ) : (
              <li key={i} className="menu">
                <a
                  onClick={() => {
                    if (pathname === link) {
                      unlock(document.body);
                      setIsModalOpen(false);
                      router.push(`/${link}`);
                    } else {
                      setTimeout(() => {
                        unlock(document.body);
                        setIsModalOpen(false);
                        router.push(`/${link}`);
                      }, 200);
                    }
                  }}>
                  {link}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </dialog>,
    document.getElementById("portal") as HTMLElement
  );
};

export default MenuModal;
