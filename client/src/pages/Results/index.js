import { useContext } from "react";
import "./styles.scss";

import Breadcrumb from "../../components/Breadcrumb";
import Item from "../../components/Item";

// Context
import SearchContext from "../../context/SearchContext";

const Results = () => {
  const { searchResults } = useContext(SearchContext);

  return (
    <>
      {searchResults &&
        <div className="app-results-container">
          <Breadcrumb categories={searchResults.categories} />
          <Item />
        </div>
      }
    </>
  );
}

export default Results;