import "./App.css";

import { createTheme, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";

import HomePage from "./pages/HomePage";
import FilterProductsPage from "./pages/FilterProductsPage";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#ede7f6",
    },
    info: {
      main: "#b55eda",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div style={{}}>
          <Header />
        </div>
        <div style={{ marginTop: "64px" }}>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/filter-products" element={<FilterProductsPage />} />
          </Routes>
        </div>
        <div style={{ marginTop: "auto" }}>
          <Features />
        </div>
        <div style={{ marginTop: "auto" }}>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
