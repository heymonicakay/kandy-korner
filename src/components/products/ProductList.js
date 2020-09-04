import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import { Product } from "./Product"
import { ProductTypeContext } from "../product-types/ProductTypeProvider"
import "../styles/Product.css"

export const ProductList = () => {
    const { products, getProducts } = useContext(ProductContext)
    const { productTypes, getProductTypes } = useContext(ProductTypeContext)

    useEffect(() => {
        getProducts().then(getProductTypes)
    }, [])

    return (
        <div className="products">
        {
            products.map(p => {
            const type = productTypes.find(pt => pt.id === p.typeId) || {}

            return <Product
            key={p.id}
            product={p}
            productType={type} />
          })
        }
        </div>
    )
}