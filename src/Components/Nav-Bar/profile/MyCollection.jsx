import React from 'react'
import { Switch, Router, Route,Link } from "react-router-dom"

export const MyCollection = () => {
    function handleMyCollection(){
        // <Route path="/My collections/exploremycollection"> </Route>
    }
  return (
    
    <div className="container px-5 mb-5">
      <h1 className="title fw-bold py-5">My Collections</h1>
      <p className="text text-muted">
        Create, curate, and manage collections of unique NFTs to share and sell.
        <span
          className="d-inline-block border border-dark rounded-circle px-2"
          tabindex="0"
          data-bs-toggle="popover"
          data-bs-trigger="hover focus"
          data-bs-content="Collections can be created either directly on OpenSea or imported from an existing smart contract. You can also mint on other services like Rarible or Mintable and import the items to OpenSea. Learn more about creating NFTs for free on OpenSea"
          >i</span
        >
      </p>
      <Link  to="/my collections/create" className="btn btn-primary btn-lg">
        Create a Collection
      </Link>
      <button type="button" className="btn btn-outline-primary btn-lg mx-3" onClick={handleMyCollection}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-three-dots-vertical"
          viewBox="0 0 16 16"
        >
          <path
            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
          />
        </svg>
      </button>
    </div>
   
    
  )
}
