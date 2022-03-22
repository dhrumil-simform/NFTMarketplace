import React from 'react'
import NotableDrops from "./NotableDropsSection/NotableDrops"
import {Switch,Router,Route}from "react-router-dom"
export const Attachement = () => {
  return (
        <div>

      <Switch>

        <Route path="/Explore">

            <NotableDrops/>

        </Route>



    </Switch>
        </div>
  )
}
