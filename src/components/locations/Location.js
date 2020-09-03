import React from "react"
import "../styles/Location.css"

export const Location = ({ location }) => (
    <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <address className="location__address">{location.address}</address>
        <div className="location__handicap-access">{location.accessible}</div>
    </section>
)