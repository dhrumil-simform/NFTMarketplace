import React from "react";
import "./CreateNewItem.css";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Collection from "../artifacts/contracts/CoreCollection.sol/CoreCollection.json";

const collectionAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

export const CreateNewItems = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchCollections = async () => {
      const [account] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        collectionAddress,
        Collection.abi,
        provider
      );

      const collectionIds = await contract.getCollectionIds(account);
      let collectionNames = [];
      collectionIds.map(async (data, index) => {
        const dt = await contract.collections(data);
        const obj = {
          index: index,
          CollectionName: dt.name,
        };
        collectionNames.push(obj);
      });

      // console.log(collectionNames);
      setCollections(collectionNames);
    };

    fetchCollections();
    console.log(collections);
  }, []);

  const getCollections = async () => {
    const [account] = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(
      collectionAddress,
      Collection.abi,
      provider
    );
    const collectionIds = await contract.getCollectionIds(account);
    let collectionNames = [];
    collectionIds.map(async (data, index) => {
      const dt = await contract.collections(data);
      const obj = {
        index: index,
        CollectionName: dt.name,
      };
      collectionNames.push(obj);
      // console.log(collectionNames);
    });
    // console.log(collectionNames)
    setCollections(collectionNames);
  };
  // console.log(collections);

  // collections.map((collect_name) => console.log(collect_name));

  return (
    <div className="container">
      <h1>Create New Item</h1>
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
        Required field
      </p>
      <div className="mb-3">
        <label htmlFor="formFile" className="form-label">
          Image
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
        <p className="sub-title text-muted">
          File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG,
          GLB, GLTF. Max size: 100 MB
        </p>
        <input
          className="form-control choose-file"
          type="file"
          id="formFile"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="formFile" className="form-label">
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
          required
          placeholder="item name"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="formFile" className="form-label">
          External link
        </label>
        <p className="sub-title text-muted">
          OpenSea will include a link to this URL on this item's detail page, so
          that users can click to learn more about it. You are welcome to link
          to your own webpage with more details.
        </p>
        <input
          className="form-control form-control-lg"
          type="text"
          placeholder="https://yoursite.io/item/123"
          aria-label=".form-control-lg example"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <p className="sub-title text-muted">
          The description will be included on the item's detail page underneath
          its image. Markdown syntax is supported.
        </p>
        <textarea
          className="form-control"
          id="description"
          placeholder="Provide a detailed description of your item."
          rows="4"
          columns="5"
        ></textarea>
      </div>

      <div className="mb-3 collection">
        <label htmlFor="collection" className="form-label">
          Collection
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
        <p className="sub-title text-muted">
          This is the collection where your item will appear.
          <span
            className="d-inline-block"
            tabIndex="0"
            data-bs-toggle="popover"
            data-bs-trigger="hover focus"
            data-bs-content="Moving items to a different collection may take up to 30 minutes. You can manage your collections here."
          ></span>
        </p>
        {/* <select
          className="form-select form-select-lg mb-4"
          id="collection"
          placeholder="Select collection"
        >
          {collections.map((collect_name) => (
            <option value={collect_name.index}>
              {collect_name.index}
            </option>
          ))}
        </select> */}
        {collections ? (
          <h1>kai pn</h1>
        ) : (
          collections.map((collect_name) => (
            <span key={collect_name.index}>{collect_name.index}</span>
          ))
        )}
      </div>

      {/* <div className="my-3">
        <div className="d-flex border-bottom my-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            className="bi bi-layout-text-sidebar-reverse"
            viewBox="0 0 16 16"
          >
            <path d="M12.5 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5zm0 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5zm.5 3.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm-.5 2.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5z" />
            <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2zM4 1v14H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h2zm1 0h9a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5V1z" />
          </svg>

          <div className="col mx-3">
            <h6 className="title">Properties</h6>
            <p className="text sub-text">
              Textual traits that show up as rectangles
            </p>
          </div>

          <button className="btn btn-add">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-plus-lg"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
              />
            </svg>
          </button>
        </div>

        <div className="d-flex border-bottom my-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            className="bi bi-star-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>

          <div className="col mx-3">
            <h6 className="title">Levels</h6>
            <p className="text sub-text">
              Numerical traits that show as a progress bar
            </p>
          </div>

          <button className="btn btn-add">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-plus-lg"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
              />
            </svg>
          </button>
        </div>

        <div className="d-flex border-bottom my-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            className="bi bi-bar-chart-fill"
            viewBox="0 0 16 16"
          >
            <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z" />
          </svg>

          <div className="col mx-3">
            <h6 className="title">Stats</h6>
            <p className="text sub-text">
              Numerical traits that show as a progress bar
            </p>
          </div>

          <button className="btn btn-add">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-plus-lg"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
              />
            </svg>
          </button>
        </div>

        <div className="d-flex border-bottom my-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            className="bi bi-unlock-fill"
            viewBox="0 0 16 16"
          >
            <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2z" />
          </svg>
          <div className="col mx-3">
            <h6 className="title">Unlockable Content</h6>
            <p className="text sub-text">
              Include unlockable content that can only be revealed by the owner
              of the item.
            </p>
          </div>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="" />
          </div>
        </div>

        <div className="d-flex border-bottom my-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            className="bi bi-exclamation-triangle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
          <div className="col mx-3">
            <h6 className="title">Explicit & Sensitive Content</h6>
            <p className="text sub-text">
              Set this item as explicit and sensitive contentinfo
            </p>
          </div>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="" />
          </div>
        </div>
      </div> */}

      <button
        className="btn btn-lg btn-outline-primary rounded-3 my-5 mx-5"
        onClick={getCollections}
      >
        Create
      </button>
    </div>
  );
};