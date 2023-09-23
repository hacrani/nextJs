import styles from '@/style/page.module.css';
import Link from 'next/link';

export default function Login() {
    return (
        <div className={styles.main}>
            <p style={{ color: 'black', backgroundColor: 'pink' }}>Login Page</p>
            <p>hdfalfnd jfklda </p>
            <Link href='/about/me' >About page</Link>

            <p className={styles.myClass}>This is a red text</p>
            <p id={styles.myId}>hfdladks fdfl</p>
        </div>
    );
}