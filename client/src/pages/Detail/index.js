import { useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
import "./styles.scss";

import Breadcrumb from "../../components/Breadcrumb";
import Card from "../../components/Card";

// Context
import DetailContext from "../../context/DetailContext";

const Detail = () => {
  const { id } = useParams();

  const { detailResult, setId } = useContext(DetailContext);

  useEffect(() => {
    setId(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Breadcrumb />
      {detailResult &&
        <div className="app-detail-container">
          <Card />
        </div>
      }
    </>
  );
}

export default Detail;