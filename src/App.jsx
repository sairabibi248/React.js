import React, { useState } from "react";
import AdmissionForm from "./Admission-form";
import PasswordStrength from "./Password-strength/password-strength";

function App() {
  const [activePage, setActivePage] = useState("home");

  if (activePage === "admission") {
    return (
      <div>
        <button onClick={() => setActivePage("home")}>← Back</button>
        <AdmissionForm />
      </div>
    );
  }

  if (activePage === "password") {
    return (
      <div>
        <button onClick={() => setActivePage("home")}>← Back</button>
        <PasswordStrength />
      </div>
    );
  }

  return (
    <div>
      <div>
        <button onClick={() => setActivePage("admission")}>
          Student Admission Form
        </button>

        <button onClick={() => setActivePage("password")}>
          Password Strength Checker
        </button>
      </div>
    </div>
  );
}

export default App;
