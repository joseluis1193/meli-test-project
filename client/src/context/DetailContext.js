import { createContext, useState, useEffect } from "react";

// Services
import { detailService } from "../services/detail";

const DetailContext = createContext();

export const DetailProvider = ({ children }) => {
  const [id, setId] = useState("");
  const [detailResult, setDetailResult] = useState(null);

  const fetchData = async () => {
    if (id) {
      try {
        const data = await detailService(id);

        setDetailResult(data);
      } catch (error) {
        console.error("Error getting detail data");
      }
    } else {
      setDetailResult(null);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <DetailContext.Provider value={{ detailResult, setId }}>
      {children}
    </DetailContext.Provider>
  );
};

export default DetailContext;