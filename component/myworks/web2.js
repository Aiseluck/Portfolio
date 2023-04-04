import web from "./web2.module.css";
import close from "@/public/multiply.svg";
import Image from "next/image";
import avraq from "@/public/port1.png";
import www from "@/public/globe.svg";
import oil from "@/public/port2.png";
import git from "@/public/socials/github.svg";

export default function Web2({ view, setView }) {
  return (
    <div className={web.main} id={view != "web" ? web.hidden : ""}>
      <div
        className={web.close}
        onClick={() => {
          setView("mainPage");
        }}
      >
        <span>Close Web2 Page</span>
        <Image src={close} alt="Close Sign" />
      </div>
      <div className={web.heading}>Live Web2 Projects</div>
      <div className={web.cards}>
        <div className={web.card}>
          <div className={web.image}>
            <Image src={avraq} alt="A Landing Page" />
          </div>
          <div className={web.content}>
            <h1>Official Page of Avraq.com</h1>
            <p>Opening Page of Avraq and it associated website</p>
            <a href="https://www.avraq.com/" target="_blank" rel="noreferrer">
              <div className={web.www}>
                View Live
                <Image src={www} alt={"globe symbol"} />
              </div>
            </a>
            <div className={web.build}>
              <p>Built with</p>
              <ul>
                <li>Html</li>
                <li>Css</li>
                <li>ReactJs</li>
                <li>NextJs</li>
                <li>Firebase</li>
                <li>NodeJs</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={web.card}>
          <div className={web.image}>
            <Image src={oil} alt="A Landing Page" />
          </div>
          <div className={web.content}>
            <h1>Official Page of Xteemwell.com</h1>
            <p>Opening Page of Xteemwell and it associated website</p>
            <div className={web.anchor}>
              <a
                href="https://xteem.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <div className={web.www}>
                  View Live
                  <Image src={www} alt={"globe symbol"} />
                </div>
              </a>
              <a
                href="https://github.com/Aiseluck/Xteem"
                target="_blank"
                rel="noreferrer"
              >
                <div className={web.www}>
                  View Source Code
                  <Image src={git} alt={"globe symbol"} />
                </div>
              </a>
            </div>
            <div className={web.build}>
              <p>Built with</p>
              <ul>
                <li>Html</li>
                <li>Css</li>
                <li>ReactJs</li>
                <li>NextJs</li>
                <li>NodeJs</li>
                <li>Xpress</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
