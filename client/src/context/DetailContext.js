import { createContext, useState, useEffect } from "react";

// Services
import { detailService } from "../services/detail";

const DetailContext = createContext();

export const DetailProvider = ({ children }) => {
  const [id, setId] = useState("");
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);

    if (id) {
      try {
        const data = await detailService(id);

        setItem(data.item);
      } catch (error) {
        console.error("Error getting detail data");
      }
      finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <DetailContext.Provider value={{ item, isLoading, setId }}>
      {children}
    </DetailContext.Provider>
  );
};

export default DetailContext;