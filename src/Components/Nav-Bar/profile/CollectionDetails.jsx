import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import MyNftCard from "../../Card/MyNftCard";
import { ethers } from "ethers";
import Collection from "../../../artifacts/contracts/CoreCollection.sol/CoreCollection.json";

const collectionAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

const CollectionDetails = () => {
  const location = useLocation();
  const { data } = location.state;
  console.log(data);
  const collectionData = useSelector((state) => state.dataReducer.data);
  console.log(collectionData);
  // const collectionData = state.dataReducer.data;
  const [colData, setColData] = useState({});
  // collectionData.then()
  console.log(collectionData);
  let provider;
  const onPageLoad = async () => {
    provider = new ethers.providers.Web3Provider(window.ethereum);
  };
  useEffect(async () => {
    await onPageLoad();
    fetchNFTs();
  });

  const fetchNFTs = async () => {
    const contract = new ethers.Contract(
      collectionAddress,
      Collection.abi,
      provider
    );

    try {
      const nftIds = await contract.getItems(collectionData.id);
      // setColData(nftIds);
      console.log(nftIds);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {collectionData === undefined ? (
        <h1>Wait </h1>
      ) : (
        <div className="container">
          <div className=" text-center">
            <h1>Collection Details</h1>
            <div className="m-5 ">
              <img
                src={collectionData.image}
                alt={collectionData.name}
                style={{ height: "350px" }}
              />
            </div>

            <h3>name :{collectionData.name}</h3>
            <h4> Owner : {collectionData.creator}</h4>
            <h4>Description : {collectionData.description}</h4>
          </div>
          {console.log("collectionData ", collectionData)}
          <hr />
          <h3 className="text-center">My NFT's</h3>

          <div className="row row-cols-md-3 gy-3 p-0 m-5">
            <MyNftCard />
            <MyNftCard />
            <MyNftCard />
          </div>
        </div>
      )}
    </>
  );
};

export default CollectionDetails;
