import React from 'react'

export const ExploreCard = () => {
  return (
    <div className="card h-100">
    <img src="https://source.unsplash.com/collection/190727/500x500" className="card1-img-top main-img" alt="..."
        style={{ height: "14rem" }} />
    <div className="card1-body py-0">
        <img
            src="https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=3ef46b07bb19f68322d027cb8f9ac99f"
            style={{ width: "64px" }} className="avtar-img rounded-circle" alt="avtar-img" />
        <h5 className="collectionCard1-name">Card title</h5>
        <p className="author"><span>by</span> xyxs</p>
        <p className="card1-text description">
            Explore the MultiFaucet NFT - qh34rf24iu collection
        </p>
    </div>
</div>
  )
}
