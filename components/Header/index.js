import Image from 'next/image';
import Link from 'next/link'; // ✅ Import Next.js Link component
import styles from "./Header.module.css";

export default function Header() {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.logo}>
                  <Link href="/" passHref>
                    <Image className={styles.logoImage} src={'/images/logo.svg'} alt="logo" width={40} height={51} />
                    </Link>
                </div>
                <div className={styles.nav}>
                    <section>
                        <Link href="/" passHref>
                            <p className="active">Home</p>
                        </Link>
                    </section>
                    <section>
                        <Link href="/Works" passHref>
                            <p>Works</p> {/* ✅ Clickable Link to Works Page */}
                        </Link>
                    </section>
                    <section>
                        <Link href="/about" passHref>
                            <p>About</p>
                        </Link>
                    </section>
                    <section>
                        <Link href="/contacts" passHref>
                            <p>Contacts</p>
                        </Link>
                    </section>
                </div>
            </div>
        </>
    );
}
