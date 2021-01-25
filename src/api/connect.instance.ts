import instance from "./axios";

export const login = async (data: any) => {
  try {
    const answ = await instance.post("user/login", data);
    return answ;
  } catch (err) {
    throw err;
  }
};

export const signup = async (data: any) => {
  try {
    const answ = await instance.post("user/signup", data);
    return answ;
  } catch (err) {
    throw err;
  }
};
