import web from "./web2.module.css";
import close from "@/public/multiply.svg";
import Image from "next/image";

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
    </div>
  );
}
