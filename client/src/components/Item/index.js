import { useContext } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

// Context
import SearchContext from "../../context/SearchContext";

// Helpers
import { formatCurrency } from "../../helpers/currency";

// Constants
import { CONDITION_ITEM } from "../../constants";

const Item = () => {
  const { searchResults } = useContext(SearchContext);

  return (
    <>
      <ul className="app-item-ul">
        {searchResults && searchResults.items.map((result) => (
          <li key={result.id} className="app-item-li">
            <img
              src={result.picture}
              alt={result.title}
              className="app-item-image"
            />

            <div className="app-item-info-container">
              <div className="app-item-price-container">
                <label>
                  {`${formatCurrency(result.price.amount, result.price.currency)}`}
                  <span>{result.price.decimals}</span>
                </label>

                {result.free_shipping &&
                  <img
                    src="/images/icon-free-shipping.png"
                    alt="icon-free-shipping"
                    className="app-item-icon-free-shipping"
                  />
                }

                <div className="app-item-seller-address">
                  <label>{result.seller_address}</label>
                </div>
              </div>

              <div className="app-item-text-container">
                <Link to={`/items/${result.id}`} className="app-item-text">
                  {`${result.title} Igual a ${CONDITION_ITEM[result.condition]}` || ""}
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Item;