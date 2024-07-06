import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Finder = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleSearch = (event) => {
        event.preventDefault();
        if (!searchTerm) {
            alert('Please enter a search term.');
        } else {
            navigate("/products/search/" + searchTerm);
            setSearchTerm("");
        }
    };

    return (
        <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input
                className="form-control me-2"
                type="search"
                placeholder="Search store"
                aria-label="Search"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    );
}
