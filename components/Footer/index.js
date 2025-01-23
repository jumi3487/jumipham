import Image from 'next/image';
import styles from "./Footer.module.css";

export default function Footer() {
    return (
      <>
        <div className={styles.footer}>
          <div className={styles.contact}>
            <h1 className={styles.heading}>LET’S GET IN TOUCH</h1>
            <p>Contact me</p>
            <h2 className={styles.email}>jumi3487@gmail.com</h2>
          </div>
          <div className={styles.copyrightLinks}>
            <p>2025 © made by jumipham.com</p>
            <div>
              <p>
                <a className={styles.link} href="#">linkedin</a>
              </p>
              <p>
                <a className={styles.link} href="#">instagram</a>
              </p>
              <p>
                <a className={styles.link} href="#">behance</a>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
  