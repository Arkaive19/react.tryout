import Cnt from "./Cnt";
import "../styles/Overlay.css";
// import React, { useEffect } from "react";

const Overlay = () => {
  // useEffect(() => {
  //   const overlay = document.querySelector(".overlay");
  //   const content = document.querySelector(".content-cnt");

  //   function showContent() {
  //     if (content) {
  //       content.style.opacity = 1;
  //       content.style.pointerEvents = "auto";
  //     }
  //   }

  //   if (overlay) {
  //     overlay.classList.add("visible");

  //     setTimeout(() => {
  //       const hexBorder = document.querySelector(".hex-border-shape");
  //       if (hexBorder) {
  //         hexBorder.style.strokeDashoffset = "0";
  //       }

  //       setTimeout(() => {
  //         overlay.classList.add("fade-out");

  //         setTimeout(() => {
  //           overlay.remove();
  //           showContent();
  //         }, 1000);
  //       }, 1200);
  //     }, 1000);
  //   }
  // }, []);

  return (
    <Cnt Class="overlay">
      <Cnt Class="hexagon-logo-wrapper">
        <svg
          className="hex-border"
          viewBox="0 0 160 160"
          width="160"
          height="160"
        >
          <polygon
            className="hex-border-shape"
            fill="none"
            points="80,150 21,115 21,45 80,10 139,45 139,115"
          />
        </svg>
        <img src="/favicon.png" alt="" Class="landing-logo" />
      </Cnt>
    </Cnt>
  );
};

export default Overlay;
