import React from "react";
import "./App.css";
function AdmissionForm() {
  return (
    <>
      <h3>Student Admission Form</h3>

      <form>
        <h2>Student Details</h2>

        <div>
          <label>First Name: </label>
          <input type="text" placeholder="Enter first name" />
        </div>

        <div>
          <label>Last Name: </label>
          <input type="text" placeholder="Enter last name" />
        </div>

        <div>
          <label>Date of Birth: </label>
          <input type="date" />
        </div>

        <div>
          <label>CNIC Number: </label>
          <input type="text" placeholder="XXXXX-XXXXXXX-X" />
        </div>

        <div>
          <label>Nationality: </label>
          <input type="text" placeholder="Enter nationality" />
        </div>

        <div className="gender-container">
          <label>Gender: </label>
          <input type="radio" name="gender" value="male" /> Male
          <input type="radio" name="gender" value="female" /> Female
        </div>

        <h2>Contact Information</h2>

        <div>
          <label>Home Address: </label>
          <input type="text" placeholder="Enter complete home address" />
        </div>

        <div>
          <label>City: </label>
          <input type="text" placeholder="Enter city name" />
        </div>

        <div>
          <label>Phone Number: </label>
          <input type="tel" placeholder="Enter phone number" />
        </div>

        <div>
          <label>Email: </label>
          <input type="email" placeholder="Enter email address" />
        </div>

        <h2> Guardian Details</h2>

        <div>
          <label>Father's Name: </label>
          <input type="text" placeholder="Enter father's name" />
        </div>

        <div>
          <label>Mother's Name: </label>
          <input type="text" placeholder="Enter mother's name" />
        </div>

        <div>
          <label>Guardian's Name: </label>
          <input type="text" placeholder="Enter guardian's name" />
        </div>

        <div>
          <label> Guardian CNIC: </label>
          <input type="text" placeholder="XXXXX-XXXXXXX-X" />
        </div>

        <div>
          <label> Guardian Phone Number: </label>
          <input type="tel" placeholder="Enter parent's phone number" />
        </div>

        <h2>Course & Submission</h2>

        <div>
          <label>Select Course: </label>
          <select>
            <option value=""> Choose a Program </option>
            <option value="bs-english">BS English</option>
            <option value="bs-psychology">BS Psychology</option>
            <option value="bs-computer-science">BS Computer Science</option>
            <option value="bs-applied-physics">BS Applied Physics</option>
            <option value="bs-software-engineering">BS Software Engineering</option>
          </select>
        </div>

        <div>
          <label>Student Picture: </label>
          <div>
            <input type="file" accept="image/*" />
          </div>
        </div>

        <div>
          <input type="checkbox" id="terms" />
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
