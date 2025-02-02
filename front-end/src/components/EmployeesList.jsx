import React, { useEffect, useState } from "react";
import { deleteEmployee, listEmployees } from "../service/EmployeeService";
import { useNavigate } from "react-router-dom";

const EmployeesList = ({ searchQuery }) => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigator = useNavigate();

  useEffect(() => {
    getAllEmployees();
  }, []);

  const getAllEmployees = async () => {
    setLoading(true);
    try {
      const response = await listEmployees();
      setEmployees(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const addNewEmployee = () => {
    navigator("/add-employee");
  };

  const updateEmployee = (id) => {
    navigator(`/update-employee/${id}`);
  };

  const removeEmployee = async (id) => {
    try {
      await deleteEmployee(id);
      getAllEmployees();
    } catch (error) {
      setError(error.message);
    }
  };

  const filteredEmployees = employees.filter((employee) =>
    `${employee.firstName} ${employee.lastName} ${employee.email}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <br />
      <button className="btn btn-success mb-2" onClick={addNewEmployee}>
        Add Employee
      </button>
      {loading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : error ? (
        <div className="text-center text-danger">{error}</div>
      ) : (
        <table className="table table-striped table-bordered" id="table">
          <thead>
            <tr>
              <th>Employee Id</th>
              <th>Employee First Name</th>
              <th>Employee Last Name</th>
              <th>Employee Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.length > 0 ? (
              filteredEmployees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.email}</td>
                  <td>
                    <button
                      className="btn btn-info"
                      onClick={() => updateEmployee(employee.id)}
                    >
                      <i className="fas fa-edit"></i> Update
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeEmployee(employee.id)}
                      style={{ marginLeft: "10px" }}
                    >
                      <i className="fas fa-trash"></i> Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No employees found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EmployeesList;