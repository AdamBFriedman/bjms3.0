import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";

export const CustomRoutes: React.FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

function App() {
  return (
    <Router>
      <CustomRoutes />
    </Router>
  );
}

export default App;
