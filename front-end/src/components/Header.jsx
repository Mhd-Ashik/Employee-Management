import React, { useState, useEffect } from "react";

const Header = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState("");
  const [debouncedSearchInput, setDebouncedSearchInput] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearchInput(searchInput);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [searchInput]);

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  useEffect(() => {
    onSearch(debouncedSearchInput);
  }, [debouncedSearchInput, onSearch]);

  return (
    <header>
      <nav className="navbar navbar-light bg-light justify-content-between px-4">
        <a className="navbar-brand">Govt Of India</a>
        <form className="form-inline d-flex">
          <input
            className="form-control mr-2"
            type="search"
            placeholder="Search by name or email"
            aria-label="Search"
            value={searchInput}
            onChange={handleSearchChange}
            style={{ marginRight: "10px", width: "350px" }}
          />
        </form>
      </nav>
    </header>
  );
};

export default Header;