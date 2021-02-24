import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../locations/LocationProvider"
import { Employee } from "./Employee"
import "./Employee.css"

export const EmployeeList = (props) => {
    const { employees, getEmployees } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        getEmployees().then(getLocations)
    }, [])

    return (
        <div className="employees">
          <h2>Employees</h2>
          <button className="btn add-emp-btn" onClick={() => props.history.push("/employees/create")}>
          Add Employee
          </button>
          <article className="employeeList">
        {
            employees.map(e => {
            const store = locations.find(l => l.id === e.locationId) || {}

            return <Employee
            key={e.id}
            employee={e}
            location={store} />
          })
        }
          </article>
        </div>
    )
}