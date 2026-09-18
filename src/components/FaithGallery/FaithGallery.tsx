"use client";

import styles from "./FaithGallery.module.css";

const galleryItems = [
  {
    image: "/images/church/faith-01.png",
    title: "Basilica of Our Lady",
    subtitle: "of Good Health",
  },
  {
    image: "/images/church/faith-02.png",
    title: "Holy Prayer",
    subtitle: "A Moment of Grace",
  },
  {
    image: "/images/church/faith-03.png",
    title: "Pilgrims at Mary",
    subtitle: "Journey of Faith",
  },
  {
    image: "/images/church/faith-04.png",
    title: "Our Blessed Mother",
    subtitle: "Mother of Good Health",
  },
  {
    image: "/images/church/faith-05.png",
    title: "Sacred Moments",
    subtitle: "Faith & Devotion",
  },
  {
    image: "/images/church/faith-06.png",
    title: "Faith & Devotion",
    subtitle: "A Place of Hope",
  },
  {
    image: "/images/church/faith-07.png",
    title: "Evening Prayer",
    subtitle: "Peace & Reflection",
  },
  {
    image: "/images/church/faith-08.png",
    title: "A Place of Hope",
    subtitle: "Goodness",
  },
];

export default function FaithGallery() {
  return (
    <section className={styles.section} id="faith">
      <div className={styles.glow}></div>

      {/* HEADER */}
      <div className={styles.header}>
        <p className={styles.overline}>MOMENTS OF FAITH</p>

        <h2>
          Where Every Prayer
          <em>Has a Story</em>
        </h2>

        <div className={styles.divider}>
          <span></span>
        </div>
      </div>

      {/* AUTO SCROLL GALLERY */}
      <div className={styles.galleryWrapper}>
        <div className={styles.galleryTrack}>
          {/* FIRST SET */}
          <div className={styles.galleryGroup}>
            {galleryItems.map((item, index) => (
              <article className={styles.card} key={`first-${index}`}>
                <div className={styles.imageWrapper}>
                  <img
                    src={item.image}
                    alt={item.title}
                  />

                  <div className={styles.imageShade}></div>

                  <div className={styles.cardNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className={styles.cardContent}>
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* DUPLICATE SET
              This creates the seamless loop */}
          <div className={styles.galleryGroup} aria-hidden="true">
            {galleryItems.map((item, index) => (
              <article className={styles.card} key={`second-${index}`}>
                <div className={styles.imageWrapper}>
                  <img
                    src={item.image}
                    alt=""
                  />

                  <div className={styles.imageShade}></div>

                  <div className={styles.cardNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className={styles.cardContent}>
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className={styles.bottom}>
        <div className={styles.bottomLine}></div>

        <p>
          A journey of faith, prayer and devotion
          <br />
          that brings pilgrims together at Good.
        </p>

        <a href="#about" className={styles.exploreLink}>
          <span>EXPLORE Society of Apostles of Mary</span>
          <b>→</b>
        </a>
      </div>
    </section>
  );
}