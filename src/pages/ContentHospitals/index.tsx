import { useEffect, useState } from "react";
import styles from "@/styles/ContentHospitals.module.css";
import type { TypedUseSelectorHook } from "react-redux";
import React, { ChangeEvent } from "react";

// LIBRERY REACT MODAL
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import type {
  RootState as StoreRootState,
  AppDispatch,
} from "../redux/store/index";
import { GetAllCities, GetAllHospitals } from "../redux/actions/index";
// import { GoogleMaps } from "../GoogleMaps/GoogleMaps";
import "animate.css";

const ContentHospitals = (): JSX.Element => {
  //Global states
  const dispatch = useDispatch();
  const useAppSelector: TypedUseSelectorHook<StoreRootState> = useSelector;

  //GET CITIES
  const cities = useAppSelector(
    (state: StoreRootState) => state.rootReducer.allCities
  );

  //GET HOSPITALS
  const allHospitals = useAppSelector(
    (state: StoreRootState) => state.rootReducer.allHospitals
  );

  //Local states
  //Open modals
  const [modalIsOpen1, setIsOpenModal1] = useState<boolean>(false);
  const [modalIsOpen2, setIsOpenModal2] = useState<boolean>(false);
  // const [citiesByAlphabeth, setcitiesByAlphabeth] = useState<any>(null);
  const [specialities, setspecialities] = useState<string[]>([]);
  const [selectValue, setSelectValue] = useState<string>("");
  const [selectSpeciality, setSelectSpeciality] = useState<string[]>([]);
  const [handleSelectCity, sethandleSelectCity] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [firstStep, setFirstStep] = useState<string>("Primer paso");
  const [secondStep, setSecondStep] = useState<string>("Segundo paso");

  // const [handleOpenMap, setsetHandleOpenMap] = useState<boolean>(false);
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
    dispatch<any>(GetAllHospitals());
    // setcitiesByAlphabeth(cities.sort());
  }, []);

  //EVENT CHANGE CITY
  const handleChangeCity = (e: ChangeEvent<HTMLSelectElement>) => {
    sethandleSelectCity(e.target.value);
    setFirstStep(e.target.value);
    setIsOpenModal1(false);
  };

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
  const handleSelectOption = (e: any) => {
    setSelectValue(e.target.value);
  };

  useEffect(() => {
    if (selectValue === "Cardiología") {
      const filteredHospitales = allHospitals.filter(
        (el: any) =>
          el.especialidades.includes("Cardiología") &&
          el.localidad.includes(handleSelectCity)
      );

      setSelectSpeciality(filteredHospitales);
      setIsOpenModal2(false);
      setSecondStep(selectValue);
    }
    if (selectValue === "Neurología") {
      const filteredHospitales = allHospitals.filter(
        (el: any) =>
          el.especialidades.includes("Neurología") &&
          el.localidad.includes(handleSelectCity)
      );
      setSelectSpeciality(filteredHospitales);
      setIsOpenModal2(false);
      setSecondStep(selectValue);
    }
    if (selectValue === "Oncología") {
      const filteredHospitales = allHospitals.filter(
        (el: any) =>
          el.especialidades.includes("Oncología") &&
          el.localidad.includes(handleSelectCity)
      );

      setIsOpenModal2(false);
      setSelectSpeciality(filteredHospitales);

      setSecondStep(selectValue);
    }
    if (selectValue === "Emergentología") {
      const filteredHospitales = allHospitals.filter(
        (el: any) =>
          el.especialidades.includes("Emergentología") &&
          el.localidad.includes(handleSelectCity)
      );
      setSelectSpeciality(filteredHospitales);
      setIsOpenModal2(false);
      setSecondStep(selectValue);
    }
    if (selectValue === "Traumatología") {
      const filteredHospitales = allHospitals.filter(
        (el: any) =>
          el.especialidades.includes("Traumatología") &&
          el.localidad.includes(handleSelectCity)
      );
      setSelectSpeciality(filteredHospitales);
      setIsOpenModal2(false);
      setSecondStep(selectValue);
    }
    if (selectValue === "Cirugía General") {
      const filteredHospitales = allHospitals.filter(
        (el: any) =>
          el.especialidades.includes("Cirugía General") &&
          el.localidad.includes(handleSelectCity)
      );
      setSelectSpeciality(filteredHospitales);
      setIsOpenModal2(false);
      setSecondStep(selectValue);
    }
    if (selectValue === "Atención Primaria de la Salud") {
      const filteredHospitales = allHospitals.filter(
        (el: any) =>
          el.especialidades.includes("Atención Primaria de la Salud") &&
          el.localidad.includes(handleSelectCity)
      );
      setSelectSpeciality(filteredHospitales);
      setIsOpenModal2(false);
      setSecondStep(selectValue);
    }
    if (selectValue === "Oftalmología") {
      const filteredHospitales = allHospitals.filter(
        (el: any) =>
          el.especialidades.includes("Oftalmología") &&
          el.localidad.includes(handleSelectCity)
      );
      setSelectSpeciality(filteredHospitales);
      setIsOpenModal2(false);
      setSecondStep(selectValue);
    }
  }, [selectValue]);

  useEffect(() => {
    if (allHospitals) {
      const uniqueSpecialities = allHospitals
        .flatMap((hospital: any) => hospital.especialidades)
        .filter((speciality: string, index: number, array: string[]) => {
          return array.indexOf(speciality) === index;
        });

      setspecialities(uniqueSpecialities);
    }
  }, [allHospitals]);

  return (
    <>
      <div className={styles.contentHospitalsContainer}>
        <h1 className={styles.title}>
          En solo
          <span
            style={{
              color: "#1C385C",
              textShadow: "2px, 2px, 2px rgb(0, 0, 0, 0.1)",
            }}
          >
            DOS
          </span>
          pasos busca la especialidad que necesitas
        </h1>
        {/* CITIES */}
        <div className={styles.contentButton}>
          <button className={styles.popupButton} onClick={() => openModal(1)}>
            {firstStep}
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
                onChange={(e) => handleChangeCity(e)}
              >
                <option value="">Ciudad</option>
                {cities.map((el: any) => {
                  return <option key={el}>{el}</option>;
                })}
              </select>
            </div>
          </div>
        </Modal>
        <div></div>
        {/* ESPECIALIDAD */}
        <div className={styles.contentButton}>
          <button className={styles.popupButton} onClick={() => openModal(2)}>
            {secondStep}
          </button>
        </div>
        {/* MODAL DOS */}
        <Modal
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

        {selectSpeciality.map((el: any) => {
          return (
            <div
              className={`${styles.contentCard} animate__animated animate__fadeIn`}
            >
              <p>{el.nombre}</p>
              <p>{el.direccion}</p>
              <p>{el.telefono}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ContentHospitals;
