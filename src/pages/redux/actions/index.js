"use strict";
import { ALL_CITIES } from "../../../actions_types";
import axios from "axios";

export const GetAllCities = () => {
  return async function (dispatch) {
    try {
      const url =
        "https://apis.datos.gob.ar/georef/api/municipios?campos=id,nombre,%20provincia.nombre&max=5000";
      const response = await axios.get(url);
      // console.log(response, "RESPONSE");
      const data = await response.data.municipios.filter(
        (el) => el.provincia.nombre === "Buenos Aires"
      );
      // console.log(data, "DATA");
      const newArr = data.map((el) => el.nombre);
      // console.log(newArr, "newArr");
      dispatch({
        type: ALL_CITIES,
        payload: [...newArr],
      });
    } catch (error) {
      console.log(error);
    }
  };
};
