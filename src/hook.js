import { useState, useEffect } from "react";

export default function useJsonFetch(url, opts) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(url, opts);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const list = await response.json();
        setData(list);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url, opts]);
  
  return [data, error, loading];
}