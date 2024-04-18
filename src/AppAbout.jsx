import "./App.css";
import React from "react";
import Footer from "./components/Footer";
import CookieBitten from "./components/CookieBitten";
import HeaderAbout from "./components/HeaderAbout";
import BasicGame from "./components/BasicGame";
import Friends from "./components/Friends";
import Earn from "./components/Earn";
import Upgrade from "./components/Upgrade";
import Sqaurds from "./components/Sqauds";

export default function AppAbout() {
  return (
    <div>
      <div className="mx-auto px-5 sm:px-0">
        <HeaderAbout />
        <main>
            <CookieBitten />
            <BasicGame />
            <Friends />
            <Earn />
            <Upgrade />
            <Sqaurds />
        </main>
      </div>
      <Footer />
    </div>
  );
}