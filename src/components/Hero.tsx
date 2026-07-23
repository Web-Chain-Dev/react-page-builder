import { useEffect } from "react";
import { useLanguage, type Lang } from "../context/LanguageContext";
import "./sections.css";

const T: Record<Lang, { title: string; subtitle: string; btn1: string; btn2: string }> = {
  en: {
    title: "Jewelry Born in Bali",
    subtitle: "More than jewelry — a reflection of who you are.\nHandcrafted with meaning. Shipped worldwide.",
    btn1: "Explore Collections",
    btn2: "Chat on WhatsApp",
  },
  ru: {
    title: "Украшения, рожденные на Бали",
    subtitle: "Больше, чем украшения — отражение вашего внутреннего мира. Созданы вручную со смыслом. Доставка по всему миру.",
    btn1: "Смотреть коллекции",
    btn2: "Написать в WhatsApp",
  },
  id: {
    title: "Perhiasan Lahir di Bali",
    subtitle: "Lebih dari perhiasan — cerminan jati diri Anda.\nDibuat dengan tangan, penuh makna. Dikirim ke seluruh dunia.",
    btn1: "Jelajahi Koleksi",
    btn2: "Chat di WhatsApp",
  },
};

export function Hero() {
  const { lang } = useLanguage();
  const t = T[lang];

  useEffect(() => {
    const trigger = () => {
      document.querySelectorAll<HTMLElement>(".zav-hero__btn").forEach((btn) => {
        btn.classList.remove("glisten");
        // reflow
        void btn.offsetWidth;
        btn.classList.add("glisten");
      });
    };
    const initial = setTimeout(() => {
      trigger();
    }, 2000);
    const interval = setInterval(trigger, 5000);
    return () => {
      clearTimeout(initial);
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="zav-hero">
      <div className="zav-hero__overlay" />
      <div className="zav-hero__content">
        <h1 className="zav-hero__title">{t.title}</h1>
        <p className="zav-hero__subtitle">
          {t.subtitle.split("\n").map((line, i, arr) => (
            <span key={i}>
              {line}
              {i < arr.length - 1 && <br />}
            </span>
          ))}
        </p>
        <div className="zav-hero__buttons">
          <a href="/collections/all" className="zav-hero__btn zav-hero__btn--primary">
            {t.btn1}
          </a>
          <a
            href="https://wa.me/6281139888882"
            className="zav-hero__btn zav-hero__btn--secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.btn2}
          </a>
        </div>
      </div>
    </section>
  );
}
