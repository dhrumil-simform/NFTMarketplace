import React from 'react'
import "./CreateCollection.css"
import {Link} from "react-router-dom"
export const CreateCollection = () => {
  return (
    <div className="container-fluid">
      <nav
       
        aria-label="breadcrumb"
        className="border-bottom"
      >
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/My Collections">My Collections</Link></li>
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
            <path
              d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"
            />
          </svg>
          Required fields
        </p>
        <div className="mb-3">
          <label htmlFor="formFileLogo-img" className="form-label"
            >Logo image
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="currentColor"
              className="bi bi-asterisk text-danger align-top"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"
              />
            </svg>
          </label>
          <p className="sub-title text-muted">
            This image will also be used for navigation. 350 x 350 recommended.
          </p>
          <input
            className="form-control choose-file rounded-circle logo-img"
            type="file"
            id="formFileLogo-img"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="formFileFeatured-img" className="form-label">
            Featured image
          </label>
          <p className="sub-title text-muted">
            This image will be used for featuring your collection on the
            homepage, category pages, or other promotional areas of OpenSea. 600
            x 400 recommended.
          </p>
          <input
            className="form-control choose-file featured-img"
            type="file"
            id="formFileFeatured-img"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">Banner image </label>
          <p className="sub-title text-muted">
            This image will appear at the top of your collection page. Avoid
            including too much text in this banner image, as the dimensions
            change on different devices. 1400 x 400 recommended.
          </p>
          <input
            className="form-control choose-file banner-img"
            type="file"
            id="formFile"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="formName" className="form-label"
            >Name
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="currentColor"
              className="bi bi-asterisk text-danger align-top"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"
              />
            </svg>
          </label>
          <input
            className="form-control form-control-lg"
            type="text"
            id="formName"
            required
            placeholder="Example: Treasures of the Sea"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="formURL" className="form-label">URL</label>
          <p className="sub-title text-muted">
            Customize your URL on OpenSea. Must only contain lowercase
            letters,numbers, and hyphens.
          </p>
          <input
            className="form-control form-control-lg"
            id="formURL"
            type="text"
            placeholder="https://opensea.io/collection/treasures-of-the-sea"
            aria-label=".form-control-lg example"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <p className="sub-title text-muted">
            <a className="link text-decoration-none" href="/">Markdown</a> syntax is
            supported. 0 of 1000 characters used.
          </p>
          <textarea className="form-control" id="description" rows="4"></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="addCategory" className="form-label">Category </label>
          <p className="text-muted sub-title">
            Adding a category will help make your item discoverable on OpenSea.
          </p>
          <select
            className="p-2"
            id="addCategory"
            aria-label="Default select example"
          >
            <option selected>Add category</option>
            <option value="1">Art</option>
            <option value="2">Sports</option>
            <option value="3">Photography</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="basic-url" className="form-label">Links</label>
          <div className="input-group">
            <span className="input-group-text" id="basic-addon1">
              <svg
                
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-layout-text-window mx-2"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3 6.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"
                />
                <path
                  d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v1H1V2a1 1 0 0 1 1-1h12zm1 3v10a1 1 0 0 1-1 1h-2V4h3zm-4 0v11H2a1 1 0 0 1-1-1V4h10z"
                />
              </svg>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="yoursite.io"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group">
            <span className="input-group-text" id="basic-addon2">
              <svg
                
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-instagram mx-2"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                />
              </svg>
              https://www.instagram.com/
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="YourInstagramHandle"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </div>

          <div className="input-group">
            <span className="input-group-text" id="basic-addon3">
              <svg
                
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-discord mx-2"
                viewBox="0 0 16 16"
              >
                <path
                  d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"
                />
              </svg>
              https://discord.gg/</span
            >
            <input
              type="text"
              className="form-control"
              placeholder="abcde"
              aria-describedby="basic-addon3"
            />
          </div>

          <div className="input-group">
            <span className="input-group-text">
              <svg
               
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-send-fill mx-2"
                viewBox="0 0 16 16"
              >
                <path
                  d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"
                />
              </svg>
              https://t.me/
            </span>
            <input
              type="text"
              placeholder="abcde"
              className="form-control"
              aria-label="Amount (to the nearest dollar)"
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="creator-Earning" className="form-label"
            >Creator Earnings</label
          >
          <p className="sub-title text-muted mb-0">
            Collect a fee when a user re-sells an item you originally created.
            This is deducted from the final sale price and paid monthly to a
            payout address of your choosing.
          </p>
          <a href="/" className="link text-decoration-none sub-title mt-0"
            >Learn more about creator earnings.</a
          >
          <h6 className="text-muted mt-2">Percentage fee</h6>
          <input
            className="form-control form-control-lg"
            type="text"
            id="creator-Earning"
            placeholder="Example: 2.5"
          />
        </div>
        <div className="d-flex mb-3">
          <div className="col">
            <h6 className="title">Explicit & Sensitive Content</h6>
            <p className="text sub-text">
              Set this item as explicit and sensitive content
              <span
                className="d-inline-block"
                tabIndex="0"
                data-bs-toggle="popover"
                data-bs-trigger="hover focus"
                data-bs-content="Setting your collection as explicit and sensitive content, like pornography and other not safe for work (NSFW) content, will protect users with safe search while browsing OpenSea.
Learn more about explicit content at OpenSea here."
              >
                <button className="btn i-btn" type="button" disabled>i</button>
              </span>
            </p>
          </div>
          <div className="form-check form-switch my-4">
            <input className="form-check-input" type="checkbox" id="" />
          </div>
        </div>

        <button className="btn btn-primary disabled my-5 px-4">Create</button>
      </div>
    </div>

  )
}
