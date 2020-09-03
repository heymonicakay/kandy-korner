import React from "react"
import "../styles/Product.css"

export const Product = ({ product }) => (
    <section className="product">
        <div className="product__id">ID: {product.id}</div>
        <h3 className="product__name">{product.name}</h3>
        <div className="product__type">Type: {product.typeId}</div>
    </section>
)