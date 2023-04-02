import Typing from "@/resuable/typingtext";
import firstStyles from "@/styles/component/firstpage.module.css";
import resumeImg from "@/public/socials/resume.svg";
import articleImg from "@/public/socials/articles.svg";
import dapp from "@/public/skills/layer.svg";
import contract from "@/public/skills/cube.svg";
import web2 from "@/public/skills/monitor.svg";
import writing from "@/public/skills/articles.svg";
import Image from "next/image";
import Contact from "./contact";
import { useState } from "react";
import SmartContract from "./myworks/smartcontract";
import Dapp from "./myworks/dapp";
import Web2 from "./myworks/web2";
import Writing from "./myworks/techwriting";

export default function FirstPage() {
  const [view, setView] = useState("mainPage");

  const changeView = (view) => {
    setView(view);
  };
  const portfolio = [
    { title: "Smart Contracts", image: contract, view: "smartContract" },
    { title: "Dapps", image: dapp, view: "Dapp" },
    { title: "Web2", image: web2, view: "web" },
    { title: "Tech Articles", image: writing, view: "writing" },
  ];
  return (
    <section className={firstStyles.main}>
      <div
        className={firstStyles.about}
        id={view != "mainPage" ? firstStyles.hidden : ""}
      >
        <div className={firstStyles.aboutme}>
          <div className={firstStyles.name}>
            Hey there👋,I'm Aisosa Goodluck
          </div>
          <div className={firstStyles.job}>
            <Typing
              words={[
                "A Blockchain Developer",
                "A FrontEnd Developer",
                "A Backend Developer",
                "A Technical Writer",
              ]}
            />
          </div>
          <div className={firstStyles.myworks}>
            Currently a FullStack Blockchain Developer at Avraq Africa
          </div>
          <div className={firstStyles.portfolio}>
            <div>Check out my Works</div>
            <div className={firstStyles.group}>
              {portfolio.map(({ title, image, view }) => {
                return (
                  <div
                    className={firstStyles.port_work}
                    key={title}
                    onClick={() => changeView(view)}
                  >
                    <span>{title}</span>
                    <Image src={image} alt={"Reference Logo"} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={firstStyles.picture}>
          <div className={firstStyles.Img}>
            <img src="./myResized.png" />
          </div>
        </div>
      </div>
      <div
        className={firstStyles.showWorks}
        id={view == "mainPage" ? firstStyles.hidden : ""}
      >
        <SmartContract view={view} setView={setView} />
        <Dapp view={view} setView={setView} />
        <Web2 view={view} setView={setView} />
        <Writing view={view} setView={setView} />
      </div>
      <div className={firstStyles.contact}>
        <Contact />
      </div>
    </section>
  );
}
