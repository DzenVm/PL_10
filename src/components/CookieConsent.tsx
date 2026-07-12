"use client";

import { useEffect, useState } from "react";
import styles from "./CookieConsent.module.css";

const STORAGE_KEY = "cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reading persisted consent choice on mount is client-only by nature
    setVisible(!stored);
  }, []);

  function choose(value: "accepted" | "declined") {
    window.localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  }

  if (!visible) {
    return null;
  }

  return (
    <div
      className={styles.wrapper}
      role="dialog"
      aria-live="polite"
      aria-label="Informacja o plikach cookie"
    >
      <div className={styles.panel}>
        <p className={styles.text}>
          Ta strona wykorzystuje wyłącznie niezbędne pliki cookie, potrzebne
          do zapamiętania Twojego wyboru dotyczącego tego komunikatu. Nie
          używamy plików cookie analitycznych, reklamowych ani żadnych
          skryptów śledzących. Więcej informacji znajdziesz w{" "}
          <a className={styles.link} href="/polityka-prywatnosci">
            polityce prywatności
          </a>
          .
        </p>
        <div className={styles.actions}>
          <button
            type="button"
            className="btn"
            onClick={() => choose("declined")}
          >
            Odrzuć
          </button>
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => choose("accepted")}
          >
            Akceptuję
          </button>
        </div>
      </div>
    </div>
  );
}
