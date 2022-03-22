import React from 'react'
import "./wallet.css"
export const MetamaskLanding = () => {
  return (
    <div className="wallet">
      <div className="wallet-header border-bottom">
        <p className="Wallet-name">
          <span className="profile-avtar me-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
          </span>
          My Wallet
        </p>
        <a className="wallet-address text-truncate">lyuflyutddlufgiffluofifiy</a>
      </div>
      <div className="wallet-body border my-2">
        <p className="text text-muted">Total balance</p>
        <p className="balance">
          <span className="doller-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.8rem"
              height="1.8rem"
              fill="currentColor"
              className="bi bi-currency-dollar"
              viewBox="0 0 16 16"
            >
              <path
                d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"
              />
            </svg>
          </span>
          0.00000 USD
        </p>
        <a type="button" className="btn btn-primary my-5">Add Fund</a>
      </div>
    </div>

  )
}
