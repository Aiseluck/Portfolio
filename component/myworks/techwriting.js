import writing from "./techwriting.module.css";
import close from "@/public/multiply.svg";
import Image from "next/image";
import medium from "@/public/medium.svg";

export default function Writing({ view, setView }) {
  const data = [
    {
      title:
        "Understanding Ethereum’s RLP Serialization: A Technical Exploration on Ethereum Data Encoding",
      content: "In the world of all underlyin tech",
      link: "https://medium.com/@Aiseluck/understanding-ethereums-rlp-serialization-a-technical-exploration-on-ethereum-data-encoding-a1fd54b8f58",
    },
    {
      title:
        "Building a Multi-Sig Wallet Dapp with Solidity, Hardhat, ReactJS, EthersJs, and Wagmi: A Step-by-Step Guide",
      content: "In the world of all underlyin tech",
      link: "https://medium.com/@Aiseluck/building-a-multi-sig-wallet-dapp-with-solidity-hardhat-reactjs-ethersjs-and-wagmi-a-9eca60d105cc",
    },
    {
      title:
        "How to use the Presidential Staking Platform Launched by Avraq.com",
      content: "In the world of all underlyin tech",
      link: "https://medium.com/@Aiseluck/how-to-use-the-presidential-staking-platform-launched-by-avraq-com-f8cf10f68bb0",
    },
    {
      title: "What’s “smart” about Smart Contract?",
      content: "In the world of all underlyin tech",
      link: "https://medium.com/@Aiseluck/whats-smart-about-smart-contract-2f225c9289e0",
    },
    {
      title: "JavaScript Async/Await is not Just a Syntactical Sugar!!!!",
      content: "In the world of all underlyin tech",
      link: "https://medium.com/@Aiseluck/javascript-async-await-is-not-just-a-syntactical-sugar-af54d63dfad8",
    },
  ];
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
      <div className={writing.heading}>Pubished Technical Articles</div>
      <div className={writing.cards}>
        {data.map((story) => {
          return (
            <div className={writing.card} key={story.title}>
              <h1>{story.title}</h1>
              <a
                href={story.link}
                className={writing.link}
                target="_blank"
                rel="noreferrer"
              >
                <div>Check Article on Medium </div>
                <Image src={medium} alt="medium logo" width={19} />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
