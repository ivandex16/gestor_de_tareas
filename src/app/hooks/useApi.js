"use client";
import React from "react";
import axios from "axios";

export function useApi(url, metodo, requesData) {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      let response;
      setLoading(true);
      try {
        switch (metodo) {
          case "GET":
            response = await axios.get(url);
            console.log("response", response);
            break;
          case "POST":
            response = await axios.post(url, requestData);
            break;
          case "DELETE":
            // Implement logic for DELETE request
            break;
          case "PATCH":
            // Implement logic for PATCH request
            break;
          default:
            throw new Error("Invalid HTTP method");
        }

        if (response.status === 200) {
          setData(response.data);
          setLoading(false);
        }
      } catch (error) {
        setError(error);
        console.error("Error consultando la data:", error);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}
