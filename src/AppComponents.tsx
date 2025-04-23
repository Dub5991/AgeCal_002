import { useState } from 'react';
import './AppComponents.css'; // Correct file name

function calculateAge(birthYear: number, currentYear: number): number {
  return currentYear - birthYear;
}

export function AppComponent() {
  const [fullName, setFullName] = useState<string>('');
  const [inputYear, setInputYear] = useState<number | null>(null);
  const currentYear: number = new Date().getFullYear();
  const age: number | null = inputYear !== null ? calculateAge(inputYear, currentYear) : null;

  return (
    <div className="app-container">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Age Calculator</h4>
          
          <input
            type="text"
            className="form-control"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          
          <input
            type="number"
            className="form-control"
            placeholder="Enter your birth year or current age"
            onChange={(e) => {
              const year = parseInt(e.target.value, 10);
              if (!isNaN(year)) {
                setInputYear(year);
              }
            }}
          />
          <div className="result">
            {fullName && (
              <p>
                <strong>Full Name:</strong> {fullName}
              </p>
            )}
            {age !== null && (
              <p>
                <strong>Age:</strong> {age}
              </p>
            )}
            <p>
              <strong>Current Year:</strong> {currentYear}
            </p>
          </div>
        </div>
      </div>
      <footer className="footer">
        © {new Date().getFullYear()} Enterprise Age Calculator. All rights reserved.
      </footer>
    </div>
  );
}