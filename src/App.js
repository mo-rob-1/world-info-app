import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import Countries from "./components/Countries";
import CountryPage from "./pages/CountryPage";
import "./styles/App.css";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/:name" element={<CountryPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
