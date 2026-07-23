import { useLanguage, type Lang } from "../context/LanguageContext";
import "./sections.css";

const T: Record<Lang, { title: string; subtitle: string; story: string }> = {
  en: {
    title: "Zaav G",
    subtitle: "A way back to yourself.\nJewelry with meaning, made to be part of your life.",
    story:
      "My name is Elena.\nZaav G began in Bali — a place that changes the way you see beauty, time, and yourself.\nWhat started as a single piece became a language.\nA way to express what cannot always be said in words.\nToday, Zaav G is handcrafted in Bali,\nwith boutiques in Bali and Moscow,\nand worn by women around the world.\nBut at its core, it has always remained the same —\njewelry you don't just wear, you feel.",
  },
  ru: {
    title: "Zaav G",
    subtitle: "Путь к себе.\nУкрашения со смыслом, созданные, чтобы быть частью вашей жизни.",
    story:
      "Меня зовут Елена.\nZaav G зародился на Бали — месте, которое меняет представление о красоте, времени и о себе.\nТо, что начиналось с одного изделия, стало языком.\nСпособом выразить то, что не всегда можно сказать словами.\nСегодня Zaav G создаётся вручную на Бали,\nимеет бутики на Бали и в Москве,\nи его носят женщины по всему миру.\nНо в своей основе он всегда оставался прежним —\nукрашения, которые не просто носишь, а чувствуешь.",
  },
  id: {
    title: "Zaav G",
    subtitle: "Kembali kepada diri Anda.\nPerhiasan dengan makna, dibuat untuk menjadi bagian dari hidup Anda.",
    story:
      "Nama saya Elena.\nZaav G bermula di Bali — tempat yang mengubah cara Anda memandang keindahan, waktu, dan diri sendiri.\nYang bermula dari satu karya, menjadi sebuah bahasa.\nCara mengungkapkan apa yang tak selalu terucap oleh kata-kata.\nKini, Zaav G dibuat dengan tangan di Bali,\ndengan butik di Bali dan Moskwa,\ndan dikenakan oleh wanita di seluruh dunia.\nNamun pada intinya, ia selalu tetap sama —\nperhiasan yang tidak sekadar dikenakan, tetapi dirasakan.",
  },
};

function multiline(text: string) {
  return text.split("\n").map((line, i, arr) => (
    <span key={i}>
      {line}
      {i < arr.length - 1 && <br />}
    </span>
  ));
}

export function About() {
  const { lang } = useLanguage();
  const t = T[lang];
  return (
    <section className="zav-about">
      <div className="zav-about__container">
        <div className="zav-about__image-wrapper">
          <img
            src="https://cdn.shopify.com/s/files/1/0987/8745/9350/files/IMG_1012.jpg?v=1776287860"
            alt="Zaav G"
            className="zav-about__image"
          />
        </div>
        <div className="zav-about__content">
          <h2 className="zav-about__title">{t.title}</h2>
          <p className="zav-about__subtitle">{multiline(t.subtitle)}</p>
          <div className="zav-about__divider" />
          <p className="zav-about__story">{multiline(t.story)}</p>
        </div>
      </div>
    </section>
  );
}
