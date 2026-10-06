import React, { useState } from "react";
import "./App.css";

function AdmissionForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [cnic, setCnic] = useState("");
  const [nationality, setNationality] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [guardianName, setGuardianName] = useState("");
  const [guardianCnic, setGuardianCnic] = useState("");
  const [guardianPhone, setGuardianPhone] = useState("");
  const [course, setCourse] = useState("");
  const [terms, setTerms] = useState(false);

  return (
    <>
      <h3>Student Admission Form</h3>

      <form>
        <h2>Student Details</h2>

        <div>
          <label>First Name: </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter first name"
          />
        </div>

        <div>
          <label>Last Name: </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter last name"
          />
        </div>

        <div>
          <label>Date of Birth: </label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>

        <div>
          <label>CNIC Number: </label>
          <input
            type="text"
            value={cnic}
            onChange={(e) => setCnic(e.target.value)}
            placeholder="XXXXX-XXXXXXX-X"
          />
        </div>

        <div>
          <label>Nationality: </label>
          <input
            type="text"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
            placeholder="Enter nationality"
          />
        </div>

        <div className="gender-container">
          <label>Gender: </label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />{" "}
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />{" "}
          Female
        </div>

        <h2>Contact Information</h2>

        <div>
          <label>Home Address: </label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter complete home address"
          />
        </div>

        <div>
          <label>City: </label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
          />
        </div>

        <div>
          <label>Phone Number: </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter phone number"
          />
        </div>

        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address"
          />
        </div>

        <h2> Guardian Details</h2>

        <div>
          <label>Father's Name: </label>
          <input
            type="text"
            value={fatherName}
            onChange={(e) => setFatherName(e.target.value)}
            placeholder="Enter father's name"
          />
        </div>

        <div>
          <label>Mother's Name: </label>
          <input
            type="text"
            value={motherName}
            onChange={(e) => setMotherName(e.target.value)}
            placeholder="Enter mother's name"
          />
        </div>

        <div>
          <label>Guardian's Name: </label>
          <input
            type="text"
            value={guardianName}
            onChange={(e) => setGuardianName(e.target.value)}
            placeholder="Enter guardian's name"
          />
        </div>

        <div>
          <label> Guardian CNIC: </label>
          <input
            type="text"
            value={guardianCnic}
            onChange={(e) => setGuardianCnic(e.target.value)}
            placeholder="XXXXX-XXXXXXX-X"
          />
        </div>

        <div>
          <label> Guardian Phone Number: </label>
          <input
            type="tel"
            value={guardianPhone}
            onChange={(e) => setGuardianPhone(e.target.value)}
            placeholder="Enter parent's phone number"
          />
        </div>

        <h2>Course & Submission</h2>

        <div>
          <label>Select Course: </label>
          <select value={course} onChange={(e) => setCourse(e.target.value)}>
            <option value=""> Choose a Program </option>
            <option value="bs-english">BS English</option>
            <option value="bs-psychology">BS Psychology</option>
            <option value="bs-computer-science">BS Computer Science</option>
            <option value="bs-applied-physics">BS Applied Physics</option>
            <option value="bs-software-engineering">
              BS Software Engineering
            </option>
          </select>
        </div>

        <div>
          <label>Student Picture: </label>
          <div>
            <input type="file" accept="image/*" />
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            id="terms"
            checked={terms}
            onChange={(e) => setTerms(e.target.checked)}
          />
          <label htmlFor="terms">
            I agree that all the information provided up is correct
          </label>
        </div>

        <button type="submit">Submit Application</button>
      </form>
    </>
  );
}
export default AdmissionForm;
