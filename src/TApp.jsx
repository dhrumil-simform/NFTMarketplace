import React from 'react'
import './App.css'
import Navbar from './Components/Nav-Bar/NavBar'
import { Switch, Router, Route,Link } from "react-router-dom"
import Hero from './Components/Hero/Hero'
import Footer from './Components/footer/Footer'
import { CreateNft } from "./Components/createNftSection/CreateNft"
import { Resources } from './Components/Resources/Resources'
import NotableDrops from './Components/NotableDropsSection/NotableDrops'
import { CategoryCards } from "./Components/CategoryCards/CategoryCards"


import TopCollections from './Components/TopCollections/TopCollections'

function TApp() {
    return (

        <React.Fragment>

            <Navbar />

            <Switch>
              
                <Route path="/" exact>

                    <Hero />
                    <NotableDrops />
                    <TopCollections />
                    <Resources />
                    <CreateNft />
                    <Resources />
                    <CategoryCards />

                </Route>
            </Switch>

            <footer className='footer'>
                <Footer />
            </footer>

        </React.Fragment>
    )
}

export default TApp