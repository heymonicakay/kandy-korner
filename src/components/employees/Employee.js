import React from "react"
import "./Employee.css"

export const Employee = ({ employee, location }) => (
    <section className="employee-card">
        <h3 className="employee__name">{employee.name}</h3>
      <section className="employee__details">
        <div className="employee__location">Store: {location.name}</div>
        <div className="employee__address">Manager: {employee.manager}</div>
        <div className="employee__owner">Hourly Rate: {employee.pay}</div>
      </section>
    </section>
)
