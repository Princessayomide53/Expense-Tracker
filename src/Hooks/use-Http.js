import { useState, useCallback } from "react";

const useHttps = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error("Request Failed");
      }

      const data = await response.json();
      applyData(data);
    } catch (error) {
      setError(err.message || "Something went wrong");
    }
    setIsLoading(false);
  }, []);
  return {
    isLoading: isLoading,
    error: error,
    sendRequest: sendRequest,
  };
};
export default useHttps;
