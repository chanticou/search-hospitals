import styles from "@/styles/NavBar.module.css";
import Link from "next/link";

const NavBar = (): JSX.Element => {
  return (
    <>
      <div>
        <p className={styles.titlenavBar}>SALUD PARA TODOS</p>
      </div>
      <div className={styles.contentLinks}>
        {/* <Link className={styles.links} href="/ContentHospitals"> */}
        <div className={styles.ProductsContainer}>LINK1</div>
        {/* </Link> */}
        <a className={styles.ProductsContainer} href="">
          LINK 2
        </a>
        <a className={styles.ProductsContainer} href="">
          LINK 3
        </a>
        <a className={styles.linkToGoogle} href="">
          LINK 3
        </a>
      </div>
    </>
  );
};

export default NavBar;
