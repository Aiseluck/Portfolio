import firstStyles from "@/styles/component/firstpage.module.css";

export default function FirstPage() {
  return (
    <section className={firstStyles.main}>
      <div className={firstStyles.about}>
        <div className={firstStyles.aboutme}>
          <div className={firstStyles.name}>
            Hey there👋,I'm Aisosa Goodluck
          </div>
          <div className={firstStyles.job}>
            Blockchain Developer who loves Technical Writing
          </div>
          <div className={firstStyles.myworks}>
            Hi, I am Aisosa Goodluck, Currently a FullStack Blockchain Developer
            at Avraq Africa
          </div>
        </div>
        <div className={firstStyles.picture}>
          <div className={firstStyles.Img}>
            <img src="./myResized.png" />
          </div>
        </div>
      </div>
    </section>
  );
}
