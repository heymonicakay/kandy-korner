import React from "react"
import "../styles/Product.css"

export const Product = ({ product, productType }) => (
    <section className="product">
        <h3 className="product__name">{product.name}</h3>
        <div className="product__type">Type: {productType.type}</div>
    </section>
)