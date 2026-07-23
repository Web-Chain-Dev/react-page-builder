import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import "./site-chrome.css";

const translations = {
  en: { toolbarSearch: "Search", toolbarContact: "Contact Us", contactTitle: "Contact Us" },
  ru: { toolbarSearch: "Поиск", toolbarContact: "Связаться", contactTitle: "Напишите нам" },
  id: { toolbarSearch: "Cari", toolbarContact: "Hubungi Kami", contactTitle: "Hubungi Kami" },
} as const;

export function FloatingToolbar() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.body.style.overflow = searchOpen || contactOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [searchOpen, contactOpen]);

  useEffect(() => {
    if (searchOpen) setTimeout(() => inputRef.current?.focus(), 100);
    else setQuery("");
  }, [searchOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setContactOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="zav-toolbar">
        <button
          className="zav-toolbar__btn zav-toolbar__btn--search"
          aria-label="Search"
          onClick={() => setSearchOpen(true)}
        >
          <span className="zav-toolbar__tooltip">{t.toolbarSearch}</span>
          <svg viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
        <button
          className="zav-toolbar__btn zav-toolbar__btn--chat"
          aria-label="Contact Us"
          onClick={() => setContactOpen(true)}
        >
          <span className="zav-toolbar__tooltip">{t.toolbarContact}</span>
          <svg viewBox="0 0 24 24">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </button>
      </div>

      {/* SEARCH OVERLAY */}
      <div
        className={`zav-search-overlay${searchOpen ? " active" : ""}`}
        role="dialog"
        aria-modal="true"
        onClick={(e) => {
          if (e.target === e.currentTarget) setSearchOpen(false);
        }}
      >
        <div className="zav-search-overlay__container">
          <button
            className="zav-search-overlay__close"
            aria-label="Close search"
            onClick={() => setSearchOpen(false)}
          >
            <svg viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <form
            className="zav-search-overlay__form"
            role="search"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              ref={inputRef}
              type="search"
              className="zav-search-overlay__input"
              placeholder={`${t.toolbarSearch} products...`}
              autoComplete="off"
              aria-label="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <svg
              className="zav-search-overlay__icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <button
              type="button"
              className={`zav-search-overlay__clear${query ? " visible" : ""}`}
              aria-label="Clear search"
              onClick={() => {
                setQuery("");
                inputRef.current?.focus();
              }}
            >
              ×
            </button>
          </form>
        </div>
      </div>

      {/* CONTACT MODAL */}
      <div
        className={`zav-contact-modal__overlay${contactOpen ? " active" : ""}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setContactOpen(false);
        }}
      >
        <div className="zav-contact-modal" role="dialog" aria-modal="true">
          <button
            className="zav-contact-modal__close"
            aria-label="Close"
            onClick={() => setContactOpen(false)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <h2 className="zav-contact-modal__title">{t.contactTitle}</h2>
          <div className="zav-contact-modal__grid">
            <a
              href="https://instagram.com/zaav_g_bali"
              className="zav-contact-modal__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="zav-contact-modal__icon zav-contact-modal__icon--instagram">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="white" strokeWidth={2} />
                  <circle cx="12" cy="12" r="4" stroke="white" strokeWidth={2} fill="none" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="white" stroke="none" />
                </svg>
              </div>
              <span className="zav-contact-modal__label">Instagram</span>
            </a>
            <a href="mailto:zaavg.bali@gmail.com" className="zav-contact-modal__link">
              <div className="zav-contact-modal__icon zav-contact-modal__icon--gmail">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6Z"
                    fill="#EA4335"
                    stroke="none"
                  />
                  <path
                    d="M22 6L12 13L2 6"
                    stroke="#ffffff"
                    strokeWidth={1.8}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M22 18L15 12" stroke="#ffffff" strokeWidth={1.8} fill="none" strokeLinecap="round" />
                  <path d="M2 18L9 12" stroke="#ffffff" strokeWidth={1.8} fill="none" strokeLinecap="round" />
                </svg>
              </div>
              <span className="zav-contact-modal__label">Email</span>
            </a>
            <a
              href="https://wa.me/6281139888882"
              className="zav-contact-modal__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="zav-contact-modal__icon zav-contact-modal__icon--whatsapp">
                <svg viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <span className="zav-contact-modal__label">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
