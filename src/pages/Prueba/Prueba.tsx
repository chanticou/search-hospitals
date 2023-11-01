import { useEffect, useState } from "react";

const Prueba = (): JSX.Element => {
  const url = "https://catfact.ninja/fact";
  // const urlImage = "https://cataas.com/cat/says/hello";

  const [randomSucces, setrandomSucces] = useState<string>("");
  const [randomImage, setrandomImage] = useState<string>("");

  const urlImage = `https://cataas.com//cat/says/${randomSucces}?size=:size&color=:color`;
  const fetchFunctionPhrase = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setrandomSucces(data.fact))
      .catch((err) => console.log(err));
  };

  // const fetchFunctionImage = () => {
  //   fetch(urlImage)
  //     .then((res) => res.url)
  //     .then((data) => setrandomImage(data));
  // };
  console.log(urlImage);
  useEffect(() => {
    fetchFunctionPhrase();
    // fetchFunctionImage();
  }, []);
  return (
    <>
      {/* {randomSucces.length ? (
        randomSucces.map((el: any) => (
          <div>
            <h1>{el.split(" ")[0]}</h1>
            <img src={randomImage} alt="Imagen gato"></img>
          </div>
        ))
      ) : (
        <h1>No llego la data</h1>
      )} */}
    </>
  );
};

export default Prueba;
