import Typing from "@/resuable/typingtext";
import firstStyles from "@/styles/component/firstpage.module.css";
import resumeImg from "@/public/socials/resume.svg";
import articleImg from "@/public/socials/articles.svg";
import Image from "next/image";
import Contact from "./contact";

export default function FirstPage() {
  return (
    <section className={firstStyles.main}>
      <div className={firstStyles.about}>
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
          <div className={firstStyles.resumes}>
            <div className={firstStyles.resume}>
              <p>Check out my Resume</p>
              <Image src={resumeImg} />
            </div>
            <div className={firstStyles.article}>
              <p>Check out my Articles</p>
              <Image src={articleImg} />
            </div>
          </div>
        </div>
        <div className={firstStyles.picture}>
          <div className={firstStyles.Img}>
            <img src="./myResized.png" />
          </div>
        </div>
      </div>
      <div className={firstStyles.contact}>
        <Contact />
      </div>
    </section>
  );
}
