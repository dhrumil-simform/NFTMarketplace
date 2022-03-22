import React from "react";
import "./wallet.css";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { MetamaskLanding } from "./MetamaskLanding";

export const Wallet = (props) => {
  // const [state, setState] = useState({ isConnected: false });
  // useEffect({})
  const connectWallet = async () => {
    console.log(props);
    if (!props.stateData.isConnected) {
      const [account] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      let balance = await provider.getBalance(account);
      balance = ethers.utils.formatEther(balance);
      console.log(balance);
      props.setStateData({
        ...props.stateData,
        isConnected: true,
        account,
        balance,
      });
    }
  };

  window.ethereum.on("accountsChanged", function (accounts) {
    connectWallet();
  });

  if (!props.stateData.isConnected) {
    return (
      <div className="wallet">
        <div className="wallet-header border-bottom">
          <p className="Wallet-name">
            <span className="profile-avtar me-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
            </span>
            My Wallet
          </p>
        </div>
        <div className="wallet-body">
          <p className="text text-muted">
            Connect with one of our available wallet providers or create a new
            one.
          </p>
          <button
            type="button"
            href="/metamasklanding"
            className="btn btn-primary my-5"
            onClick={connectWallet}
          >
            MetaMask
          </button>
        </div>
      </div>
    );
  } else {
    return <MetamaskLanding stateData={props.stateData} />;
  }
};
