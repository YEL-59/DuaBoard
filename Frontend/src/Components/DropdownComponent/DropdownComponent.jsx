import React, { useEffect, useState } from "react";
import SingleDropdown from "./SingleDropdown";

const DropdownComponent = () => {
  const [dropdownData, setDropdownData] = useState([]);

  useEffect(() => {
    // Fetch the data from the API
    fetch("http://localhost:5000/api/dropdown")
      .then((response) => response.json())
      .then((data) => setDropdownData(data))
      .catch((error) => console.error("Error fetching dropdown data:", error));
  }, []);

  return (
    <div className="space-y-4">
    {dropdownData.map((dropdown, index) => (
      <SingleDropdown key={index} data={dropdown} />
    ))}
  </div>
  );
};

export default DropdownComponent;
