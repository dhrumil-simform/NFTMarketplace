import React, {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
  useContext,
} from "react";
import { ethers } from "ethers";
import Collection from "../../artifacts/contracts/CoreCollection.sol/CoreCollection.json";
import Market from "../../artifacts/contracts/Market.sol/Market.json";
import { FaOldRepublic } from "react-icons/fa";
import { AppContext } from "../../App";
// const collectionAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
const collectionAddress = (process.env.REACT_APP_CORECOLLECTION_ADDRESS).toString();
// const marketAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const marketAddress = (process.env.REACT_APP_MARKET_ADDRESS).toString();

const NFTOffer = (props, ref) => {
  const [offerList, setOfferList] = useState([]);
  const { currentAccount } = useContext(AppContext);
  const [tableVisibility, setTableVisibility] = useState(true);
  let contract;
  let provider;
  let rowCounter = 0;
  useEffect(() => {
    getTableData();
  }, []);

  useImperativeHandle(
    ref,
    () => ({
      getTable() {
        getTableData();
      },
    }),
    []
  );

  const getTableData = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    contract = new ethers.Contract(marketAddress, Market.abi, signer);
    const offers = await contract.getOfferIds(props.TOKENID);
    setOfferList([]);
    for (let i = 0; i < offers.length; i++) {
      const offer = {
        user: await contract.offerIdToUser(offers[i]),
        price: await contract.offerIdToPrice(offers[i]),
        status: await contract.offerStatus(offers[i]),
        // offerOwner: await contract.offerIdToUser(offers[i])
      };
      //   console.log(offer.status);
      if (offer.status) {
        setTableVisibility(false);
      }

      setOfferList((old) => [...old, offer]);
    }
    rowCounter = 0;
  };
  const acceptOffer = async (index) => {
    const txt = await props.Contract.acceptOffer(
      props.TOKENID,
      index,
      collectionAddress
    );
    await txt.wait();
    getTableData();
  };
  const cancelOffer = async (index) => {
    const txt = await props.Contract.cancelOffer(
      props.TOKENID,
      index,
      collectionAddress
    );
    await txt.wait();
    getTableData();
    // const x = await Contract.idToOffers(TOKENID, index)
    // console.log(await Contract.offerStatus(x))
  };

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button
          className="accordion-button fs-2 collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          Offers
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body fs-3">
          <div className="table-responsive-md">
            {tableVisibility ? (
              <h4>No Offer</h4>
            ) : (
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">price</th>
                    <th scope="col">User</th>
                  </tr>
                </thead>
                <tbody>
                  {offerList.map((data, index) => {
                    const price = ethers.utils.formatEther(
                      "" + JSON.parse(data.price)
                    );

                    if (data.status) {
                      return (
                        <tr key={index}>
                          <th scope="row">{++rowCounter}</th>
                          <td>{price}</td>
                          <td title={data.user}>
                            {data.user.slice(0, 4) +
                              "..." +
                              data.user.slice(39, 42)}
                          </td>

                          {props.ifOwner ? (
                            <td>
                              {currentAccount == data.user.toLowerCase() && (
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                  onClick={() => cancelOffer(index)}
                                >
                                  Cancel Offer
                                </button>
                              )}
                            </td>
                          ) : (
                            <td>
                              <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => acceptOffer(index)}
                              >
                                Accept Offer
                              </button>
                            </td>
                          )}
                        </tr>
                      );
                    }
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(NFTOffer);