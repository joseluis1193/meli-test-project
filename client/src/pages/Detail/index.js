import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "./styles.scss";

import Breadcrumb from "../../components/Breadcrumb";
import Card from "../../components/Card";

// Context
import DetailContext from "../../context/DetailContext";

const Detail = () => {
  const { id } = useParams();

  const { item, isLoading, setId } = useContext(DetailContext);

  useEffect(() => {
    setId(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!isLoading && item ?
        <div className="app-detail-container">
          <Breadcrumb categories={item.category} />
          <Card />
        </div>
        :
        null
      }
    </>
  );
}

export default Detail;