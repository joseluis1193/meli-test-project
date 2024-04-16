import "./styles.scss";

const Breadcrumb = ({ categories }) => {
  return (
    <div className="app-breadcrumb-container">
      {categories.length > 0 &&
        <ul>
          {categories.map((category, index) => (
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

export default Breadcrumb;