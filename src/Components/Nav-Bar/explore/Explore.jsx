import React from "react";
import "./Explore.css";
import { ExploreCard } from "./ExploreCard";

export const Explore = () => {
  return (
    <main className="card1 text-center">
      <h2 className="title fs-1 fw-bolder my-5">Explore Collections</h2>

      <div className="container-card1-body">
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
      </div>
    </main>
  );
};
