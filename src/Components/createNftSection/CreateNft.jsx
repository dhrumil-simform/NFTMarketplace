import React from "react";
import dataFeature from "./CreateNftData";
import Feature from "./Feature";
export const CreateNft = () => {
  return (
    <div className="container features row">
      <h3 className="title my-3">Create and sell your Features</h3>
      {dataFeature.map(
        (data) => (
          <div className="col-lg-3 col-md-12" key={data.id}>
            <Feature
              id={data.id}
              icon={data.icon}
              title={data.title}
              content={data.content}
            />
          </div>
        )
      )}
    </div>
  );
};
