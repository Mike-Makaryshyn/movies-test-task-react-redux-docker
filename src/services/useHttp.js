import { useCookies } from 'react-cookie';
import axios from 'axios';

const useHttp = ({ withAuth = true } = {}) => {
  const [cookies] = useCookies(['accessToken']);

  if (withAuth && !cookies.accessToken) {
    return false;
  }

  return axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      ...(cookies.accessToken &&
        withAuth && {
          Authorization: cookies.accessToken,
        }),
    },
  });
};

export default useHttp;
