import headerStyles from "@/styles/component/header.module.css";
import { Pacifico } from "next/font/google";
import Image from "next/image";
import githubImg from "@/public/socials/github.svg";
import linkedinImg from "@/public/socials/linkedin.svg";
import twitterImg from "@/public/socials/twitter.svg";

const PacificoStyle = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

function Header({ className }) {
  return (
    <header className={`${headerStyles.header} ${className}`}>
      <div className={`${headerStyles.logo} ${PacificoStyle.className}`}>
        @Aiseluck
      </div>
      <nav className={headerStyles.menu}>
        <div className={headerStyles.contact}>
          <ul>
            <li>
              <a
                href="https://drive.google.com/file/d/1lVgCpRH3rP29Dkd35Y88LLW6Io8mKFdP/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                My Resume
              </a>
            </li>
            <li>
              <a href="#">Works</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className={headerStyles.socials}>
        <a href="https://github.com/Aiseluck" target="_blank" rel="noreferrer">
          <Image src={githubImg} alt={"gitHub Logo"} />
        </a>
        <Image src={linkedinImg} alt={"LinkedIn Logo"} />
        <a href="https://twitter.com/aiseluck" target="_blank" rel="noreferrer">
          <Image src={twitterImg} alt={"Twiiter Logo"} />
        </a>
      </div>
    </header>
  );
}

export default Header;
