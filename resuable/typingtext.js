import { useEffect, useRef, useState } from "react";
import typing from "./typingtext.module.css";

export default function Typing({ words }) {
  const description = useRef();
  const [animation, setAnimation] = useState(false);

  const textload = () => {
    var timeouts = [];
    const Load = (word, time) => {
      return setTimeout(() => {
        description.current.textContent = word;
      }, time);
    };
    timeouts.push(Load(words[0], 0));
    timeouts.push(Load(words[1], 4000));
    timeouts.push(Load(words[2], 8000));
    timeouts.push(Load(words[3], 12000));

    return timeouts;
  };

  useEffect(() => {
    const timeouts = textload();
    setAnimation(true);
    const cancle_interval = setInterval(textload, 16000);
    return () => {
      for (var i = 0; i < timeouts.length; i++) {
        clearTimeout(timeouts[i]);
      }
      clearInterval(cancle_interval);
    };
  }, []);
  return (
    <div className={typing.container}>
      <span
        className={typing.second}
        id={animation ? typing.startAnimate : ""}
        ref={description}
      >
        {words[0]}
      </span>
    </div>
  );
}
