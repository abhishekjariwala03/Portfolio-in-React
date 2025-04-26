import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import Web from "./Components/Web.jsx";
import Cursor from "./Components/Cursor/Cursor.jsx";
import { useEffect, useState } from "react";
import Loader from "./Components/Loader/Loader.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data from an API
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate a 2-second delay
  }, []);

  return (
    <>
      <Cursor />
      {loading ? (
        <Loader />
      ) : (
        <>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Web />} />
            </Routes>
          </Router>
        </>
      )}
    </>
  );
}

export default App;
