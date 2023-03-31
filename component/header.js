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
              <a href="#">My Resume</a>
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
        <Image src={githubImg} />
        <Image src={linkedinImg} />
        <Image src={twitterImg} />
      </div>
    </header>
  );
}

export default Header;
