import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./locations/LocationProvider"
import { ProductProvider } from "./products/ProductProvider"


import { LocationList } from "./locations/LocationList"
import { ProductList } from "./products/ProductList"

export const ApplicationViews = (props) => {
    return (
        <>
            <LocationProvider>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/">
                  <div className="location-container">
                    <LocationList />
                  </div>
                </Route>
            </LocationProvider>

            <ProductProvider>
                {/* Render the product list when http://localhost:3000/products */}
                <Route path="/products">
                  <div className="product-container">
                    <ProductList />
                  </div>
                </Route>
            </ProductProvider>
        </>
    )
}