import React from "react";
import SocialMedia from "../layout/SocialMedia";
import "./RightSide.scss";
import Information from "./Information";
import BtnCVDownload from "./../layout/BtnCVDownload";
import Avatar from "../avatar/Avatar";

export default function RightSide() {
  return (
    <div className="col-xl-3 mb-3">
      <section className="rightSide">
        <Avatar />
        <SocialMedia />

        <Information />

        <BtnCVDownload />
      </section>
    </div>
  );
}
