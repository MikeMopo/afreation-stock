import './App.css';
import Landing from "./components/pages/Landing";
import ViewImage from "./components/ViewImage";
import SearchResults from "./components/SearchResults";
import Login from "./components/auth/Login";
import CreateAccount from "./components/auth/CreateAccount";

// import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import Signup from "./components/auth/SignUp";
import Dashboard from "./components/pages/Dashboard";
// import Navigation from "./Api/Navigation";

function App() {
  return (
    <div className="App">
      {/*<Navigation />*/}
      <Router>
        <Routes>
        <Route path="/" element={<Navigate to="/Stock-Images" />} />
          <Route exact path="/Stock-Images" element={<Landing/>} />
          <Route path="/Stock-Images/view" element={<ViewImage/>} />
          <Route path="/Stock-Images/search" element={<SearchResults />} />
          <Route path="/Stock-Images/login" element={<Login />} />
          <Route path="/Stock-Images/signup" element={<Signup />} />
          <Route path="/Stock-Images/create-account" element={<CreateAccount />} />
          <Route path="/Stock-Images/home" element={<Dashboard />} />
        </Routes>
      </Router>

      {/* <Footer /> */}
    </div>
  );
}

export default App;