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

  const tagManagerArgs = {
    gtmId: "GTM-NWD6X2X",
    dataLayer: {
      event: "login",
      userId: userId,
    },
  };

  TagManager.initialize(tagManagerArgs);

  console.log(userId, 'testt')
  
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
