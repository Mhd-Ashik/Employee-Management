import React, { useEffect, useState } from "react";
import {
  createEmployee,
  getEmployee,
  updateEmployee,
} from "../service/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";

const Employees = () => {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const { id } = useParams();
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const navigator = useNavigate();

  useEffect(() => {
    if (id) {
      getEmployee(id)
        .then((response) => {
          setEmployee(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();

    if (validateForm()) {
      if (id) {
        updateEmployee(id, employee)
          .then((response) => {
            console.log(response.data);
            navigator("/employees");
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        createEmployee(employee)
          .then((response) => {
            console.log(response.data);
            navigator("/employees");
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  };

  const validateForm = () => {
    const errorsCopy = {
      firstName: employee.firstName.trim() ? "" : "First name is required!",
      lastName: employee.lastName.trim() ? "" : "Last name is required!",
      email: employee.email.trim() ? "" : "Email is required!",
    };

    setErrors(errorsCopy);

    return Object.values(errorsCopy).every((error) => !error);
  };

  const pageTitle = () => {
    return (
      <h2 className="text-center">{id ? "Update Employee" : "Add Employee"}</h2>
    );
  };

  const handleInputChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="container">
        <br />
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {pageTitle()}
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label">First Name:</label>
                  <input
                    type="text"
                    placeholder="Enter Employee First Name"
                    name="firstName"
                    value={employee.firstName}
                    className={`form-control ${
                      errors.firstName ? "is-invalid" : ""
                    }`}
                    onChange={handleInputChange}
                  />
                  {errors.firstName && (
                    <div className="invalid-feedback">{errors.firstName}</div>
                  )}
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Last Name:</label>
                  <input
                    type="text"
                    placeholder="Enter Employee Last Name"
                    name="lastName"
                    value={employee.lastName}
                    className={`form-control ${
                      errors.lastName ? "is-invalid" : ""
                    }`}
                    onChange={handleInputChange}
                  />
                  {errors.lastName && (
                    <div className="invalid-feedback">{errors.lastName}</div>
                  )}
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Email:</label>
                  <input
                    type="text"
                    placeholder="Enter Employee Email"
                    name="email"
                    value={employee.email}
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    onChange={handleInputChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                <button
                  className="btn btn-success"
                  onClick={saveOrUpdateEmployee}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employees;