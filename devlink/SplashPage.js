"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SplashPage.module.css";

export function SplashPage({ as: _Component = _Builtin.Block }) {
  return (
    <_Component tag="div">
      <_Builtin.BackgroundVideoWrapper
        className={_utils.cx(_styles, "splash-background")}
        tag="div"
        sources={[
          "https://cdn.prod.website-files.com/68b3d866747a7ae841e33100%2F68b45619f2bef3c9560fc500_green-transcode.webm",
          "https://cdn.prod.website-files.com/68b3d866747a7ae841e33100%2F68b45619f2bef3c9560fc500_green-transcode.mp4",
        ]}
        posterImage="https://cdn.prod.website-files.com/68b3d866747a7ae841e33100%2F68b45619f2bef3c9560fc500_green-poster-00001.jpg"
        autoPlay={true}
        loop={true}
      >
        <_Builtin.Block tag="div" />
        <_Builtin.NavbarWrapper
          className={_utils.cx(_styles, "navbar")}
          tag="div"
          config={{
            easing: "ease",
            easing2: "ease",
            duration: 400,
            docHeight: false,
            noScroll: false,
            animation: "default",
            collapse: "medium",
          }}
        >
          <_Builtin.NavbarContainer
            className={_utils.cx(_styles, "nav-container")}
            tag="div"
          >
            <_Builtin.NavbarBrand
              options={{
                href: "#",
              }}
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-block")}
                tag="div"
              >
                {"Hegnauer.io"}
              </_Builtin.Block>
            </_Builtin.NavbarBrand>
          </_Builtin.NavbarContainer>
        </_Builtin.NavbarWrapper>
        <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "text-block-2")}
            tag="div"
          >
            {"New site coming soon!"}
          </_Builtin.Block>
          <_Builtin.Heading className={_utils.cx(_styles, "heading")} tag="h1">
            {"Experiments in code, games, and stories."}
          </_Builtin.Heading>
          <_Builtin.Block
            className={_utils.cx(_styles, "text-block-3")}
            tag="div"
          >
            {"Limited runs from a name you can’t spell."}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.BackgroundVideoPlayPauseButton>
          <_Builtin.BackgroundVideoPlayPauseButtonPlaying>
            <_Builtin.Image
              width="auto"
              height="auto"
              loading="lazy"
              alt="Pause video"
              src="https://uploads-ssl.webflow.com/6022af993a6b2191db3ed10c/628299f8aa233b83918e24fd_Pause.svg"
            />
          </_Builtin.BackgroundVideoPlayPauseButtonPlaying>
          <_Builtin.BackgroundVideoPlayPauseButtonPaused>
            <_Builtin.Image
              width="auto"
              height="auto"
              loading="lazy"
              alt="Play video"
              src="https://uploads-ssl.webflow.com/6022af993a6b2191db3ed10c/628298b20ae0236682d4b87f_Play-24.svg"
            />
          </_Builtin.BackgroundVideoPlayPauseButtonPaused>
        </_Builtin.BackgroundVideoPlayPauseButton>
      </_Builtin.BackgroundVideoWrapper>
    </_Component>
  );
}
