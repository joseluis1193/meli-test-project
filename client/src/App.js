import { Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";

// Context
import { SearchProvider } from './context/SearchContext';

function App() {
  return (
    <SearchProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Layout />} />
          {/* <Route path="about" element={<About />} />

            <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
    </SearchProvider>
  );
}

export default App;
