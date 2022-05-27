import "./App.css";

import Welcome from "./components/Welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import GA4React from "ga-4-react";
import { auth } from "./firebase";
import { useEffect, useState } from "react";
import TagManager from "react-gtm-module";

function App() {
  const [userId, setUserId] = useState(null);

  const tagManagerArgs = {
    gtmId: "GTM-NWD6X2X",
    dataLayer: {
      event: "login",
      userId: userId,
    },
  };

  TagManager.initialize(tagManagerArgs);
  try {
    setTimeout((_) => {
      const ga4react = new GA4React("G-ZQ3LB5HZ6F");
      ga4react.initialize().catch((err) => console.error(err));
    }, 4000);
  } catch (err) {
    console.error(err);
  }

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(auth?.currentUser);

      console.log(auth?.currentUser);

      if (user) {
        setUserId(user.uid);
      }
    });

    console.log(auth.currentUser);
  }, []);
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
