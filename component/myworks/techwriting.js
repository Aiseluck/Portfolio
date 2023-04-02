import writing from "./techwriting.module.css";
import close from "@/public/multiply.svg";
import Image from "next/image";

export default function Writing({ view, setView }) {
  return (
    <div className={writing.main} id={view != "writing" ? writing.hidden : ""}>
      <div
        className={writing.close}
        onClick={() => {
          setView("mainPage");
        }}
      >
        <span>Close Technical Page</span>
        <Image src={close} alt="Close Sign" />
      </div>
    </div>
  );
}
