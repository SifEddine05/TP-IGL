

import CardDetails from "./pages/CardDetails";
import Home from "./pages/Home";
import Login from "./pages/Login"
import PropertiesFeed from "./pages/PropertiesFeed";
import SignUp from "./pages/SignUp"
import NewListing from "./pages/NewListing"
import Profile from "./pages/Profile"
import Editprofile from "./pages/Editprofile";
import NotFound from './pages/NotFound'
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/PropertiesFeed" element={<PropertiesFeed />} />
      <Route path="/NewListing" element={<NewListing />} />
      <Route path="/Card/:cardId" element={<CardDetails />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/EditProfile" element={<Editprofile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>

);

}

export default App;

