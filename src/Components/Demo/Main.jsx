import "./Main.css";

import { Contacs, ContactFooter } from "../ContactPages/ContactFotter";

import { First } from "./First";
import { Middle } from "./Middle";
import React from "react";

export function Main() {
  return (
    <div className="dt">

      <First></First>
      <Middle></Middle>
      <ContactFooter></ContactFooter>
    </div>
  );
}
