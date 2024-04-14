import { Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";
import Results from "./pages/Results"

// Context
import { SearchProvider } from "./context/SearchContext";

function App() {
  return (
    <SearchProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/items" element={<Results />} />

          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
    </SearchProvider>
  );
}

export default App;
