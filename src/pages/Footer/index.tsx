import { AiFillGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import Link from "next/link";
import styles from "@/styles/Footer.module.css";

const Footer = (): JSX.Element => {
  return (
    <>
      <div className={styles.contentFooter}>
        <div className={styles.firstDiv}>
          <p>Politica de privacidad</p>
          <p>Contactos</p>
        </div>
        <div className={styles.secondtDiv}>
          <Link href="https://github.com/chanticou">
            <div className={styles.contentImage}>
              <AiFillGithub className={styles.link} />
            </div>
          </Link>
          <Link href="https://www.linkedin.com/in/chantal-denise-coutenceau/">
            <div className={styles.contentImage}>
              <AiOutlineLinkedin className={styles.link} />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
