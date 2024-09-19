// import React from "react";
// import "./App.css";
// import Form from "./Form";

// function App() {
//   return (
//     <div className="App">
//       <Form />
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import "./App.css"; // Import the CSS file

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://e8u58jh544.execute-api.eu-north-1.amazonaws.com/prod/submit",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (response.ok) {
      alert("Data submitted successfully");
      setFormData({ name: "", email: "" }); // Clear form after submission
    } else {
      alert("Error submitting data");
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Submit Your Information</h1>
      <form className="user-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
