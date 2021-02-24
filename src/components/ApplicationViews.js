import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./locations/LocationProvider"
import { ProductProvider } from "./products/ProductProvider"
import { ProductTypeProvider } from "./product-types/ProductTypeProvider"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import { EmployeeForm } from "./employees/EmployeeForm"
import { EmployeeList } from "./employees/EmployeeList"
import { LocationList } from "./locations/LocationList"
import { ProductList } from "./products/ProductList"

export const ApplicationViews = (props) => {
    return (
        <>
            <LocationProvider>
              <EmployeeProvider>
                <Route path="/employees" render={
              props => <div className="employee-container">
              <EmployeeList {...props} />
              </div>
              } />
              <Route exact path="/employees/create" render={
              props => <div className="employee-form__container">
              <EmployeeForm { ...props} />
              </div>
              }/>
              </EmployeeProvider>

              <Route exact path="/">
                <div className="location-container">
                  <LocationList />
                </div>
              </Route>
            </LocationProvider>

            <ProductTypeProvider>
              <ProductProvider>
                {/* Render the product list when http://localhost:3000/products */}
                <Route path="/products">
                  <div className="product-container">
                    <ProductList />
                  </div>
                </Route>
              </ProductProvider>
            </ProductTypeProvider>
        </>
    )
}