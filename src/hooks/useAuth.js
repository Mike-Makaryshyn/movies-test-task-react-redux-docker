import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useCookies } from "react-cookie";
import { removeUser, setUser } from "../redux/slices/userSlice";
import { useDispatch } from "react-redux";
import useHttp from "../services/useHttp";

const useAuth = (directive = 'users') => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const api = useHttp({ withAuth: false });

  const [error, setError] = useState("");
  const [, setCookie, removeCookie] = useCookies([]);

  const submitHandler = async (inputValues) => {
    const { data } = await api.post(directive, inputValues);
    const token = data?.token;

    if (!token) {
      console.error("Missing token");
      setError(data.error.code);
      return false;
    }

    setCookie("accessToken", token);

    const { email, name } = inputValues;
    dispatch(setUser({ email, name }));

    navigate("/movies");
  };

  const logoutHadler = () => {
    removeCookie("accessToken");
    dispatch(removeUser());
    navigate("/");
  };

  return { submitHandler, error, logoutHadler };
};

export default useAuth;
