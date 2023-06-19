import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tokyo" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://www.facebook.com/anna.cibulskaya"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hanna Tsybulska
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/AnnaMangust/next-try-june"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/AnnaMangust/next-try-june"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}