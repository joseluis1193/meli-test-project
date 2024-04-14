import { useContext } from "react";
import "./styles.scss";

// Context
import SearchContext from "../../context/SearchContext";

const Breadcrumb = () => {
  const { searchResults } = useContext(SearchContext);

  return (
    <div className="app-breadcrumb-container">
      {searchResults?.categories.length > 0 &&
        <ul>
          {searchResults.categories.map((category, index) => (
            <li key={index}>
              {category}
            </li>
          ))
          }
        </ul>
      }
    </div>
  );
}

export default Breadcrumb