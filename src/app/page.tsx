import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const ADDRESS = "ul. Mysia 3, 00-496 Warszawa, Polska";
const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(ADDRESS);

const AMENITIES = [
  "37 apartamentów i pokoi typu Suite",
  "Prywatny salon gier dla gości hotelowych",
  "Spa z basenem, sauną i strefą relaksu",
  "Restauracja z kuchnią autorską i barem",
  "Concierge dostępny całą dobę",
  "Sala bankietowa i przestrzenie na wydarzenia",
  "Parking podziemny z obsługą typu valet",
  "Bezpłatne, szyfrowane Wi-Fi w całym obiekcie",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: "Butikowy hotel pięciogwiazdkowy w centrum Warszawy",
  description:
    "Butikowy hotel pięciogwiazdkowy w centrum Warszawy z prywatnym salonem gier, spa i restauracją.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Mysia 3",
    postalCode: "00-496",
    addressLocality: "Warszawa",
    addressCountry: "PL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.2339,
    longitude: 21.0127,
  },
  starRating: {
    "@type": "Rating",
    ratingValue: "5",
  },
  telephone: "+48221234567",
  priceRange: "€€€€",
  amenityFeature: AMENITIES.map((name) => ({
    "@type": "LocationFeatureSpecification",
    name,
  })),
};

const jsonLdScript = JSON.stringify(jsonLd)
  .replace(/</g, "\\u003c")
  .replace(/>/g, "\\u003e")
  .replace(/&/g, "\\u0026");

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript }}
      />

      <section className={styles.hero}>
        <Image
          src="/images/hero-lobby.svg"
          alt=""
          aria-hidden="true"
          fill
          priority
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <span className="eyebrow">Warszawa · Hotel butikowy 5*</span>
          <h1>Cisza, dyskrecja i wyjątkowa gościnność w sercu miasta</h1>
          <p className={styles.heroLead}>
            Kameralny hotel z autorską restauracją, spa i prywatnym salonem
            gier — miejsce stworzone dla gości, którzy cenią spokój równie
            mocno, co detal.
          </p>
          <div className={styles.heroActions}>
            <Link href="/#kontakt" className="btn btn--primary">
              Zarezerwuj pobyt
            </Link>
            <Link href="/kasyno" className="btn">
              Salon gier
            </Link>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="o-hotelu">
        <div className={`container ${styles.introGrid}`}>
          <div>
            <span className="eyebrow">O hotelu</span>
            <h2 id="o-hotelu">Butikowy adres w samym centrum Warszawy</h2>
            <div className="divider" />
          </div>
          <div>
            <p>
              Hotel powstał z myślą o gościach szukających czegoś więcej niż
              tylko noclegu — o miejscu, w którym każdy detal, od tkanin po
              oświetlenie, został dobrany z uwagą. 37 apartamentów i pokoi
              typu Suite łączy stonowaną, elegancką estetykę z pełnym
              komfortem technicznym: klimatyzacją, szyfrowanym Wi-Fi i
              indywidualną obsługą concierge dostępną przez całą dobę.
            </p>
            <p style={{ marginTop: "18px" }}>
              Lokalizacja w ścisłym centrum miasta pozwala w kilka minut
              dotrzeć pieszo do reprezentacyjnych ulic, teatrów i restauracji,
              a jednocześnie hotel pozostaje odizolowaną, cichą przystanią z
              dala od miejskiego zgiełku.
            </p>

            <div className={styles.statRow}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>37</span>
                <span className={styles.statLabel}>Apartamentów</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>24/7</span>
                <span className={styles.statLabel}>Concierge</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>1</span>
                <span className={styles.statLabel}>Salon gier</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section section--alt"
        id="apartamenty"
        aria-labelledby="udogodnienia"
      >
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="eyebrow">Udogodnienia</span>
            <h2 id="udogodnienia">
              Wszystko, czego potrzeba do w pełni komfortowego pobytu
            </h2>
            <div className="divider" />
          </div>
          <ul className={styles.amenityList}>
            {AMENITIES.map((item) => (
              <li key={item} className={styles.amenityItem}>
                <span className={styles.amenityMark} aria-hidden="true">
                  —
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="section"
        id="restauracja"
        aria-labelledby="spa-heading"
      >
        <div className={`container ${styles.mediaSplit}`}>
          <div className={styles.mediaImage}>
            <Image
              src="/images/spa-interior.svg"
              alt="Strefa spa z basenem i oświetleniem punktowym"
              width={1600}
              height={1000}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div>
            <span className="eyebrow">Restauracja i spa</span>
            <h2 id="spa-heading">Kuchnia autorska i strefa relaksu</h2>
            <div className="divider" />
            <p>
              Restauracja hotelowa serwuje sezonowe menu oparte na lokalnych
              produktach, uzupełnione starannie dobraną kartą win. Wieczorami
              bar hotelowy staje się miejscem spotkań przy koktajlach
              przygotowywanych na zamówienie.
            </p>
            <p style={{ marginTop: "18px" }}>
              Strefa spa obejmuje basen, saunę fińską, łaźnię parową oraz
              gabinety zabiegowe. Wszystkie zabiegi rezerwowane są
              indywidualnie, z zachowaniem pełnej dyskrecji.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className={styles.casinoTeaser}>
            <span className="badge">18+ · Wyłącznie dla gości hotelowych</span>
            <h2 style={{ marginTop: "24px" }}>Prywatny salon gier</h2>
            <p>
              Na parterze hotelu, w oddzielnym, dyskretnym skrzydle, znajduje
              się kameralny salon gier — miejsce spotkań przy stołach do gry
              w eleganckiej, stonowanej atmosferze. Poznaj zasady wstępu,
              godziny otwarcia i charakter tej przestrzeni.
            </p>
            <Link href="/kasyno" className="btn btn--primary">
              Zobacz salon gier
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.quote}`}>
          <p className={styles.quoteText}>
            „Miejsce, w którym dyskrecja i detal liczą się bardziej niż
            rozgłos.”
          </p>
          <p className={styles.quoteAuthor}>Gość hotelowy</p>
        </div>
      </section>

      <section className="section section--alt" id="lokalizacja">
        <div className={`container ${styles.locationGrid}`}>
          <div>
            <span className="eyebrow">Lokalizacja</span>
            <h2>W samym sercu Warszawy</h2>
            <div className="divider" />
            <ul className={styles.locationList}>
              <li>{ADDRESS}</li>
              <li>5 minut spacerem od reprezentacyjnych ulic centrum</li>
              <li>15 minut od lotniska Chopina</li>
              <li>Parking podziemny z obsługą valet</li>
            </ul>
            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Otwórz w Mapach Google
            </a>
          </div>
          <div className={styles.mapFrame}>
            <p>
              Dokładna lokalizacja i trasa dojazdu dostępne są w Mapach
              Google.
            </p>
            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              {ADDRESS}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
