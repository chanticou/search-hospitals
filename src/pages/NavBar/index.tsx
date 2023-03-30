import styles from "@/styles/NavBar.module.css";
import Link from "next/link";

const NavBar = (): JSX.Element => {
  return (
    <>
      <div>
        <p className={styles.holamundo}>APLICATION TITLE</p>
      </div>
      <div className={styles.contentLinks}>
        <Link className={styles.links} href="/ContentHospitals">
          <div className={styles.ProductsContainer}>Pokemons</div>
        </Link>
        <a className={styles.ProductsContainer} href="">
          LINK 1
        </a>
        <a className={styles.ProductsContainer} href="">
          LINK 1
        </a>
        <a className={styles.linkToGoogle} href="">
          LINK 1
        </a>
      </div>
    </>
  );
};

export default NavBar;
