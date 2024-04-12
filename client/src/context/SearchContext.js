import { createContext, useState, useEffect } from 'react';

// Services
import { searchService } from '../services/search';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const fetchData = async () => {
    if (search) {
      try {
        const data = await searchService(search);
        console.log(data);
        setSearchResults(data);
      } catch (error) {
        console.error('Error searching');
      }
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <SearchContext.Provider value={{ search, setSearch, searchResults }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;