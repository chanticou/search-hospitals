// import axios from "axios";
// import {GoogleMap,withScriptjs } from "react-google-maps";

// export const GoogleMaps = (props: any) => {
//   console.log(props);

//   const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=-34.47751903609343,-58.510150760238005&key=AIzaSyDmn8Bikqwi1s4Yzh3j0JPuJ5hjlRYOA40`;
//   axios
//     .get(url)
//     .then((response) => {
//       if (response.data.results.length > 0) {
//         console.log(response.data.results[0].formatted_address);
//       } else {
//         console.log("Dirección desconocida");
//       }
//     })
//     .catch((error) => {
//       console.error(error);
//     });

//   return <>MAPA</>;
// };
