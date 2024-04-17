import { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./styles.scss"

// Context
import SearchContext from "../../context/SearchContext";

const Header = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { setSearch } = useContext(SearchContext);

  const query = searchParams.get("search");

  const [value, setValue] = useState("");


  const handleSearch = async (event) => {
    event.preventDefault();

    if (value) {
      setSearch(value);

      navigate({
        pathname: "/items",
        search: `?search=${value}`
      });
    }
  };

  useEffect(() => {
    setValue(query || "");
    setSearch(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <>
      <header className="app-header-container">
        <div className="app-header">
          <img src="/images/logo.png" alt="logo" className="app-header-logo" />

          <div className="app-header-form">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                placeholder="Nunca dejes de buscar"
                autoComplete="off"
                autoCorrect="off"
                spellCheck="false" />

              <button type="submit" className="">
                <img src="/images/icon-search.png" alt="icon-search" className="app-header-search" />
              </button>
            </form>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;