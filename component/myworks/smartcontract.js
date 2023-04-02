import smart from "./smartContract.module.css";
import close from "@/public/multiply.svg";
import Image from "next/image";
import avax from "@/public/AVAX.svg";
import eth from "@/public/ethereum.svg";

export default function SmartContract({ view, setView }) {
  const contract_data = [
    {
      address: "0x11ea1955A7D0100804Da97CE20236C7Ed94174fA",
      info: `A staking smart contract for the 2023 Nigerian Presidential
    Election, which empowers participants to stake in favor of their
    chosen candidate in a decentralized Manner. This contract enables a
    trustless and transparent system, providing equal opportunity for
    all to participate and make their voice heard in the election
    process.`,
      chain: "Deployed on Avalance Chain",
      image: avax,
      chainLink:
        "https://snowtrace.io/address/0x11ea1955A7D0100804Da97CE20236C7Ed94174fA#code",
    },
    {
      address: "0x349d9c3aeBf247C0352404E090A5d2C09a7c2e53",
      info: `This Contract is an Implementation for a MultiSIgWallet whwere users can 
      create and Retrieve thier MultiSig Contract on Chain. The Created MultiSig Wallet 
      implement various level of Authority and Confirmation`,
      chain: "Deployed on Ethereum Sepolia Testnet",
      image: eth,
      chainLink:
        "https://sepolia.etherscan.io/address/0x349d9c3aeBf247C0352404E090A5d2C09a7c2e53#code",
    },
    {
      address: "0x",
      info: `This Contract is to demonstrate the basic working of UniSwap
        Protocol`,
      chain: "Deployed on Localy for testing on Hardhat Network",
      image: eth,
      chainLink: "https://github.com/Aiseluck/UniSwap-Implementation",
    },
  ];
  return (
    <div
      className={smart.main}
      id={view != "smartContract" ? smart.hidden : ""}
    >
      <div
        className={smart.close}
        onClick={() => {
          setView("mainPage");
        }}
      >
        <span>Close Contract Page</span>
        <Image src={close} alt="Close Sign" />
      </div>
      <div className={smart.heading}>Deployed Smart Contracts</div>
      <div className={smart.cards}>
        {contract_data.map((data) => {
          return (
            <div className={smart.card} key={data.address}>
              <span>{`Contract Address: ${data.address}`}</span>
              <p>{data.info}</p>
              <div className={smart.chain}>
                <div className={smart.logo}>
                  <span>{data.chain}</span>
                  <Image src={data.image} alt="Image" width={"24"} />
                </div>
                <div>
                  <a href={data.chainLink} target="_blank" rel="noreferrer">
                    View Contract on Chain
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
