import "./Final.css";

import { BackGround } from "./BackGround";
import { Cards } from "./Cards";

import { ContactFooter } from "../ContactPages/ContactFotter";
import { Layer } from "./Layer";
import { Middles } from "./Middles";
import { NavBars } from "../NavBar/NavBars";
import React from "react";
import { SecondCard } from "./SecondCard";
import { SecondLayer } from "./SecondLayer";
import { Videos } from "./Videos";

export function Final() {
  return (
    <div>
      <BackGround></BackGround>
      <div className="css">
        <Middles></Middles>
        <Layer></Layer>
        <Cards></Cards>
        <Videos></Videos>
        <SecondLayer></SecondLayer>
        <SecondCard></SecondCard>
        <ContactFooter></ContactFooter>
      </div>
    </div>
  );
}
