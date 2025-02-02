import React, { useState, useEffect } from "react";
import "./App.css";
import Employees from "./components/Employees";
import EmployeesList from "./components/EmployeesList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [searchQuery, setSearchQuery] = useState(""); // State to hold search input
  const [employees, setEmployees] = useState([]); // State to hold employees data

  useEffect(() => {
    // Fetch employees data from API or database
    const fetchEmployees = async () => {
      try {
        const response = await fetch("https://example.com/api/employees");
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchEmployees();
  }, []);

  return (
    <div id="root">
      <BrowserRouter>
        <Header onSearch={setSearchQuery} />{" "}
        {/* Pass setSearchQuery to Header */}
        <main className="container my-4">
          <Routes>
            <Route
              path="/"
              element={<EmployeesList employees={employees} searchQuery={searchQuery} />}
            />
            <Route
              path="/employees"
              element={<EmployeesList employees={employees} searchQuery={searchQuery} />}
            />
            <Route path="/add-employee" element={<Employees />} />
            <Route path="/update-employee/:id" element={<Employees />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;