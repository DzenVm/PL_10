import Link from "next/link";
import styles from "./Footer.module.css";

const ADDRESS = "ul. Mysia 3, 00-496 Warszawa, Polska";
const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(ADDRESS);

export default function Footer() {
  return (
    <footer className={styles.footer} id="kontakt">
      <div className={`container ${styles.grid}`}>
        <div>
          <p className={styles.small}>
            Butikowy hotel pięciogwiazdkowy w centrum Warszawy, z prywatnym
            salonem gier dla gości hotelowych.
          </p>
        </div>

        <div>
          <h4 className={styles.heading}>Adres</h4>
          <p className={styles.small}>{ADDRESS}</p>
          <a
            className={styles.link}
            href={MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Zobacz na mapie →
          </a>
        </div>

        <div>
          <h4 className={styles.heading}>Kontakt</h4>
          <p className={styles.small}>
            <a className={styles.link} href="tel:+48225832240">
              +48 22 583 22 40
            </a>
          </p>
          <p className={styles.small}>
            <a className={styles.link} href="mailto:recepcja@example-hotel.pl">
              recepcja@example-hotel.pl
            </a>
          </p>
        </div>

        <div>
          <h4 className={styles.heading}>Informacje</h4>
          <ul className={styles.list}>
            <li>
              <Link className={styles.link} href="/kasyno">
                Salon gier
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="/polityka-prywatnosci">
                Polityka prywatności i plików cookie
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p className={styles.small}>
          Wstęp do salonu gier wyłącznie dla osób pełnoletnich (18+). Gra
          może uzależniać.
        </p>
        <p className={styles.small}>
          © {new Date().getFullYear()} Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
}
