import { useLanguage, type Lang } from "../context/LanguageContext";
import "./sections.css";

const MAP_URL =
  "https://www.google.com/maps/place/Zaav+G+jewelry/@-8.5921887,115.2630557,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd23f9ab07189a5:0x2729aeb27f922727!8m2!3d-8.592194!4d115.2656306!16s%2Fg%2F11nhk1nb4x?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D";

const T: Record<
  Lang,
  { subtitleVideo: string; subtitleStatic: string[]; link: string }
> = {
  en: {
    subtitleVideo:
      "Step inside the world of Zaav G. A space where jewelry, art, and atmosphere come together. Visit our boutique in Bali and experience the pieces in person.",
    subtitleStatic: [
      "Step inside the world of Zaav G.",
      "A space where jewelry, art, and atmosphere come together.",
      "Visit our boutique in Bali",
      "and experience the pieces in person.",
    ],
    link: "View on Map",
  },
  ru: {
    subtitleVideo:
      "Добро пожаловать в мир Zaav G. Пространство, где встречаются украшения, искусство и атмосфера острова. Посетите наш бутик на Бали и познакомьтесь с украшениями вживую.",
    subtitleStatic: [
      "Добро пожаловать в мир Zaav G.",
      "Пространство, где встречаются украшения, искусство и атмосфера острова.",
      "Посетите наш бутик на Бали",
      "и познакомьтесь с украшениями вживую.",
    ],
    link: "Открыть на карте",
  },
  id: {
    subtitleVideo:
      "Masuk ke dunia Zaav G. Ruang tempat perhiasan, seni, dan suasana menyatu. Kunjungi butik kami di Bali dan rasakan langsung karya-karyanya.",
    subtitleStatic: [
      "Masuk ke dunia Zaav G.",
      "Ruang tempat perhiasan, seni, dan suasana menyatu.",
      "Kunjungi butik kami di Bali",
      "dan rasakan langsung karya-karyanya.",
    ],
    link: "Lihat di Peta",
  },
};

const Arrow = () => (
  <svg viewBox="0 0 24 24">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export function ArtSpace() {
  const { lang } = useLanguage();
  const t = T[lang];
  return (
    <section className="zav-art-space">
      {/* Desktop / tablet video version */}
      <div className="zav-art-space__video">
        <div className="zav-art-space__video-inner">
          <video
            className="zav-art-space__video-el"
            autoPlay
            loop
            muted
            playsInline
            poster="https://cdn.shopify.com/s/files/1/0987/8745/9350/files/IMG_1010.jpg?v=1776287860"
            aria-hidden="true"
          >
            <source
              src="https://cdn.shopify.com/videos/c/o/v/093cf9d136094da2bde00d95e2d88391.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="zav-art-space__video-fallback" aria-hidden="true" />
          <div className="zav-art-space__video-content">
            <h2 className="zav-art-space__video-title">
              ART SPACE
              <br />
              <span>Zaav G</span>
            </h2>
            <p className="zav-art-space__video-subtitle">{t.subtitleVideo}</p>
            <a
              href={MAP_URL}
              className="zav-art-space__video-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.link}
              <Arrow />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile static version */}
      <div className="zav-art-space__static">
        <div className="zav-art-space__static-bg" />
        <div className="zav-art-space__static-overlay" />
        <div className="zav-art-space__static-container">
          <div className="zav-art-space__static-content">
            <h2 className="zav-art-space__static-heading">
              ART SPACE
              <br />
              <span>Zaav G</span>
            </h2>
            <p className="zav-art-space__static-text">
              {t.subtitleStatic.map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </p>
            <a
              href={MAP_URL}
              className="zav-art-space__static-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{t.link}</span>
              <Arrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
