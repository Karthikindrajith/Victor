"use client";

import Link from "next/link";
import styles from "./LatestBlogs.module.css";

type Blog = {
  id: number;
  category: string;
  date: string;
  title: string;
  description: string;
  image: string;
};

const blogs: Blog[] = [
  {
    id: 1,
    category: "CHURCH NEWS",
    date: "12 SEP 2026",
    title: "Feast Preparations Begin at Tuticon",
    description:
      "The parish community comes together in prayer, service and unity as we prepare for the annual feast celebrations.",
    image: "/images/church/hero-01.png",
  },
  {
    id: 2,
    category: "SPIRITUALITY",
    date: "08 SEP 2026",
    title: "Finding Peace in Daily Prayer",
    description:
      "A spiritual reflection on how prayer brings us closer to God and helps us walk with faith through every season of life.",
    image: "/images/church/faith-04.png",
  },
  {
    id: 3,
    category: "COMMUNITY",
    date: "05 SEP 2026",
    title: "Youth in Service at Tuticon",
    description:
      "Our parish youth come together in service, spreading faith, hope and love through meaningful acts of charity.",
    image: "/images/church/faith-06.png",
  },
];

export default function LatestBlogs() {
  return (
    <section className={styles.section}>
      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div className={styles.backgroundImage}></div>
      <div className={styles.backgroundOverlay}></div>

      <div className={styles.glow}></div>

      {/* =========================================
          LEFT DECORATION
      ========================================= */}

      <div className={styles.leftDecoration}>
        <span>NEWS</span>
        <span>FAITH</span>
        <span>COMMUNITY</span>
        <span>PEOPLE</span>

        <div className={styles.decorationLine}></div>
      </div>

      {/* =========================================
          RIGHT DECORATION
      ========================================= */}

      <div className={styles.rightDecoration}>
        <span>A FAITH</span>
        <span>FILLED</span>
        <span>COMMUNITY</span>
        <span>A BRIGHTER</span>
        <span>TOMORROW</span>

        <div className={styles.decorationLine}></div>
      </div>

      {/* =========================================
          MAIN CONTAINER
      ========================================= */}

      <div className={styles.container}>
        {/* =========================================
            HEADER
        ========================================= */}

        <header className={styles.header}>
          <div className={styles.eyebrow}>
            <span></span>

            <p>FROM OUR PARISH</p>

            <span></span>
          </div>

          <h2>
            Latest <em>Blogs</em>
          </h2>

          <p className={styles.subtitle}>
            Stay informed with the latest church news, spiritual articles
            <br />
            and updates from Society of Apostles of Mary.
          </p>
        </header>

        {/* =========================================
            BLOG GRID
        ========================================= */}

        <div className={styles.blogGrid}>
          {blogs.map((blog, index) => {
            const dateParts = blog.date.split(" ");

            return (
              <article
                className={styles.blogCard}
                key={blog.id}
                style={
                  {
                    "--card-index": index,
                  } as React.CSSProperties
                }
              >
                {/* IMAGE */}

                <div className={styles.imageWrapper}>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className={styles.blogImage}
                  />

                  <div className={styles.imageOverlay}></div>

                  {/* CATEGORY */}

                  <div className={styles.category}>
                    {blog.category}
                  </div>

                  {/* DATE */}

                  <div className={styles.dateBox}>
                    <span>{dateParts[1]}</span>

                    <strong>{dateParts[0]}</strong>

                    <small>{dateParts[2]}</small>
                  </div>

                  {/* IMAGE ARROW */}

                  <Link
                    href={`/blogs/${blog.id}`}
                    className={styles.imageArrow}
                    aria-label={`Read ${blog.title}`}
                  >
                    <span>↗</span>
                  </Link>
                </div>

                {/* CARD CONTENT */}

                <div className={styles.cardContent}>
                  <div className={styles.cardTopLine}></div>

                  <h3>{blog.title}</h3>

                  <p>{blog.description}</p>

                  <Link
                    href={`/blogs/${blog.id}`}
                    className={styles.readArticle}
                  >
                    <span>READ ARTICLE</span>

                    <div className={styles.readLine}></div>

                    <b>→</b>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* =========================================
            VIEW ALL
        ========================================= */}

        <div className={styles.bottomArea}>
          <Link href="/blogs" className={styles.viewAll}>
            <span>VIEW ALL BLOGS</span>
            <b>→</b>
          </Link>
        </div>

        {/* =========================================
            BOTTOM LEFT
        ========================================= */}

        <div className={styles.bottomLeft}>
          <strong>SOCIETY OF APOSTLES OF MARY</strong>

          <span>
            OUR FAITH&nbsp;&nbsp; | &nbsp;&nbsp;OUR PEOPLE&nbsp;&nbsp; |
            &nbsp;&nbsp;OUR HOME
          </span>
        </div>

        {/* =========================================
            BOTTOM RIGHT
        ========================================= */}

        <div className={styles.bottomRight}>
          <span>01</span>

          <i></i>

          <span>03</span>

          <button type="button" aria-label="Previous blogs">
            ←
          </button>

          <button type="button" aria-label="Next blogs">
            →
          </button>
        </div>
      </div>

      {/* =========================================
          BOTTOM DARK GRADIENT
      ========================================= */}

      <div className={styles.bottomSilhouette}></div>
    </section>
  );
}