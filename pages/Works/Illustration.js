import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../components/Header";
import styles from "../../styles/Illustration.module.css";
import Footer from "../../components/Footer";
import Image from 'next/image';

export default function Illustration() {
  return (
    <>
      <Head>
        <title>Illustration</title>
      </Head>

      <div className={styles.body}>
        {/* Navbar */}
        <Header />
        <div className={styles.container}>
          <h1>Graphic Designs / <span>Illustrations</span></h1>

          <div className={styles.overviewContainer}>
            <Image 
              src="/images/illustration/Illustration_Big.png" 
              width={1473} 
              height={1137} 
              alt="Illustration Big"
              className={styles.image}
            />

            {/* ✅ Wrapped Left & Right sections inside `infoContainer` */}
            <div className={styles.infoContainer}>
              <div className={styles.overview}>
                {/* Left Column */}
                <div className={styles.leftColumn}>
                  <div className={styles.infoRow}>
                    <p className={styles.label}>TIMELINE</p>
                    <p className={styles.value}>October 2023</p>
                  </div>
                  <div className={styles.infoRow}>
                    <p className={styles.label}>ROLE</p>
                    <p className={styles.value}>Graphic Designer</p>
                  </div>
                  <div className={styles.infoRow}>
                    <p className={styles.label}>TOOLS</p>
                    <p className={styles.value}>Adobe Illustrator</p>
                  </div>
                </div>

                {/* Right Column */}
                <div className={styles.rightColumn}>
                  <h3 className={styles.overviewTitle}>Overview</h3>
                  <p className={styles.overviewText}>
                    <strong>“My Dream World”</strong> is an exercise using <strong>Adobe Illustrator</strong> 
                    to bring my imaginative world to life through technical drawing.
                  </p>
                  <p className={styles.overviewText}>
                    Since I’ve always dreamed of opening a coffee shop, this became my inspiration 
                    to design a cute café featuring a giant cat and a blend of Japanese and Vietnamese culture.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ✅ Wrapped details images in a flex container */}
          <div className={styles.detailsContainer}>
            <Image 
              src="/images/illustration/1.png" 
              width={481} 
              height={481} 
              alt="Illustration Detail 1"
              className={styles.image}
            />
            <Image 
              src="/images/illustration/2.png" 
              width={481} 
              height={481} 
              alt="Illustration Detail 2"
              className={styles.image}
            />
            <Image 
              src="/images/illustration/3.png" 
              width={481} 
              height={481} 
              alt="Illustration Detail 3"
              className={styles.image}
            />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

