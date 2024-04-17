import { useContext } from "react"
import "./styles.scss";

// Context
import DetailContext from "../../context/DetailContext";

// Helpers
import { formatCurrency } from "../../helpers/currency";

// Constants
import { CONDITION_ITEM } from "../../constants";

const Card = () => {
  const { item } = useContext(DetailContext);

  return (
    <div className="app-card-container">
      <div className="app-card-item-container">
        <img src={item.picture} alt={item.title} />

        <div className="app-card-item-section-data">
          <label className="app-card-item-condition">
            {CONDITION_ITEM[item.condition]}
            {item.sold_quantity &&
              <span>{` - ${item.sold_quantity} vendidos`}</span>
            }
          </label>

          <p className="app-card-item-title">
            {item.title}
          </p>

          <div className="app-card-item-price-container">
            <label>
              {`${formatCurrency(item.price.amount, item.price.currency)}`}
              <span>{item.price.decimals}</span>
            </label>
          </div>

          <button>{"Comprar"}</button>
        </div>
      </div>

      <div className="app-card-item-description-container">
        <p className="app-card-item-description-title">{"Descripción del producto"}</p>
        <p className="app-card-item-description">{item.description}</p>
      </div>
    </div>
  );
}

export default Card;