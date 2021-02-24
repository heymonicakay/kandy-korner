// Create a form for hiring employees. You must be able to choose a location when filling out the form. An employee should have the following information provided.

// Name (string)
// Location (foreign key)
// Manager (boolean)
// Full time (boolean)
// Hourly rate (number)
// Once the user fills out the form, a new employee object representation should be created, then use fetch to POST that object to your database. When the saving process is complete, redirect the user to the /employee route to see a list of all employees.

// Make sure that each employee HTML representation displays the name of the location in which she works instead of the foreign key.

import React, { useContext, useRef, useEffect } from "react"
import { EmployeeContext } from "../employees/EmployeeProvider"
import { LocationContext } from "../locations/LocationProvider"
import "./Employee.css"

export const EmployeeForm = (props) => {
  const { addEmployee } = useContext(EmployeeContext)
  const { locations, getLocations } = useContext(LocationContext)

  const name = useRef(null)
  const location = useRef(null)
  const manager = useRef(null)
  const employment = useRef(null)
  const pay = useRef(null)

  useEffect(() => {
    getLocations()
  }, [])

  const constructNewEmployee = () => {
    const locationId = parseInt(location.current.value)

    if (locationId === 0) {
      window.alert("Please select a location")
    } else {
      addEmployee({
        name: name.current.value,
        locationId,
        manager: manager.current.value,
        employment: employment.current.value,
        pay: pay.current.value
      })
      .then(() => props.history.push("/employees"))
    }
  }
  return (
    <form className="employee-form">
        <h2 className="employee-form--title">
          New Employee
        </h2>

        <div className="form-group">
          <label htmlFor="employeeName">Employee name: </label>
          <input type="text" id="employeeName" ref={name} required autoFocus className="form-control" placeholder="Employee name" />
        </div>

        <div className="form-group">
          <label htmlFor="location">Assign to store: </label>
          <select defaultValue="" name="location" ref={location} id="employeeLocation" className="form-control" >
              <option value="0">Select a location</option>
              {locations.map(l => (
                  <option key={l.id} value={l.id}>
                      {l.name}
                  </option>
              ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="employeeManager">Employee Manager: </label>
          <input type="text" id="employeeManager" ref={manager} required autoFocus className="form-control" placeholder="Employee manager" />
        </div>

        <div className="form-group">
          <label htmlFor="employment">Employment type: </label>
          <select defaultValue="" name="employment" ref={employment} id="emplyeeEmployment" className="form-control" >
              <option value="0">Select an option</option>
                  <option value="1">
                      Full-Time
                  </option>
                  <option value="2">
                      Part-Time
                  </option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="pay">Hourly Rate: </label>
          <input type="text" id="employeePay" ref={pay} required autoFocus className="form-control" placeholder="Hourly rate" />
        </div>

        <button type="submit"
            onClick={e => {
                e.preventDefault()
                constructNewEmployee()
            }}
            className="btn save-btn save-btn--emp">
            Save Employee
        </button>
    </form>
  )
}