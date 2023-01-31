

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
import { AuthProvider } from "./context/auth";
import { RequireAuth } from "./components/RequireAuth";
function App() {
  return (
    <AuthProvider>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/PropertiesFeed" element={<RequireAuth><PropertiesFeed /></RequireAuth>} />
      <Route path="/NewListing" element={<RequireAuth><NewListing /></RequireAuth>} />
      <Route path="/Card/:cardId" element={<RequireAuth><CardDetails /></RequireAuth>} />
      <Route path="/Profile" element={<RequireAuth><Profile /></RequireAuth>} />
      <Route path="/EditProfile" element={<RequireAuth><Editprofile /></RequireAuth>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </AuthProvider>

);

}

export default App;

