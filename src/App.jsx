import React, { useState } from "react";
import AdmissionForm from "./Admission-form";
import PasswordStrength from "./Password-strength/password-strength";
import BackgroundSwitcher from "./Background-switcher/background-switcher";
import BotSearch from "./Search-bar/Search-bar-usememo";
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

  if (activePage === "bgcolor") {
    return (
      <div>
        <button onClick={() => setActivePage("home")}>← Back</button>
        <BackgroundSwitcher />
      </div>
    );
  }

  if (activePage === "botsearch") {
    return (
      <div>
        <button onClick={() => setActivePage("home")}>← Back</button>
        <BotSearch />
      </div>
    );
  }

  return (
    <>
      <div>
        <button onClick={() => setActivePage("admission")}>
          Student Admission Form
        </button>

        <button onClick={() => setActivePage("password")}>
          Password Strength Checker
        </button>

        <button onClick={() => setActivePage("bgcolor")}>
          Background color Switcher
        </button>

        <button onClick={() => setActivePage("botsearch")}>
          AIBots Search Bar
        </button>
      </div>
    </>
  );
}

export default App;
