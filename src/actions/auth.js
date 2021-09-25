import * as api from "../api/index";
import { AUTH } from "./constants";

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUpApi(formData);

    dispatch({ type: AUTH, payload: data });

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signInApi(formData);

    dispatch({ type: AUTH, payload: data });

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
