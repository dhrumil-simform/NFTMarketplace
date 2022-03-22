import React from 'react'
import "./helpDesk.css"
import { CardHelp } from './CardHelp'
import { carditem, questions } from "./DataHelp"
export const HelpDesk = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light bg-light stick-top mx-5">
        <div className="container-fluid">
          <a className="navbar-brand fs-3 fw-bold" href="#">
            <img
              src="/docs/5.0/assets/brand/bootstrap-logo.svg"
              alt=""
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            OpenSea
          </a>

          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active fs-3" aria-current="page" href="#"
              >Help Center</a
              >
            </li>
          </ul>
          <button
            className="btn btn-primary d-none d-md-block"
            type="button"
            data-bs-toggle="collapse"
          >
            Submit a request
          </button>
        </div>
      </nav>

      <main className="container-fluid">
        <div className="d-flex align-items-center helpDesk-hero mb-5" style={{ height: "300px" }}>
         
          <form
            className="d-flex m-auto align-items-center px-2 bg-body rounded"
            style={{ height: "44px", width: "500px", backgroundColor: "rgba(255, 0, 0, 0.1) " }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
              />
            </svg>
            <input
              className="form-control w-100 mx-2 my-0 shadow-none border-0"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          
        </div>

        <div className=" my-5">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {carditem.map(item => {
              return (
                <CardHelp title={item.title} desc={item.desc} />
              )

            })}

          </div>
        </div>

        <div className="container mb-5">
          <h4 className="title fw-bolder my-5">Promoted articles</h4>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {questions.map(que => {
              return (
                <div className="col">
                  <a href="http://" className="text-decoration-none text-dark">
                    <h5 className="title-inner"> {que} </h5>
                  </a>
                </div>
              )
            })}


          </div>
        </div>

      </main>
    </div>
  )
}


