import Login from "./components/Login/Login";
import { Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/Dashboard/Dashboard";
import UserDashboard from "./pages/UserDashboard/UserDashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/dashboard/:id" element={<UserDashboard />} />
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
