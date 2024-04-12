import { useContext, useState } from "react";
import './styles.scss'

import SearchContext from '../../context/SearchContext';

const Header = () => {
  const { setSearch } = useContext(SearchContext);

  const [value, setValue] = useState("");

  const handleSearch = async (event) => {
    event.preventDefault();

    setSearch(value);
  };
  return (
    <>
      <header className="app-header-container">
        <div className="app-header">
          <img src="./images/logo.png" alt="logo" className="app-header-logo" />

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
                <img src="./images/icon-search.png" alt="icon-search" className="app-header-search" />
              </button>
            </form>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header