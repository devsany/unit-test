import React from "react";

const DisplayValue = () => {
  return (
    <div>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        placeholder="Enter your name"
        value="Sunny"
        onChange={() => {}}
      />
    </div>
  );
};

export default DisplayValue;
