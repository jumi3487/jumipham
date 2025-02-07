import { useRouter } from "next/router";
import projects from "../../data/projects";
import Head from "next/head";
import Header from "../../components/Header";
import styles from "../../styles/Works.module.css";
import Footer from "../../components/Footer";

export default function Beep() {

  return (
    <>
      <Head>
        <title>Beep</title>
      </Head>

      <div className={styles.body}>
        {/* Navbar */}
        <Header />

        <Footer />
      </div>
    </>
  );
}
