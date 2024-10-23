"use client";

import { useEffect, useRef } from "react";
import "./menu-modal.scss";
import { createPortal } from "react-dom";
import { createModalStore } from "@/store/modal-store";
import { archiveSubMenu, headerMenu } from "@/mock/data";
import { gsap } from "gsap";
import { usePathname, useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";

const MenuModal = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { isModalOpen, setIsModalOpen } = createModalStore();
  const pathname = usePathname().replace("/", "");
  const router = useRouter();

  useEffect(() => {
    if (isModalOpen === true) {
      document.body.style.overflowY = "hidden";
      gsap.to(".main_container", {
        position: "fixed",
        height: "100%",
        width: "100%",
      });
      // gsap.to(".main_about_container", { display: "none" });
    } else if (isModalOpen === false) {
      document.body.style.overflowY = "";
      gsap.to(".main_container", {
        position: "",
        height: "",
        width: "",
      });
      // gsap.to(".main_about_container", { display: "flex" });
    }
  }, [isModalOpen]);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    } else if (dialogRef.current?.open === true) {
      dialogRef.current?.scrollTo({
        top: 0,
      });
      dialogRef.current?.close();
    }
  });

  gsap.registerPlugin(gsap);

  const archiveHover = () => {
    const tl = gsap.timeline();

    tl.set(".archive_sub_li", {
      display: "list-item",
    })
      .to(".archive_sub_ul", {
        padding: "1rem",
      })
      .to(
        ".archive_sub_li",
        {
          duration: 0.5,
          height: "2rem",
        },
        "<"
      );
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
          duration: 1.5,
          opacity: 0,
          stagger: { amount: 0.5 },
        },
        "-=1"
      );
    }
  }, [isModalOpen]);

  if (!isModalOpen) return null;
  return createPortal(
    <dialog
      onClose={() => setIsModalOpen(false)}
      className="modal_dialog"
      ref={dialogRef}>
      <div className="modal_close_Btn">
        <button
          onClick={() => {
            setIsModalOpen(false);
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
                      setIsModalOpen(false);
                      router.push(`/${link}`);
                    } else {
                      setTimeout(() => {
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
