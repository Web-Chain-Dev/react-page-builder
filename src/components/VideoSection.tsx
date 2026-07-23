import { useLanguage, type Lang } from "../context/LanguageContext";
import "./sections.css";

const T: Record<Lang, { button: string; quote: string; author: string }> = {
  en: {
    button: "More Zaav G Videos",
    quote:
      "Each piece begins with a symbol — something ancient, quiet, and powerful. We shape it by hand, giving it a new form, so it can become part of your life today. Not for special occasions, but for the moments that truly matter.",
    author: "Explore the world of Zaav G",
  },
  ru: {
    button: "Больше видео Zaav G",
    quote:
      "Каждое украшение начинается с символа — древнего, тихого и наполненного силой. Мы вручную придаём ему новую форму, чтобы оно стало частью вашей жизни сегодня. Не для особых случаев. А для моментов, которые действительно важны.",
    author: "Открой мир Zaav G",
  },
  id: {
    button: "Lebih Banyak Video Zaav G",
    quote:
      "Setiap karya bermula dari sebuah simbol — yang kuno, sunyi, dan penuh kekuatan. Kami membentuknya dengan tangan, memberinya wujud baru, agar dapat menjadi bagian dari hidup Anda hari ini. Bukan untuk momen istimewa, tetapi untuk saat-saat yang benar-benar berarti.",
    author: "Jelajahi dunia Zaav G",
  },
};

export function VideoSection() {
  const { lang } = useLanguage();
  const t = T[lang];
  return (
    <section className="zav-video-section">
      <div className="zav-video-section__container">
        <div className="zav-video-section__video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/BgRsNeRtTFY"
            title="Zaav G Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <a href="/pages/videos" className="zav-video-section__button">
            {t.button}
          </a>
        </div>
        <div className="zav-video-section__quote">
          <span className="zav-video-section__quote-mark">&ldquo;</span>
          <p className="zav-video-section__quote-text">{t.quote}</p>
          <p className="zav-video-section__quote-author">{t.author}</p>
        </div>
      </div>
    </section>
  );
}
