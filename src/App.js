import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Resources from "./pages/Resources";
import Profile from "./pages/Profile";
import ResumeBuilder from "./pages/ResumeBuilder";

function App() {
  const isLoggedIn = !!localStorage.getItem("token");
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/dashboard" /> : <Landing />}
        />
        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard /> : <Navigate to="/signin" />}
        />
        <Route
          path="/builder"
          element={isLoggedIn ? <ResumeBuilder /> : <Navigate to="/signin" />}
        />
        <Route
          path="/resources"
          element={isLoggedIn ? <Resources /> : <Navigate to="/signin" />}
        />
        <Route
          path="/profile"
          element={isLoggedIn ? <Profile /> : <Navigate to="/signin" />}
        />
        <Route
          path="/signin"
          element={!isLoggedIn ? <SignIn /> : <Navigate to="/dashboard" />}
        />
        <Route
          path="/signup"
          element={!isLoggedIn ? <SignUp /> : <Navigate to="/dashboard" />}
        />
      </Routes>
    </>
  );
}

export default App;
