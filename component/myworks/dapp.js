import dapp from "./dapp.module.css";
import close from "@/public/multiply.svg";
import Image from "next/image";
import nigStake from "@/public/mobile.png";
import multiSig from "@/public/multiSig.png";
import www from "@/public/globe.svg";
import git from "@/public/socials/github.svg";

export default function Dapp({ view, setView }) {
  return (
    <div className={dapp.main} id={view != "Dapp" ? dapp.hidden : ""}>
      <div
        className={dapp.close}
        onClick={() => {
          setView("mainPage");
        }}
      >
        <span>Close Dapp Page</span>
        <Image src={close} alt="Close Sign" />
      </div>
      <div className={dapp.heading}>Live Dapp Projects</div>
      <div className={dapp.cards}>
        <div className={dapp.card}>
          <div className={dapp.image}>
            <Image src={nigStake} alt="Stake App" />
          </div>
          <div className={dapp.content}>
            <h1>A Decentralized Staking Platform</h1>
            <p>
              A Decentralized Staking Plaform powered on the Avalnace Chain
              where people can Stake for their preferred Aspirant
            </p>
            <a
              href="https://nigstake.avraq.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div className={dapp.www}>
                View Live
                <Image src={www} alt={"globe symbol"} />
              </div>
            </a>
            <div className={dapp.build}>
              <p>Built with</p>
              <ul>
                <li>ReactJs</li>
                <li>NextJs</li>
                <li>EthersJs</li>
                <li>Wagmi</li>
                <li>WalletConnect</li>
              </ul>
            </div>
          </div>
        </div>

        {/* dddddddddddddddddddddddddddddddddddddddddddddddddddd */}

        <div className={dapp.card}>
          <div className={dapp.image}>
            <Image src={multiSig} alt="MultiSig Dapp" />
          </div>
          <div className={dapp.content}>
            <h1>A MultiSig Wallet</h1>
            <p>
              A MultiSIg Wallet for Signing and Authorization of Message on the
              Platform and Validation of the Procedures
            </p>
            <div className={dapp.anchor}>
              <a
                href="https://multisigwallet.onrender.com/"
                target="_blank"
                rel="noreferrer"
              >
                <div className={dapp.www}>
                  View Live
                  <Image src={www} alt={"globe symbol"} />
                </div>
              </a>
              <a
                href="https://github.com/Aiseluck/MultiSig-Wallet-Dapp_Front_End_Project"
                target="_blank"
                rel="noreferrer"
              >
                <div className={dapp.www}>
                  View Source Code
                  <Image src={git} alt={"globe symbol"} />
                </div>
              </a>
            </div>
            <div className={dapp.build}>
              <p>Built with</p>
              <ul>
                <li>ReactJs</li>
                <li>NextJs</li>
                <li>EthersJs</li>
                <li>Wagmi</li>
                <li>WalletConnect</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
