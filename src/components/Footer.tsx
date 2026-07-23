import { useLanguage, type Lang } from "../context/LanguageContext";
import "./sections.css";

const T: Record<Lang, { home: string; catalog: string; size: string; terms: string; refund: string; privacy: string }> = {
  en: {
    home: "Home",
    catalog: "Collections",
    size: "Size Guide",
    terms: "Terms & Conditions",
    refund: "Refund Policy",
    privacy: "Privacy Policy",
  },
  ru: {
    home: "Главная",
    catalog: "Коллекции",
    size: "Узнать размер",
    terms: "Условия использования",
    refund: "Политика возврата",
    privacy: "Политика конфиденциальности",
  },
  id: {
    home: "Beranda",
    catalog: "Katalog",
    size: "Panduan Ukuran",
    terms: "Syarat & Ketentuan",
    refund: "Kebijakan Pengembalian",
    privacy: "Kebijakan Privasi",
  },
};

export function Footer() {
  const { lang } = useLanguage();
  const t = T[lang];
  const links: { href: string; label: string }[] = [
    { href: "/", label: t.home },
    { href: "/collections/all", label: t.catalog },
    { href: "/pages/size", label: t.size },
    { href: "/pages/terms-of-service", label: t.terms },
    { href: "/pages/refund-policy", label: t.refund },
    { href: "/pages/privacy-policy", label: t.privacy },
  ];
  return (
    <footer className="zav-footer">
      <div className="zav-footer__container">
        <nav className="zav-footer__nav">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="zav-footer__link">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="zav-footer__logo">
          <a href="/" className="zav-footer__logo-text">
            ZAAV G
          </a>
        </div>
        <p className="zav-footer__copyright">© Win Win Silver | All Rights Reserved.</p>
      </div>
    </footer>
  );
}
