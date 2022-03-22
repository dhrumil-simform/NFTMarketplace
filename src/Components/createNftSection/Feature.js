import React from "react";
import PropTypes from "prop-types";
import { IoWalletSharp, IoImages } from "react-icons/io5";
import { ethers } from "ethers";

export default function Feature(props) {
  const Icon = () => {
    return <IoImages />;
  };

  const connectWallet = async () => {
    const [account] = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log(account);
  };

  const handleClick = () => {
    if (props.id === 1) {
      connectWallet();
    }
  };

  return (
    <div className="feature-card">
      <span className={`feature-icon fa-3x`}>
        <IoWalletSharp />
      </span>

      <h5 className="feature-title">{props.title}</h5>

      <p className="feature-text">{props.content}</p>

      <button
        onClick={handleClick}
        className="btn btn-lg btn-outline-primary m-2"
      >
        {props.title}
      </button>
    </div>
  );
}

Feature.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

Feature.defaultProps = {
  title: "title",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio delectus labore placeat nostrum laudantium explicabo nisi reprehenderit fugiat sequi excepturi voluptates.",
};
