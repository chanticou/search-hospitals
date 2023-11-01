import styles from "@/styles/NavBar.module.css";
import Link from "next/link";

const NavBar = (): JSX.Element => {
  return (
    <>
      <div>
        <p className={styles.titlenavBar}>SALUD PARA TODOS</p>
      </div>
      <div className={styles.contentLinks}>
        <Link className={styles.links} href="/MainPage">
          <p className={styles.navBarLink}>Home</p>
        </Link>
        {/* <Link className={styles.links} href="/ContentHospitals"> */}
        <div className={styles.navBarLink}>Nosotros</div>
        {/* </Link> */}
        <a className={styles.navBarLink} href="">
          Salud
        </a>
        <a className={styles.navBarLink} href="">
          Contacto
        </a>
      </div>
    </>
  );
};

export default NavBar;
