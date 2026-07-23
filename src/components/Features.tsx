import { useLanguage, type Lang } from "../context/LanguageContext";
import "./sections.css";

type Item = { title: string; text: string[] };
type Dict = {
  title: string;
  subtitle: string[];
  features: [Item, Item, Item];
  benefits: [Item, Item, Item];
};

const T: Record<Lang, Dict> = {
  en: {
    title: "Made for You",
    subtitle: [
      "We create pieces to be worn every day —",
      "and remembered in the moments that matter.",
    ],
    features: [
      { title: "Unique Design", text: ["Inspired by ancient symbols and the quiet power of nature."] },
      { title: "Own Production", text: ["Our design studio and workshop are based in Bali,", "where each piece is brought to life by hand."] },
      { title: "Handmade", text: ["Every piece is handcrafted by skilled Balinese artisans."] },
    ],
    benefits: [
      { title: "Natural Materials", text: ["We use 925 silver, 24k gold accents, and natural stones."] },
      { title: "Quality Guarantee", text: ["Each piece goes through careful quality control before it reaches you."] },
      { title: "Worldwide Shipping", text: ["We deliver ZAAV G to all corners of the world."] },
    ],
  },
  ru: {
    title: "Создано для вас",
    subtitle: [
      "Украшения, которые хочется носить каждый день",
      "и хранить в воспоминаниях вместе с важными моментами жизни.",
    ],
    features: [
      { title: "Уникальный дизайн", text: ["Вдохновлён древними символами и тихой силой природы."] },
      { title: "Собственное производство", text: ["Наша дизайн-студия и мастерская находятся на Бали,", "где каждое изделие создаётся вручную."] },
      { title: "Ручная работа", text: ["Каждое изделие изготавливается вручную опытными балийскими мастерами."] },
    ],
    benefits: [
      { title: "Натуральные материалы", text: ["Мы используем серебро 925 пробы, вставки из золота 24 карата и натуральные камни."] },
      { title: "Гарантия качества", text: ["Каждое изделие проходит тщательный контроль качества перед отправкой."] },
      { title: "Доставка по всему миру", text: ["Мы доставляем ZAAV G во все уголки мира."] },
    ],
  },
  id: {
    title: "Dibuat untuk Anda",
    subtitle: [
      "Kami menciptakan perhiasan untuk dipakai setiap hari —",
      "dan dikenang di momen-momen yang berarti.",
    ],
    features: [
      { title: "Desain Unik", text: ["Terinspirasi oleh simbol kuno dan kekuatan alam yang tenang."] },
      { title: "Produksi Sendiri", text: ["Studio desain dan workshop kami berbasis di Bali,", "di mana setiap karya diciptakan dengan tangan."] },
      { title: "Buatan Tangan", text: ["Setiap karya dibuat dengan tangan oleh pengrajin Bali yang terampil."] },
    ],
    benefits: [
      { title: "Bahan Alami", text: ["Kami menggunakan perak 925, aksen emas 24k, dan batu alam."] },
      { title: "Jaminan Kualitas", text: ["Setiap karya melalui kontrol kualitas yang cermat sebelum sampai ke Anda."] },
      { title: "Pengiriman ke Seluruh Dunia", text: ["Kami mengantarkan ZAAV G ke seluruh penjuru dunia."] },
    ],
  },
};

const FEATURE_IMAGES = [
  "https://cdn.shopify.com/s/files/1/0987/8745/9350/files/3.png?v=1776457384",
  "https://cdn.shopify.com/s/files/1/0987/8745/9350/files/5.png?v=1776457384",
  "https://cdn.shopify.com/s/files/1/0987/8745/9350/files/4.png?v=1776457384",
];
const BENEFIT_IMAGES = [
  "https://cdn.shopify.com/s/files/1/0987/8745/9350/files/IMG_2533.PNG_1.webp?v=1777991407",
  "https://cdn.shopify.com/s/files/1/0987/8745/9350/files/IMG_2532.PNG_1.webp?v=1777991407",
  "https://cdn.shopify.com/s/files/1/0987/8745/9350/files/IMG_2531.PNG_1.webp?v=1777991407",
];

function lines(arr: string[]) {
  return arr.map((line, i) => (
    <span key={i}>
      {line}
      {i < arr.length - 1 && <br />}
    </span>
  ));
}

export function Features() {
  const { lang } = useLanguage();
  const t = T[lang];
  return (
    <>
      <section className="zav-features">
        <div className="zav-features__overlay" />
        <div className="zav-features__content">
          <h2 className="zav-features__title">{t.title}</h2>
          <p className="zav-features__subtitle">{lines(t.subtitle)}</p>
          <div className="zav-features__grid">
            {t.features.map((item, i) => (
              <div key={i} className="zav-features__item">
                <div className="zav-features__icon">
                  <img src={FEATURE_IMAGES[i]} alt={item.title} loading="lazy" />
                </div>
                <h3 className="zav-features__item-title">{item.title}</h3>
                <p className="zav-features__item-text">{lines(item.text)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="zav-benefits">
        <div className="zav-benefits__content">
          <div className="zav-benefits__grid">
            {t.benefits.map((item, i) => (
              <div key={i} className="zav-benefits__item">
                <div className="zav-benefits__icon">
                  <img src={BENEFIT_IMAGES[i]} alt={item.title} loading="lazy" />
                </div>
                <h3 className="zav-benefits__item-title">{item.title}</h3>
                <p className="zav-benefits__item-text">{lines(item.text)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
