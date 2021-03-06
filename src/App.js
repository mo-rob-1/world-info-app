import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import Countries from "./components/Countries";
import CountryPage from "./pages/CountryPage";
import ScrollButton from "./components/ScrollButton";
import "./styles/Countries.css";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/:name" element={<CountryPage />} />
      </Routes>
      <ScrollButton />
    </Layout>
  );
}

export default App;
