
import Image from 'next/image';
import styles from "./Header.module.css";



export default function Header(){
    return(
        <>
        <div className={styles.header}>
            <div className={styles.logo}>
                <Image className={styles.logoImage} src={'/images/logo.svg'} alt="logo" width={40} height={51}/>
            </div>
            <div className={styles.nav}>
        <section>
          <p className="active">Home</p>
        </section>
        <section>
          <p>Projects</p>
        </section>
        <section>
          <p>About</p>
        </section>
        <section>
          <p>Contacts</p>
        </section>
      </div>
        </div>
        </>
    )
}