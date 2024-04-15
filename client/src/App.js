import { Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";
import Results from "./pages/Results";
import Detail from "./pages/Detail";

// Context
import { SearchProvider } from "./context/SearchContext";
import { DetailProvider } from "./context/DetailContext";

function App() {
  return (
    <SearchProvider>
      <DetailProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/items" element={<Results />} />
            <Route path="/items/:id" element={<Detail />} />

            {/* <Route path="*" element={<NoMatch />} /> */}
          </Route>
        </Routes>
      </DetailProvider>
    </SearchProvider>
  );
}

export default App;
