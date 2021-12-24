import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import { ThemeProvider } from "@material-ui/core/styles";
import bjmsTheme from "./theme";
import CssBaseline from "@material-ui/core/CssBaseline";

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
      <ThemeProvider theme={bjmsTheme}>
        <CssBaseline />
        <CustomRoutes />
      </ThemeProvider>
    </Router>
  );
}

export default App;
