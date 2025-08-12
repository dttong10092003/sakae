import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

import Layout from "./layouts/Layout";
import HomeLayout from "./layouts/HomeLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
      </Route>

      <Route path="/" element={<Layout />}>
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;