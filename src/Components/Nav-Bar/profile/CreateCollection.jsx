import React from "react";
import "./CreateCollection.css";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { ethers } from "ethers";
import Collection from "../../../artifacts/contracts/CoreCollection.sol/CoreCollection.json";

const collectionAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

export const CreateCollection = () => {
  const [isdisabled, setIsDisabled] = useState(true);
  const _name = useRef();

  const createCollection = async () => {
    const [account] = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      collectionAddress,
      Collection.abi,
      signer
    );

    await contract
      .createCollection(_name.current.value)
      .then(async (transaction) => {
        const tx = await transaction.wait();
        let event = await tx.events.find(
          (event) => event.event === "CollectionCreated"
        );
        console.log("Collection ID: ", parseInt(event.args[1]._hex, 16));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container-fluid">
      <nav aria-label="breadcrumb" className="border-bottom">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/My Collections">My Collections</Link>
          </li>
          <li className="breadcrumb-item " aria-current="page">
            Create a Collection
          </li>
        </ol>
      </nav>
      <div className="container">
        <h1>Create a Collection</h1>
        <p className="sub-title text-muted">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="currentColor"
            className="bi bi-asterisk text-danger"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z" />
          </svg>
          Required fields
        </p>

        <div className="mb-3">
          <label htmlFor="formName" className="form-label">
            Name
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="currentColor"
              className="bi bi-asterisk text-danger align-top"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z" />
            </svg>
          </label>
          <input
            className="form-control form-control-lg"
            type="text"
            id="formName"
            required
            ref={_name}
            onChange={(e) =>
              e.target.value ? setIsDisabled(false) : setIsDisabled(true)
            }
            placeholder="Example: Treasures of the Sea"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <p className="sub-title text-muted">
            <a className="link text-decoration-none" href="/">
              Markdown
            </a>{" "}
            syntax is supported. 0 of 1000 characters used.
          </p>
          <textarea
            className="form-control"
            id="description"
            rows="4"
          ></textarea>
        </div>

        {/* keep this */}

        {/* <div className="mb-3">
          <label htmlFor="creator-Earning" className="form-label">
            Creator Earnings
          </label>
          <p className="sub-title text-muted mb-0">
            Collect a fee when a user re-sells an item you originally created.
            This is deducted from the final sale price and paid monthly to a
            payout address of your choosing.
          </p>
          <a href="/" className="link text-decoration-none sub-title mt-0">
            Learn more about creator earnings.
          </a>
          <h6 className="text-muted mt-2">Percentage fee</h6>
          <input
            className="form-control form-control-lg"
            type="text"
            id="creator-Earning"
            placeholder="Example: 2.5"
          />
        </div> */}

        <button
          className="btn btn-primary my-5 px-4"
          disabled={isdisabled}
          onClick={createCollection}
        >
          Create
        </button>
      </div>
    </div>
  );
};
