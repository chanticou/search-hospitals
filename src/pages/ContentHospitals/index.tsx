import { useEffect, useState } from "react";
import styles from "@/styles/ContentHospitals.module.css";
import hospitales from "../../utils/hospitals.json";
import type { TypedUseSelectorHook } from "react-redux";
// LIBRERY REACT MODAL
import Modal from "react-modal";
import { GetAllCities } from "../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import type {
  RootState as StoreRootState,
  AppDispatch,
} from "../redux/store/index";
import "animate.css";

const ContentHospitals = (): JSX.Element => {
  //Global states
  const dispatch = useDispatch();
  const useAppSelector: TypedUseSelectorHook<StoreRootState> = useSelector;

  const cities = useAppSelector(
    (state: StoreRootState) => state.rootReducer.allCities
  );

  //Local states
  const [modalIsOpen1, setIsOpenModal1] = useState<boolean>(false);
  const [modalIsOpen2, setIsOpenModal2] = useState<boolean>(false);
  const [stylesModal, setstylesModal] = useState<any>({
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "500px",
      background: "#fff",
    },
  });

  useEffect(() => {
    dispatch<any>(GetAllCities());
  }, []);

  console.log(cities);

  //Functions
  function openModal(value: number) {
    if (value === 1) {
      setIsOpenModal1(true);
    }
    if (value === 2) {
      setIsOpenModal2(true);
    }
  }

  function closeModal(value: number) {
    if (value === 1) {
      setIsOpenModal1(false);
    }
    if (value === 2) {
      setIsOpenModal2(false);
    }
  }
  //REACT MODAL

  const [allData, setAlldata] = useState<any>(null);
  const [specialities, setspecialities] = useState<string[]>([]);
  const [selectValue, setSelectValue] = useState<string>("");
  const [selectSpeciality, setSelectSpeciality] = useState<string[]>([]);
  // const [allCities, setAllCities] = useState<string[]>([]);
  const [handleSelectCity, sethandleSelectCity] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  //GET ALL CITIES
  // const getAllCities = async () => {
  //   const url =
  //     "https://apis.datos.gob.ar/georef/api/municipios?campos=id,nombre,%20provincia.nombre&max=5000";
  //   const response = await axios.get(url);
  //   const data = await response.data.municipios.filter(
  //     (el: any) => el.provincia.nombre === "Buenos Aires"
  //   );
  //   const newArr = data.map((el: any) => el.nombre);
  //   setAllCities(newArr.sort());
  // };

  //GET JSON HOSPITALES
  const getAllAPi = async () => {
    try {
      setAlldata(hospitales);
    } catch (err) {
      setError(err);
      console.log(error);
    }
  };

  useEffect(() => {
    getAllAPi();
  }, []);

  const handleSelectOption = (e: any) => {
    setSelectValue(e.target.value);
  };

  useEffect(() => {
    if (selectValue === "Cardiología") {
      const filteredHospitales = allData.hospitales.filter(
        (el: any) =>
          el.especialidades.includes("Cardiología") &&
          el.localidad.includes(handleSelectCity)
      );
      setSelectSpeciality(filteredHospitales);
      setIsOpenModal1(false);
      setIsOpenModal2(false);
      console.log(filteredHospitales);
    }
    if (selectValue === "Neurología") {
      const filteredHospitales = allData.hospitales.filter(
        (el: any) =>
          el.especialidades.includes("Neurología") &&
          el.localidad.includes(handleSelectCity)
      );
      setSelectSpeciality(filteredHospitales);
    }
    if (selectValue === "Oncología") {
      const filteredHospitales = allData.hospitales.filter(
        (el: any) =>
          el.especialidades.includes("Oncología") &&
          el.localidad.includes(handleSelectCity)
      );
      setIsOpenModal1(false);
      setIsOpenModal2(false);
      setSelectSpeciality(filteredHospitales);
    }
    if (selectValue === "Emergentología") {
      const filteredHospitales = allData.hospitales.filter(
        (el: any) =>
          el.especialidades.includes("Emergentología") &&
          el.localidad.includes(handleSelectCity)
      );
      setSelectSpeciality(filteredHospitales);
    }
    if (selectValue === "Traumatología") {
      const filteredHospitales = allData.hospitales.filter(
        (el: any) =>
          el.especialidades.includes("Traumatología") &&
          el.localidad.includes(handleSelectCity)
      );
      setSelectSpeciality(filteredHospitales);
    }
    if (selectValue === "Cirugía General") {
      const filteredHospitales = allData.hospitales.filter(
        (el: any) =>
          el.especialidades.includes("Cirugía General") &&
          el.localidad.includes(handleSelectCity)
      );
      setSelectSpeciality(filteredHospitales);
    }
  }, [selectValue]);

  useEffect(() => {
    if (allData) {
      const uniqueSpecialities = allData.hospitales
        .flatMap((hospital: any) => hospital.especialidades)
        .filter((speciality: string, index: number, array: string[]) => {
          return array.indexOf(speciality) === index;
        });

      setspecialities(uniqueSpecialities);
    }
  }, [allData]);

  return (
    <>
      <h1 className={styles.title}>
        Buscá los Hospitales las especialidades que necesites
      </h1>
      {/* CITIES */}
      <div className={styles.contentButton}>
        <button className={styles.popupButton} onClick={() => openModal(1)}>
          PASO UNO
        </button>
      </div>
      {/* MODAL UNO */}

      <Modal
        isOpen={modalIsOpen1}
        onRequestClose={() => closeModal(1)}
        style={stylesModal}
      >
        <button onClick={() => closeModal(1)}>close</button>
        <div className={styles.selectContainer}>
          <p className={styles.firstStep}>PRIMER PASO</p>
          <p style={{ textAlign: "center", color: "#3b3b3b" }}>
            Seleccione la cíudad
          </p>
          <div className={styles.contentSelect}>
            <select
              className={styles.select}
              onChange={(e) => sethandleSelectCity(e.target.value)}
            >
              <option value="">Ciudad</option>
              {cities.map((el: any) => {
                return <option>{el}</option>;
              })}
            </select>
          </div>
        </div>
      </Modal>
      <div></div>
      {/* ESPECIALIDAD */}
      {/* <div className={styles.contentButton}>
        <button className={styles.popupButton} onClick={() => openModal(2)}>
          PASO DOS
        </button>
      </div> */}
      {/* MODAL DOS */}
      {/* <Modal
        isOpen={modalIsOpen2}
        onRequestClose={() => closeModal(2)}
        style={stylesModal}
      >
        <button onClick={() => closeModal(2)}>close</button>
        <div className={styles.selectContainer}>
          <p className={styles.firstStep}>SEGUNDO PASO</p>
          <p style={{ textAlign: "center", color: "#3b3b3b" }}>
            Seleccione la especialidad
          </p>
          <div className={styles.contentSelect}>
            <select
              className={styles.select}
              onChange={(e) => handleSelectOption(e)}
            >
              <option value="Especialidad">Especialidad</option>
              {specialities.map((el: any) => {
                return <option>{el}</option>;
              })}
            </select>
          </div>
        </div>
      </Modal>
      <div></div>
      {selectSpeciality.map((el: any) => {
        return (
          <div
            className={`${styles.contentCard} animate__animated animate__fadeIn`}
          >
            <p>{el.nombre}</p>
            <p>{el.direccion}</p>
          </div>
        );
      })} */}
    </>
  );
};

export default ContentHospitals;
