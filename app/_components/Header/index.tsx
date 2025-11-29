import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";

export default function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoLink}>
        <Image
          src="/logo.svg"
          alt="SIMPLE"
          width={348}
          height={133}
          priority
          className={styles.logo}
        />
      </Link>
      <nav>
        <ul className={styles.items}>
            <li>
                <Link href="/members">メンバー</Link>
            </li>
        </ul>
      </nav>
    </header>
  );
}