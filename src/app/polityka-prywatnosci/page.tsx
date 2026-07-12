import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Polityka prywatności i plików cookie",
  description:
    "Polityka prywatności i plików cookie strony hotelowej: jakie dane i pliki cookie wykorzystujemy, a jakich nie stosujemy.",
};

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className={`container ${styles.wrap}`}>
        <span className="eyebrow">Prywatność</span>
        <h1>Polityka prywatności i plików cookie</h1>
        <div className="divider" />

        <h2>1. Kto odpowiada za tę stronę</h2>
        <p>
          Niniejsza strona internetowa ma charakter prezentacyjny i służy do
          przedstawienia oferty hotelu. Dane kontaktowe znajdują się w stopce
          strony oraz w sekcji kontaktowej strony głównej.
        </p>

        <h2>2. Jakie pliki cookie wykorzystujemy</h2>
        <p>
          Ta strona wykorzystuje wyłącznie jeden, niezbędny mechanizm
          zapisu lokalnego (localStorage), którego jedynym celem jest
          zapamiętanie Twojej decyzji dotyczącej komunikatu o plikach
          cookie, aby nie wyświetlać go ponownie przy kolejnej wizycie.
        </p>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Nazwa</th>
              <th>Cel</th>
              <th>Czas przechowywania</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>cookie-consent</td>
              <td>Zapamiętanie decyzji dot. komunikatu o cookies</td>
              <td>Do momentu usunięcia danych przeglądarki</td>
            </tr>
          </tbody>
        </table>

        <h2>3. Czego NIE wykorzystujemy</h2>
        <p>Na tej stronie celowo nie stosujemy:</p>
        <ul>
          <li>plików cookie analitycznych ani statystycznych,</li>
          <li>plików cookie reklamowych ani remarketingowych,</li>
          <li>
            skryptów śledzących stron trzecich (np. Google Analytics, Google
            Ads, Meta Pixel),
          </li>
          <li>
            żadnych zewnętrznych czcionek, bibliotek ani zasobów ładowanych z
            sieci CDN — wszystkie zasoby strony są serwowane z naszego
            własnego serwera.
          </li>
        </ul>

        <h2>4. Dane przekazywane przez formularz kontaktowy</h2>
        <p>
          Jeśli skontaktujesz się z nami telefonicznie lub mailowo,
          przetwarzamy podane przez Ciebie dane (np. imię, adres e-mail,
          treść wiadomości) wyłącznie w celu udzielenia odpowiedzi na
          zapytanie oraz obsługi rezerwacji.
        </p>

        <h2>5. Twoje prawa</h2>
        <p>
          Masz prawo dostępu do swoich danych, ich sprostowania, usunięcia
          oraz ograniczenia przetwarzania. W celu skorzystania z tych praw
          prosimy o kontakt na adres wskazany w stopce strony.
        </p>

        <h2>6. Zmiany w polityce</h2>
        <p>
          Niniejsza polityka może być okresowo aktualizowana w celu
          odzwierciedlenia rzeczywistej funkcjonalności strony. Zalecamy
          okresowe zapoznawanie się z jej treścią.
        </p>
      </div>
    </section>
  );
}
