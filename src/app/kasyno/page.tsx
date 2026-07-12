import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Salon gier w hotelu",
  description:
    "Prywatny salon gier dla gości hotelowych w centrum Warszawy: ruletka, blackjack, poker oraz automaty do gry. Wstęp wyłącznie dla osób pełnoletnich.",
};

const TABLES = [
  {
    title: "Ruletka europejska",
    text: "Klasyczny stół z pojedynczym zerem, prowadzony przez krupierów w regularnych godzinach otwarcia salonu.",
  },
  {
    title: "Blackjack",
    text: "Stoły do gry w oczko z czytelnymi zasadami i limitami zakładów dostosowanymi do kameralnego charakteru salonu.",
  },
  {
    title: "Poker (cash game)",
    text: "Regularne stoły cash game w formacie Texas Hold'em, z rezerwacją miejsca za pośrednictwem concierge.",
  },
  {
    title: "Automaty do gry",
    text: "Wydzielona strefa z automatami do gry, dostępna w godzinach otwarcia salonu, w spokojnej i dyskretnej atmosferze.",
  },
];

const RULES = [
  "Wstęp wyłącznie dla osób, które ukończyły 18 lat — obowiązkowa weryfikacja dokumentu tożsamości.",
  "Wejście do salonu przysługuje gościom hotelowym oraz osobom zaproszonym, zgodnie z regulaminem obiektu.",
  "Salon gier prowadzony jest przez licencjonowanego operatora, zgodnie z ustawą o grach hazardowych obowiązującą w Polsce.",
  "Obowiązuje elegancki dress code oraz zachowanie zgodne z charakterem miejsca.",
  "Na terenie salonu dostępne są materiały informacyjne dotyczące odpowiedzialnej gry oraz kontakt do organizacji wspierających.",
  "Personel salonu ma prawo odmówić wstępu bez podania przyczyny, zgodnie z regulaminem wewnętrznym.",
];

export default function CasinoPage() {
  return (
    <>
      <div className={styles.ageRibbon}>
        <div className={`container ${styles.ageRibbonInner}`}>
          <span>18+</span>
          <span aria-hidden="true">·</span>
          <span>Wstęp wyłącznie dla osób pełnoletnich</span>
          <span aria-hidden="true">·</span>
          <span>Gra może uzależniać</span>
        </div>
      </div>

      <section className={styles.hero}>
        <Image
          src="/images/casino-room.svg"
          alt=""
          aria-hidden="true"
          fill
          priority
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <span className="eyebrow">Salon gier</span>
          <h1>
            Legalne polskie kasyno w kameralnym salonie gier naszego hotelu
          </h1>
          <p>
            Oddzielne, dyskretne skrzydło na parterze hotelu mieści niewielki
            salon gier — miejsce spotkań przy stołach do ruletki, blackjacka
            i pokera, w stonowanej, eleganckiej atmosferze. Wstęp możliwy
            wyłącznie dla osób pełnoletnich.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="o-salonie">
        <div className={`container ${styles.introGrid}`}>
          <div>
            <span className="eyebrow">O przestrzeni</span>
            <h2 id="o-salonie">Miejsce zaprojektowane z rozmysłem</h2>
            <div className="divider" />
            <p>
              Salon gier zajmuje wydzieloną część parteru hotelu, oddzieloną
              od głównego lobby i restauracji, co zapewnia gościom pełną
              dyskrecję. Ciemne, głębokie barwy wnętrza, punktowe
              oświetlenie i stonowana muzyka tworzą atmosferę dalekiej od
              hałaśliwych, komercyjnych kasyn — bliższą prywatnemu klubowi
              niż typowej sali gier.
            </p>
            <p style={{ marginTop: "18px" }}>
              Przestrzeń mieści kilka stołów do gry oraz niewielką strefę
              automatów, obsługiwaną przez doświadczonych krupierów.
              Liczba miejsc jest celowo ograniczona, aby zachować kameralny,
              spokojny charakter salonu.
            </p>
          </div>
          <div className={styles.noticeBox}>
            <h3>Odpowiedzialna gra</h3>
            <p>
              Gra hazardowa wiąże się z ryzykiem i może prowadzić do
              uzależnienia. Zachęcamy do grania z umiarem i wyznaczania sobie
              limitów czasowych oraz finansowych przed rozpoczęciem gry.
            </p>
            <p>
              Osoby, które chciałyby porozmawiać o problemie z hazardem,
              mogą skorzystać z bezpłatnej, ogólnopolskiej infolinii
              wsparcia w zakresie uzależnień behawioralnych.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="stoly">
        <div className="container">
          <div style={{ maxWidth: "640px", marginBottom: "56px" }}>
            <span className="eyebrow">Oferta gier</span>
            <h2 id="stoly">Stoły i automaty dostępne w salonie</h2>
            <div className="divider" />
          </div>
          <div className={styles.tableGrid}>
            {TABLES.map((table) => (
              <div key={table.title} className="card">
                <h3>{table.title}</h3>
                <p style={{ marginTop: "10px" }}>{table.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="zasady">
        <div className={`container ${styles.infoGrid}`}>
          <div>
            <span className="eyebrow">Zasady wstępu</span>
            <h2 id="zasady">Warunki korzystania z salonu</h2>
            <div className="divider" />
            <ul className={styles.rulesList}>
              {RULES.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
          </div>
          <div>
            <span className="eyebrow">Godziny otwarcia</span>
            <h2>Kiedy odwiedzić salon</h2>
            <div className="divider" />
            <table className={styles.hoursTable}>
              <thead>
                <tr>
                  <th>Dni</th>
                  <th>Godziny</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Niedziela – czwartek</td>
                  <td>18:00 – 02:00</td>
                </tr>
                <tr>
                  <td>Piątek – sobota</td>
                  <td>18:00 – 04:00</td>
                </tr>
              </tbody>
            </table>
            <p style={{ marginTop: "24px" }}>
              Rezerwacja stolika oraz zapytania dotyczące wstępu prosimy
              kierować do concierge hotelowego, dostępnego całą dobę.
            </p>
            <Link href="/#kontakt" className="btn" style={{ marginTop: "20px" }}>
              Skontaktuj się z concierge
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
