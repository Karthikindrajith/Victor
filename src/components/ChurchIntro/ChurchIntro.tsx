import styles from "./ChurchIntro.module.css";

export default function ChurchIntro() {
  return (
    <section className={styles.section} id="about">
      {/* Background Image */}
      <div className={styles.backgroundImage}>
        <img
          src="/images/church/intro-bg.jpg"
          alt=""
          aria-hidden="true"
        />
      </div>

      {/* Soft Background Overlay */}
      <div className={styles.backgroundOverlay}></div>

      <div className={styles.container}>
        {/* ================= VISUAL ================= */}
        <div className={styles.visual}>
          <div className={styles.goldFrame}></div>

          <div className={styles.imageBox}>
            <img
              src="/images/church/church-01.png"
              alt="Basilica of Our Lady of Good Health, Velankanni"
            />
          </div>

          {/* Floating Badge */}
          <div className={styles.badge}>
            <span>APOSTLES OF MARY</span>
            <small>A PLACE OF FAITH &amp; HOPE</small>
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className={styles.content}>
          <p className={styles.overline}>
            OUR LADY OF GOOD HEALTH
          </p>

          <h2>
            A Sacred Place of
            <em>Faith &amp; Healing</em>
          </h2>

          <div className={styles.separator}></div>

          <p className={styles.text}>
            The Basilica of Our Lady of Good Health  is one
            of the most beloved Marian pilgrimage centres in India.
            For generations, countless pilgrims have come here in
            faith, prayer and hope, seeking the loving intercession
            of Our Blessed Mother.
          </p>

          <p className={styles.text}>
            Known with affection as the “Lourdes of the East”,
             welcomes pilgrims and visitors from across
            India and around the world.
          </p>

          <a href="#faith" className={styles.storyLink}>
            <span>DISCOVER OUR STORY</span>
            <b>→</b>
          </a>
        </div>
      </div>
    </section>
  );
}