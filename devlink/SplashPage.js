"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SplashPage.module.css";

export function SplashPage({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "div-block")} tag="div">
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
      />
      <_Builtin.Block className={_utils.cx(_styles, "div-block-2")} tag="div">
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
        <_Builtin.BlockContainer
          className={_utils.cx(_styles, "container")}
          grid={{
            type: "container",
          }}
          tag="div"
        >
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
        </_Builtin.BlockContainer>
      </_Builtin.Block>
    </_Component>
  );
}
