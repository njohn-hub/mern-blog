import TopBar from "./Components/Topbar/TopBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const user = false;

  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/settings" element={ user? <Settings /> : <Login/>} />
        <Route path="/post/:postId" element={<Single />} />
        <Route path="/write" element={user ? <Write /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;
