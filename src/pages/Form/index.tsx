import { FormEvent, useEffect, useState } from "react";
import styles from "@/styles/Form.module.css";
import NavBar from "../NavBar/index";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/router";

interface returnHospitals {
  nombre: string;
  telefono: string;
  localidad: string;
}

const Form = (): JSX.Element => {
  const router = useRouter();
  const [sendSpecialities, setSendSpecialities] = useState<returnHospitals[]>(
    []
  );
  const { selectSpeciality } = router.query;

  useEffect(() => {
    if (selectSpeciality) {
      setSendSpecialities(JSON.parse(selectSpeciality as string));
    }
  }, [selectSpeciality]);

  const returnAllHospitals = sendSpecialities.map((el) => {
    return {
      nombre: el.nombre,
      telefono: el.telefono,
      localidad: el.localidad,
    };
  });

  const templateParams = {
    name: "Salud para todos",
    to_email: "chanticou@gmail.com",
    notes: "Información solicitada:",
    subject: "",
  };

  returnAllHospitals.forEach((hospital) => {
    templateParams.subject += `Nombre: ${hospital.nombre} \n Teléfono: ${hospital.telefono} \n Localidad: ${hospital.localidad} \n`;
  });

  const [input, setInput] = useState<string>();
  const [error, setError] = useState<any>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input) {
      setError(false);
    } else {
      setInput("");
      setError(false);
      Swal.fire("¡Muchas gracias! El email fue enviado con exito.");
      emailjs
        .send(
          "service_3bom90g",
          "template_35p48qp",
          templateParams,
          "LdNY-iThbpDaasQfy"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  return (
    <>
      <NavBar />
      <div className={styles.contentForm}>
        <h3 className={styles.formTitle}>
          Por favor ingresa tu email y te mandamos la informacion
        </h3>
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
          <input
            className={styles.formInput}
            onChange={(e) => setInput(e.target.value)}
            type="email"
            placeholder="Email..."
            name="email"
            value={input}
          ></input>
          <input className={styles.button} type="submit" value="ENVIAR"></input>
        </form>
      </div>
    </>
  );
};

export default Form;
