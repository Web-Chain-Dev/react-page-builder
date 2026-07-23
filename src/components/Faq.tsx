import { useLanguage, type Lang } from "../context/LanguageContext";
import "./sections.css";

const T: Record<Lang, { title: string; subtitle: string; cards: [string, string, string, string]; learnMore: string }> = {
  en: {
    title: "FAQ",
    subtitle: "Answers to the most common questions about our jewelry and orders.",
    cards: ["Size Guide", "Delivery & Shipping", "Payment Methods", "Partnerships"],
    learnMore: "Learn More →",
  },
  ru: {
    title: "FAQ",
    subtitle: "Ответы на самые частые вопросы о наших украшениях и заказах.",
    cards: ["Размерная сетка", "Доставка", "Способы оплаты", "Сотрудничество"],
    learnMore: "Узнать Больше →",
  },
  id: {
    title: "FAQ",
    subtitle: "Jawaban atas pertanyaan yang paling sering diajukan tentang perhiasan dan pesanan kami.",
    cards: ["Panduan Ukuran", "Pengiriman", "Metode Pembayaran", "Kemitraan"],
    learnMore: "Pelajari Selengkapnya →",
  },
};

const CARDS = [
  { href: "/pages/size-guide", img: "https://cdn.shopify.com/s/files/1/0987/8745/9350/files/IMG_1328.jpg?v=1776287860" },
  { href: "/pages/delivery", img: "https://cdn.shopify.com/s/files/1/0987/8745/9350/files/IMG_1327.jpg?v=1776287860" },
  { href: "/pages/payment", img: "https://cdn.shopify.com/s/files/1/0987/8745/9350/files/IMG_1324.jpg?v=1776287860" },
  { href: "/pages/cooperation", img: "https://cdn.shopify.com/s/files/1/0987/8745/9350/files/IMG_1330.jpg?v=1776287860" },
];

export function Faq() {
  const { lang } = useLanguage();
  const t = T[lang];
  return (
    <section className="zav-faq">
      <div className="zav-faq__container">
        <div className="zav-faq__header">
          <h2 className="zav-faq__title">{t.title}</h2>
          <p className="zav-faq__subtitle">{t.subtitle}</p>
        </div>
        <div className="zav-faq__grid">
          {CARDS.map((card, i) => (
            <a key={i} href={card.href} className="zav-faq__card">
              <img src={card.img} alt={t.cards[i]} className="zav-faq__card-image" loading="lazy" />
              <div className="zav-faq__card-content">
                <h3 className="zav-faq__card-title">{t.cards[i]}</h3>
              </div>
              <span className="zav-faq__learn-more">{t.learnMore}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
