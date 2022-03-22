import React from 'react'
import {
  FaTwitter,
  FaInstagram,
  FaDiscord,
  FaRedditAlien,
  FaYoutube,
  FaEnvelope,
} from 'react-icons/fa'
import logo from "./logo.svg"

export default function Footer() {
  const footerdata={
            text:'Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating OpenSea.',
            searchPlaceholder:'Your email address',
            logo:logo,
            aboutBrand:"The world's first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.",
            twitterUrl:'',
            youtubeUrl:'',
            discordUrl:'',
            instagramUrl:'',
            emailUrl:'',
            copyRight:'© 2018 - 2022 Ozone Networks, Inc',
  }
  return (
    
    <div className='container-fluid'>
      <div className='container footer'>
        <div className='row'>
          <div className='col-lg-6 col-md-12 stay-in-loop'>
            <h3 className='title'>Stay in loop</h3>
            <p className='text'>{footerdata.text}</p>
            <form action='' className='search-container'>
              <input type='text' placeholder={footerdata.searchPlaceholder} />
              <button className='btn search-btn'>Sign up</button>
            </form>
          </div>
          <div className='col-lg-6 col-md-12 community'>
            <h3 className='title m-4'>Join the community</h3>
            <i className='feature-icon cursor-pointer'>
              <FaTwitter />
            </i>
            <i className='feature-icon cursor-pointer'>
              <FaInstagram />
            </i>
            <i className='feature-icon cursor-pointer'>
              <FaDiscord />
            </i>
            <i className='feature-icon cursor-pointer'>
              <FaRedditAlien />
            </i>
            <i className='feature-icon cursor-pointer'>
              <FaYoutube />
            </i>
            <i className='feature-icon cursor-pointer'>
              <FaEnvelope />
            </i>
          </div>
        </div>
        <hr className='mb-5' />
        <div className='row'>
          <div className='col-lg-4 col-md-12 company'>
            <img src={footerdata.logo} alt='brand-logo' className='brand-logo' />
            <a href='/' className='title cursor-pointer'>
              <h3>OpenSea</h3>
            </a>
            <p className='about'>{footerdata.aboutBrand}</p>
          </div>
          <div className='col-lg-2 col-md-3 col'>
            <h5 className='title'>Markerplace</h5>

            <li className='item cursor-pointer my-2'>Art</li>
            <li className='item cursor-pointer my-2'>Photography</li>
            <li className='item cursor-pointer my-2'>Sports</li>
            <li className='item cursor-pointer my-2'>Virtual World</li>
            <li className='item cursor-pointer my-2'>Music</li>
            <li className='item cursor-pointer my-2'>Utility</li>
          </div>
          <div className='col-lg-2 col-md-3 col'>
            <h5 className='title'>My Account</h5>

            <li className='item cursor-pointer my-2'>Profile</li>
            <li className='item cursor-pointer my-2'>Favorites</li>
            <li className='item cursor-pointer my-2'>Watchlist</li>
            <li className='item cursor-pointer my-2'>My Collections</li>
            <li className='item cursor-pointer my-2'>Settings</li>
          </div>
          <div className='col-lg-2 col-md-3 col'>
            <h5 className='title'>Resources</h5>

            <li className='item cursor-pointer my-2'>Help Center</li>
            <li className='item cursor-pointer my-2'>Platform Status</li>
            <li className='item cursor-pointer my-2'>Partners</li>
            <li className='item cursor-pointer my-2'>Gas-Free Marketplace</li>
            <li className='item cursor-pointer my-2'>Taxes</li>
            <li className='item cursor-pointer my-2'>Blog</li>
            <li className='item cursor-pointer my-2'>Docs</li>
            <li className='item cursor-pointer my-2'>Newsletter</li>
          </div>
          <div className='col-lg-2 col-md-3 col'>
            <h5 className='title'>Company</h5>

            <li className='item cursor-pointer my-2'>About</li>
            <li className='item cursor-pointer my-2'>Careers</li>
            <li className='item cursor-pointer my-2'>Ventures</li>
            <li className='item cursor-pointer my-2'>Grants</li>
          </div>
        </div>
        <hr className='mt-5' />

        <a href='/' className='copy-right'>
          {footerdata.copyRight}
        </a>
      </div>
    </div>
  )
}
