import Link from "next/link";
import styles from "./Header.module.css";

const NAV = [
  { href: "/", label: "Główna" },
  { href: "/#apartamenty", label: "Apartamenty" },
  { href: "/#restauracja", label: "Restauracja i spa" },
  { href: "/kasyno", label: "Salon gier" },
  { href: "/#kontakt", label: "Kontakt" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.mark} aria-label="Strona główna" />


        <nav className={styles.nav} aria-label="Nawigacja główna">
          <ul className={styles.navList}>
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="/#kontakt" className={`btn ${styles.cta}`}>
          Rezerwacja
        </Link>
      </div>
    </header>
  );
}
