import axios from "axios";
import Cookies from "js-cookie";

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL ?? "API HERE";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL ?? "API HERE",
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    format: "json",
  },
});

instance.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    console.log(
      "token was : " + instance.defaults.headers.common["Authorization"]
    );

    console.log("got an error");
    console.log(error);

    const originalRequest = error.config;
    let refreshToken = localStorage.getItem("refreshToken");

    if (
      [403, 401].includes(error?.response?.status) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      const res = await refreshExpiredToken(refreshToken);
      if (res?.status === 200) {
        var in15minutes = new Date(new Date().getTime() + 900000);
        Cookies.set("accessToken", res.data.accessToken, {
          expires: in15minutes,
        });
        localStorage.setItem("refreshToken", res.data.refreshToken);

        axios.defaults.headers.common["Authorization"] =
          "bearer " + res.data.accessToken;

        return axios(originalRequest);
      }
    }
    throw error;
  }
);

export const setAuthToken = (token: string | null) => {
  if (token && token != "no token") {
    console.log(token);
    //applying token
    instance.defaults.headers.common["Authorization"] = `bearer ${token}`;
  } else {
    console.log("no token available");
    //deleting the token from header
    delete instance.defaults.headers.common["Authorization"];
  }
};

export const refreshExpiredToken = (refreshToken: string | null) => {
  return axios
    .post("/user/token/", {
      refreshToken,
    })
    .then((responses) => {
      return responses;
    })
    .catch((errors) => {
      return errors.response;
    });
};

export default instance;
