import React from "react";
import "./ExploreCard.css";
import { useNavigate } from "react-router-dom";

const ExploreCard = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Explore/Nft");
  };

  return (
    <div className="card h-100" onClick={handleClick}>
      <img
        src="https://source.unsplash.com/collection/190727/500x500"
        className="card-img-top"
        alt="..."
        style={{ height: "18rem" }}
      />
      <div className="body text-center">
        <h4 className="card-title mt-5 mb-3">{props.title}</h4>
        <p className="author mb-3 fs-4">
          by<span className="text-primary">{props.uname}</span>
        </p>
        <p className="card-text text-truncate px-5 my-3 description">
          {props.desc}
        </p>
      </div>
    </div>
  );
};

export default ExploreCard;
