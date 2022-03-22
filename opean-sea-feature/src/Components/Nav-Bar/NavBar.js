import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import './NavBar.css'
import Brand from './Brand'
import { Switch, Router, Route } from 'react-router-dom'
import NavItem from './NavItem'
import { navBarData } from './NavBarData'
import { HelpDesk } from './resources/HelpDesk'
import { Explore } from './explore/Explore'
import { MyCollection } from './profile/MyCollection'
import { CreateNewItems } from '../CreateNewItems'
import { CreateCollection } from './profile/CreateCollection'
import { Wallet } from '../Wallet'
import { MetamaskLanding } from '../MetamaskLanding'

export default function Navbar() {
  const [click, setClick] = useState(false)
  // console.log(props)
  const handleClick = () => {
    setClick(!click)
  }

  return (
    <>
      <nav
        className={`navbar navbar-expand-md isvisible sticky-top navbar-${navBarData.theme} bg-${navBarData.theme} border-bottom px-5`}
      >
        {/* <div className='container mx-5'> */}
        <Brand
          brandName={navBarData.brandName}
          brandLogoUrl={navBarData.brandLogoUrl}
        />
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          onClick={handleClick}
          data-bs-target='#navbarItems'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className={click ? 'fa fa-times' : 'fa fa-bars'}></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarItems'>
          <form className={`container container-search`}>
            <BiSearch size='24px' />
            <input
              className='form-control box-shadow-none'
              type='search'
              placeholder={navBarData.search}
              aria-label='Search'
            />
          </form>

          <ul className='navbar-nav mx-5'>
            {navBarData.navItems.map((item) => (
              <NavItem key={item.id} item={item} />
            ))}
          </ul>
        </div>

        {/* </div> */}
      </nav>

      <Switch>
        <Route path='/Explore'>
          <Explore />
        </Route>
        <Route path='/Help center'>
          <HelpDesk />{' '}
        </Route>
        <Route path='/create'>
          {' '}
          <CreateNewItems />{' '}
        </Route>
        <Route path='/my Collections' exact>
          {' '}
          <MyCollection />
        </Route>

        <Route path='/my collections/create' exact>
          <CreateCollection />
        </Route>

        <Route path='/Wallet'>
          <Wallet />
        </Route>
        <Route path='/metamasklanding'>
          <MetamaskLanding />
        </Route>
      </Switch>
    </>
  )
}
