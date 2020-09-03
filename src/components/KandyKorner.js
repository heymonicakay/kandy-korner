import React from "react"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"

import "./nav/NavBar.css"

export const KandyKorner = () => (
    <>
      <div className="wrapper">
        <NavBar />
        <ApplicationViews />
      </div>
    </>
)