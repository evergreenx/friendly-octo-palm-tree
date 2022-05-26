import "./App.css";
import Welcome from "./components/Welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import GA4React from "ga-4-react";

function App() {
  try {
    setTimeout((_) => {
      const ga4react = new GA4React("G-ZQ3LB5HZ6F");
      ga4react.initialize().catch((err) => console.error(err));
    }, 4000);
  } catch (err) {
    console.error(err);
  }
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/homepage" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
