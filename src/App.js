import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Resources from "./pages/Resources";
import Profile from "./pages/Profile";
import ResumeBuilder from "./pages/ResumeBuilder";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/builder" element={<ResumeBuilder />} />
      </Routes>
    </div>
  );
}

export default App;
