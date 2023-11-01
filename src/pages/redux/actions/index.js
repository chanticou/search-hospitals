"use strict";
import hospitales from "../../../utils/hospitals.json";
import { ALL_CITIES, ALL_HOSPITALES } from "../../../actions_types";
import axios from "axios";

export const GetAllCities = () => {
  return async function (dispatch) {
    try {
      const url =
        "https://apis.datos.gob.ar/georef/api/municipios?campos=id,nombre,%20provincia.nombre&max=5000";
      const response = await axios.get(url);

      const data = await response.data.municipios.filter(
        (el) => el.provincia.nombre === "Buenos Aires"
      );

      const newArr = data.map((el) => el.nombre).sort();

      dispatch({
        type: ALL_CITIES,
        payload: [...newArr],
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const GetAllHospitals = () => {
  return async function (dispatch) {
    const response = hospitales;
    // console.log(response);

    dispatch({
      type: ALL_HOSPITALES,
      payload: response.hospitales,
    });
  };
};
