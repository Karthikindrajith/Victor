"use client";

import Link from "next/link";
import styles from "./TamilBlogs.module.css";

const blogs = [
  {
    id: 1,
    slug: "mother-marys-message",
    category: "MARY",
    title: "Mother Mary's Message",
    date: "September 16, 2026",
    image: "/images/church/faith-01.jpg",
    excerpt:
      "A reflection on Mother Mary's message of faith, prayer, hope and love.",
  },
  {
    id: 2,
    slug: "our-lady-of-good-health",
    category: "MARY",
    title: "Our Lady of Good Health",
    date: "September 12, 2026",
    image: "/images/church/faith-02.jpg",
    excerpt:
      "Discover the devotion and spiritual significance of Our Lady of Good Health.",
  },
  {
    id: 3,
    slug: "feast-of-velankanni",
    category: "FAITH",
    title: "The Feast of Velankanni",
    date: "September 8, 2026",
    image: "/images/church/faith-03.jpg",
    excerpt:
      "A special reflection on prayer, devotion and the annual celebration at Velankanni.",
  },
  {
    id: 4,
    slug: "power-of-prayer",
    category: "PRAYER",
    title: "The Power of Prayer",
    date: "September 2, 2026",
    image: "/images/church/faith-04.jpg",
    excerpt:
      "Prayer brings us closer to God and gives strength during every moment of life.",
  },
  {
    id: 5,
    slug: "walking-in-faith",
    category: "FAITH",
    title: "Walking in Faith",
    date: "August 25, 2026",
    image: "/images/church/faith-05.jpg",
    excerpt:
      "A simple reflection on trusting God and walking forward with faith.",
  },
  {
    id: 6,
    slug: "hope-in-times-of-difficulty",
    category: "HOPE",
    title: "Hope in Times of Difficulty",
    date: "August 18, 2026",
    image: "/images/church/faith-06.jpg",
    excerpt:
      "Finding hope, peace and courage through prayer during difficult moments.",
  },
  {
    id: 7,
    slug: "life-of-a-saint",
    category: "SAINTS",
    title: "The Life of a Saint",
    date: "August 10, 2026",
    image: "/images/church/faith-07.jpg",
    excerpt:
      "Learning from the lives of saints and their examples of faith and devotion.",
  },
  {
    id: 8,
    slug: "mary-mother-of-hope",
    category: "MARY",
    title: "Mary, Mother of Hope",
    date: "August 3, 2026",
    image: "/images/church/faith-08.jpg",
    excerpt:
      "A devotional reflection on Mary as a mother of hope and comfort.",
  },
];

export default function TamilBlogsPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}

      <section className={styles.hero}>
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>TAMIL BLOG</p>

          <h1>Stories of Faith</h1>

          <div className={styles.goldLine} />

          <p>
            Reflections, devotion, prayer and stories from
            Velankanni.
          </p>
        </div>
      </section>

      {/* INTRO */}

      <section className={styles.intro}>
        <div className={styles.container}>
          <div className={styles.introHeader}>
            <div>
              <p className={styles.sectionLabel}>
                LATEST STORIES
              </p>

              <h2>
                Faith &amp; <span>Devotion</span>
              </h2>
            </div>

            <p className={styles.introText}>
              Explore our Tamil blog articles covering faith,
              prayer, devotion, Mother Mary and spiritual
              reflections.
            </p>
          </div>

          {/* BLOG GRID */}

          <div className={styles.blogGrid}>
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className={styles.card}
              >
                <Link
                  href={`/tamil/tamil-blogs/${blog.slug}`}
                  className={styles.imageLink}
                >
                  <div className={styles.imageWrapper}>
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className={styles.cardImage}
                    />

                    <span className={styles.category}>
                      {blog.category}
                    </span>

                    <div className={styles.imageArrow}>
                      →
                    </div>
                  </div>
                </Link>

                <div className={styles.cardContent}>
                  <p className={styles.date}>
                    {blog.date}
                  </p>

                  <h3>
                    <Link
                      href={`/tamil/tamil-blogs/${blog.slug}`}
                    >
                      {blog.title}
                    </Link>
                  </h3>

                  <p className={styles.excerpt}>
                    {blog.excerpt}
                  </p>

                  <Link
                    href={`/tamil/tamil-blogs/${blog.slug}`}
                    className={styles.readMore}
                  >
                    READ MORE
                    <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}

      <section className={styles.quote}>
        <div className={styles.quoteOverlay} />

        <div className={styles.quoteContent}>
          <div className={styles.quoteMark}>“</div>

          <p>
            Let faith guide your heart, prayer strengthen your
            soul, and hope lead your journey.
          </p>

          <span>— VELANKANNI</span>
        </div>
      </section>

      {/* CTA */}

      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <p className={styles.sectionLabel}>
            OUR SPIRITUAL JOURNEY
          </p>

          <h2>
            Read. Reflect.
            <br />
            Pray.
          </h2>

          <p>
            Continue exploring stories of faith and devotion
            from Velankanni.
          </p>

          <Link
            href="/tamil"
            className={styles.ctaButton}
          >
            BACK TO TAMIL HOME
            <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}