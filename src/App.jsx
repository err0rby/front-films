import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import Films from "./components/Films/Films";
import Fullfilm from "./components/Fullfilm/Fullfilm";
import MainPage from "./components/MainPage/MainPage";

function App() {
  const token = useSelector(state => state.applicationSlice.token);

  if (token) {
    return (
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/films" element={<Films />} />
        <Route path="/films/:id" element={<Fullfilm />} />
        <Route path="/signin" element={<Navigate to='/'/>} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    )
  }
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/films" element={<Films />} />
      <Route path="/films/:id" element={<Fullfilm />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;