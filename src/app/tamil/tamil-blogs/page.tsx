import Link from "next/link";
import styles from "./TamilBlogDetail.module.css";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const blogs = [
  {
    slug: "mother-marys-message",
    category: "MARY",
    title: "Mother Mary's Message",
    date: "September 16, 2026",
    image: "/images/church/faith-01.jpg",
    content:
      "Mother Mary continues to inspire devotees through her message of faith, hope, prayer and love.",
  },
  {
    slug: "our-lady-of-good-health",
    category: "MARY",
    title: "Our Lady of Good Health",
    date: "September 10, 2026",
    image: "/images/church/faith-02.jpg",
    content:
      "Our Lady of Good Health at Velankanni is a place of prayer, devotion and spiritual reflection for pilgrims.",
  },
  {
    slug: "feast-of-velankanni",
    category: "FAITH",
    title: "The Feast of Velankanni",
    date: "September 5, 2026",
    image: "/images/church/faith-03.jpg",
    content:
      "The annual feast brings together devotees and pilgrims in prayer and celebration at the Basilica.",
  },
];

export default async function TamilBlogDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <main className={styles.notFound}>
        <p className={styles.label}>TAMIL BLOG</p>

        <h1>Blog Not Found</h1>

        <p>
          The requested Tamil blog could not be found.
        </p>

        <Link href="/tamil/blogs" className={styles.backButton}>
          ← BACK TO TAMIL BLOGS
        </Link>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      {/* HERO */}

      <section className={styles.hero}>
        <img
          src={blog.image}
          alt={blog.title}
          className={styles.heroImage}
        />

        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <p className={styles.category}>{blog.category}</p>

          <h1>{blog.title}</h1>

          <div className={styles.line} />

          <p className={styles.date}>{blog.date}</p>
        </div>
      </section>

      {/* ARTICLE */}

      <section className={styles.articleSection}>
        <div className={styles.articleContainer}>
          <Link href="/tamil/blogs" className={styles.backLink}>
            ← BACK TO TAMIL BLOGS
          </Link>

          <article className={styles.article}>
            <p className={styles.articleCategory}>
              {blog.category}
            </p>

            <h2>{blog.title}</h2>

            <p className={styles.articleDate}>
              {blog.date}
            </p>

            <div className={styles.divider} />

            <p className={styles.content}>
              {blog.content}
            </p>

            <p className={styles.content}>
              This space can be used for the complete Tamil blog
              article. The full article content, images and other
              information can be added here when the blog is prepared.
            </p>
          </article>
        </div>
      </section>

      {/* CTA */}

      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <p className={styles.ctaLabel}>VELANKANNI</p>

          <h2>
            Stories of Faith,
            <br />
            Hope &amp; Devotion
          </h2>

          <Link href="/tamil/blogs" className={styles.ctaButton}>
            EXPLORE MORE BLOGS <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}