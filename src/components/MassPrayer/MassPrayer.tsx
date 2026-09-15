"use client";

import styles from "./MassPrayer.module.css";

const prayerItems = [
  {
    number: "01",
    icon: "✦",
    title: "Holy Mass",
    subtitle: "Daily Eucharistic Celebration",
    time: (
      <>
        Morning &
        <br />
        Evening
      </>
    ),
  },
  {
    number: "02",
    icon: "✧",
    title: "Holy Rosary",
    subtitle: "Prayer with Our Blessed Mother",
    time: (
      <>
        Daily
        <br />
        Prayer
      </>
    ),
  },
  {
    number: "03",
    icon: "✝",
    title: "Confession",
    subtitle: "Sacrament of Reconciliation",
    time: (
      <>
        Available
        <br />
        Daily
      </>
    ),
  },
  {
    number: "04",
    icon: "◈",
    title: "Eucharistic Adoration",
    subtitle: "A Quiet Time with the Lord",
    time: (
      <>
        Prayer &
        <br />
        Adoration
      </>
    ),
  },
];

export default function MassPrayer() {
  return (
    <section className={styles.section} id="mass-prayer">
      {/* Background Image */}
      <div className={styles.background}>
        <img
          src="/images/church/mass-prayer.png"
          alt=""
          aria-hidden="true"
        />
      </div>

      {/* Cinematic Overlay */}
      <div className={styles.overlay}></div>

      {/* Main Content */}
      <div className={styles.container}>
        {/* =========================
            LEFT CONTENT
        ========================= */}

        <div className={styles.content}>
          <p className={styles.overline}>
            MASS &amp; PRAYER
          </p>

          <h2>
            Come Before
            <em>the Lord</em>
          </h2>

          <div className={styles.divider}>
            <span></span>
          </div>

          <p className={styles.description}>
            At Velankanni, every prayer becomes a moment of
            grace. Join pilgrims and devotees in prayer,
            worship and the loving presence of our Lord.
          </p>

          <div className={styles.quoteBox}>
            <p>
              “Come to me, all you who are weary and
              burdened, and I will give you rest.”
            </p>

            <span>MATTHEW 11:28</span>
          </div>

          <a
            href="/contact"
            className={styles.scheduleLink}
          >
            <span>VIEW FULL SCHEDULE</span>
            <b>→</b>
          </a>
        </div>

        {/* =========================
            RIGHT SCHEDULE CARD
        ========================= */}

        <div className={styles.scheduleCard}>
          {/* Header */}

          <div className={styles.cardHeader}>
            <div>
              <p>DAILY</p>

              <h3>Prayer Schedule</h3>
            </div>

            <div className={styles.cross}>
              ✝
            </div>
          </div>

          {/* Prayer List */}

          <div className={styles.scheduleList}>
            {prayerItems.map((item) => (
              <div
                className={styles.scheduleItem}
                key={item.number}
              >
                <div className={styles.number}>
                  {item.number}
                </div>

                <div className={styles.icon}>
                  {item.icon}
                </div>

                <div className={styles.itemInfo}>
                  <h4>{item.title}</h4>

                  <p>{item.subtitle}</p>
                </div>

                <div className={styles.itemTime}>
                  <span>{item.time}</span>

                  <b>→</b>
                </div>
              </div>
            ))}
          </div>

          {/* Information Note */}

          <div className={styles.note}>
            <div className={styles.noteIcon}>
              i
            </div>

            <p>
              Please check the latest parish announcements
              for special celebrations, feast days and
              schedule changes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}