import axios from "axios";
import { useState, useEffect } from "react";

function Data() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get("/api/products");
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

  return [data, loading, error] 
}

export default Data;
