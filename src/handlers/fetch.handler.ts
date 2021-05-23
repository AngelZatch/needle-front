import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/auth';

const useFetch = (url: string, inputData?: any) => {
  const { logout } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url, {
        method: inputData ? 'POST' : 'GET',
        mode: 'cors',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json; charset=utf-8',
        },
      });

      if (!response.ok) {
        logout();
      }

      const data = await response.json();

      setResult(data);
      setLoading(false);
    };

    fetchData();
  }, [url, inputData, logout]);

  return { loading, result };
};

export default useFetch;
