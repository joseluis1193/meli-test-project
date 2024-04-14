import { createContext, useState, useEffect } from "react";

// Services
import { searchService } from "../services/search";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  const fetchData = async () => {
    if (search) {
      try {
        const data = await searchService(search);

        setSearchResults(data);
      } catch (error) {
        console.error("Error searching");
      }
    } else {
      setSearchResults(null);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <SearchContext.Provider value={{ setSearch, searchResults }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;