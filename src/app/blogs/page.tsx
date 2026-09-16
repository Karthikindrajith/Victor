"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import styles from "./Blog.module.css";

type Blog = {
  id: number;
  category: "God" | "Jesus" | "Mary" | "Saints";
  title: string;
  description: string;
  date: string;
  year: number;
  image: string;
  featured?: boolean;
};

const blogs: Blog[] = [
  {
    id: 1,
    category: "God",
    title: "Finding God in the Midst of Life’s Storms",
    description:
      "Even in the darkest moments, God’s presence gives us strength to rise again.",
    date: "Sep 10, 2026",
    year: 2026,
    image: "/images/church/faith-01.png",
  },
  {
    id: 2,
    category: "Jesus",
    title: "The Love of Jesus That Never Fails",
    description:
      "A reflection on the boundless love of Christ and how it transforms our lives.",
    date: "Sep 05, 2026",
    year: 2026,
    image: "/images/church/faith-02.png",
  },
  {
    id: 3,
    category: "Mary",
    title: "The Rosary: A Path to Peace",
    description:
      "How the Holy Rosary brings us closer to Mary and nearer to Jesus.",
    date: "Aug 28, 2026",
    year: 2026,
    image: "/images/church/mother-mary.png",
  },
  {
    id: 4,
    category: "Saints",
    title: "Saints Who Inspire Us",
    description:
      "Discover the lives of holy men and women who continue to inspire our faith.",
    date: "Aug 20, 2026",
    year: 2026,
    image: "/images/church/faith-04.png",
  },
  {
    id: 5,
    category: "God",
    title: "Living the Word Each Day",
    description:
      "Finding strength, hope and direction through the Word of God.",
    date: "Aug 15, 2026",
    year: 2026,
    image: "/images/church/faith-05.png",
  },
  {
    id: 6,
    category: "Jesus",
    title: "The Power of Forgiveness",
    description:
      "Learning from Jesus how forgiveness can heal hearts and restore peace.",
    date: "Aug 10, 2026",
    year: 2026,
    image: "/images/church/faith-06.png",
  },
  {
    id: 7,
    category: "Mary",
    title: "Walking with Our Mother",
    description:
      "Reflecting on Mary’s gentle presence and her invitation to follow Christ.",
    date: "Aug 05, 2026",
    year: 2026,
    image: "/images/church/faith-07.png",
  },
  {
    id: 8,
    category: "Saints",
    title: "Faith That Shines Through Service",
    description:
      "Lessons from the saints about serving others with humility and love.",
    date: "Jul 28, 2026",
    year: 2026,
    image: "/images/church/faith-08.png",
  },
  {
    id: 9,
    category: "God",
    title: "A Pilgrim’s Journey to Velankanni",
    description:
      "A journey of prayer, thanksgiving and renewed hope at Velankanni.",
    date: "Jul 20, 2026",
    year: 2026,
    image: "/images/church/church-01.png",
  },
  {
    id: 10,
    category: "Jesus",
    title: "When Faith Becomes Our Strength",
    description:
      "How trusting in Christ helps us face every season of life.",
    date: "Jul 12, 2026",
    year: 2026,
    image: "/images/church/mass-prayer.png",
  },
  {
    id: 11,
    category: "Mary",
    title: "Mother of Good Health, Pray for Us",
    description:
      "A reflection on the loving intercession of Our Lady of Good Health.",
    date: "Jul 05, 2026",
    year: 2026,
    image: "/images/church/mother-mary.png",
  },
  {
    id: 12,
    category: "Saints",
    title: "Lives That Became a Prayer",
    description:
      "Remembering the witness of saints whose lives reflected the love of God.",
    date: "Jun 28, 2026",
    year: 2026,
    image: "/images/church/faith-03.png",
  },
];

const categories = ["All", "God", "Jesus", "Mary", "Saints"];

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeYear, setActiveYear] = useState(2026);
  const [search, setSearch] = useState("");

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const categoryMatch =
        activeCategory === "All" ||
        blog.category === activeCategory;

      const yearMatch = blog.year === activeYear;

      const searchMatch =
        blog.title.toLowerCase().includes(search.toLowerCase()) ||
        blog.description.toLowerCase().includes(search.toLowerCase());

      return categoryMatch && yearMatch && searchMatch;
    });
  }, [activeCategory, activeYear, search]);

  const featuredBlog = blogs.find((blog) => blog.id === 3);

  return (
    <>
      <Navbar />

      <main className={styles.page}>

        {/* HERO */}
        <section className={styles.hero}>
          <img
            src="/images/church/hero-02.png"
            alt="Velankanni Basilica"
            className={styles.heroImage}
          />

          <div className={styles.heroOverlay}></div>

          <div className={styles.heroContent}>
            <div className={styles.heroKicker}>
              <span></span>
              OUR BLOG
              <span></span>
            </div>

            <h1>
              Stories of <strong>Faith</strong>
            </h1>

            <p className={styles.heroSubtitle}>
              Reflections • Inspiration • A Closer Walk with God
            </p>

            <p className={styles.heroText}>
              Read articles, reflections, and stories that
              nourish your faith and bring you closer to
              Our Lady of Good Health.
            </p>
          </div>

          <div className={styles.heroQuote}>
            <p>
              “Do whatever
              <br />
              He tells you.”
            </p>

            <span>John 2:5</span>

            <div>✦</div>
          </div>
        </section>

        {/* BREADCRUMB */}
        <div className={styles.breadcrumb}>
          <div className={styles.container}>
            <Link href="/">Home</Link>
            <span>›</span>
            <span>Blogs</span>
          </div>
        </div>

        {/* FEATURED + SIDEBAR */}
        <section className={styles.featureSection}>
          <div className={styles.container}>
            <div className={styles.topGrid}>

              <article className={styles.featuredCard}>

                <div className={styles.featuredImageWrapper}>
                  <img
                    src={featuredBlog?.image}
                    alt={featuredBlog?.title}
                    className={styles.featuredImage}
                  />

                  <span className={styles.featuredTag}>
                    {featuredBlog?.category}
                  </span>
                </div>

                <div className={styles.featuredContent}>

                  <div className={styles.sectionKicker}>
                    FEATURED ARTICLE
                  </div>

                  <h2>
                    Mary, Our Mother: A Beacon
                    <br />
                    of Hope in Everyday Life
                  </h2>

                  <p>
                    Discover how Our Lady of Good Health
                    continues to guide pilgrims and families
                    through faith, compassion, prayer and love.
                  </p>

                  <Link
                    href={`/blogs/${featuredBlog?.id}`}
                    className={styles.readButton}
                  >
                    Read More
                    <span>→</span>
                  </Link>

                </div>

                <div className={styles.featuredSideText}>
                  <span>Faith</span>
                  <span>Comforts</span>
                  <span>Heals</span>
                  <span>Leads</span>

                  <div>✦</div>
                </div>

              </article>

              {/* SIDEBAR */}
              <aside className={styles.sidebar}>

                <div className={styles.searchBox}>
                  <input
                    type="text"
                    placeholder="Search blogs..."
                    value={search}
                    onChange={(e) =>
                      setSearch(e.target.value)
                    }
                  />

                  <button type="button">
                    ⌕
                  </button>
                </div>

                <div className={styles.sideCard}>

                  <div className={styles.sideTitle}>
                    <h3>Categories</h3>
                    <span>✦</span>
                  </div>

                  <div className={styles.categoryList}>

                    {categories.slice(1).map((category) => (
                      <button
                        key={category}
                        type="button"
                        className={
                          activeCategory === category
                            ? styles.activeCategory
                            : ""
                        }
                        onClick={() =>
                          setActiveCategory(category)
                        }
                      >
                        <span>
                          {category === "God" && "♟"}
                          {category === "Jesus" && "✦"}
                          {category === "Mary" && "♕"}
                          {category === "Saints" && "♙"}
                        </span>

                        <strong>{category}</strong>

                        <small>
                          {
                            blogs.filter(
                              (blog) =>
                                blog.category === category
                            ).length
                          }
                        </small>
                      </button>
                    ))}

                  </div>

                  <button
                    type="button"
                    className={
                      activeCategory === "All"
                        ? styles.allCategoryActive
                        : styles.allCategory
                    }
                    onClick={() =>
                      setActiveCategory("All")
                    }
                  >
                    View All Categories
                  </button>

                </div>

                <div className={styles.sideCard}>

                  <div className={styles.sideTitle}>
                    <h3>Years</h3>
                    <span>✦</span>
                  </div>

                  <div className={styles.yearList}>

                    <button
                      type="button"
                      className={
                        activeYear === 2027
                          ? styles.selectedYear
                          : ""
                      }
                      onClick={() => setActiveYear(2027)}
                    >
                      <span>▣</span>
                      2027
                    </button>

                    <button
                      type="button"
                      className={
                        activeYear === 2026
                          ? styles.selectedYear
                          : ""
                      }
                      onClick={() => setActiveYear(2026)}
                    >
                      <span>▣</span>
                      2026
                    </button>

                  </div>

                </div>

                <div className={styles.sideCard}>

                  <div className={styles.sideTitle}>
                    <h3>Recent Posts</h3>
                    <span>✦</span>
                  </div>

                  <div className={styles.recentList}>

                    {blogs.slice(0, 4).map((blog) => (
                      <Link
                        href={`/blogs/${blog.id}`}
                        key={blog.id}
                        className={styles.recentItem}
                      >
                        <img
                          src={blog.image}
                          alt={blog.title}
                        />

                        <div>
                          <strong>
                            {blog.title}
                          </strong>

                          <span>
                            {blog.date}
                          </span>
                        </div>
                      </Link>
                    ))}

                  </div>

                </div>

              </aside>

            </div>
          </div>
        </section>

        {/* LATEST BLOGS */}
        <section className={styles.latestSection}>

          <div className={styles.container}>

            <div className={styles.sectionHeader}>

              <div>
                <div className={styles.sectionKicker}>
                  {activeYear}
                </div>

                <h2>
                  Latest Blog Posts
                  <span>✦</span>
                </h2>
              </div>

              <button
                type="button"
                className={styles.viewAll}
                onClick={() => {
                  setActiveCategory("All");
                  setSearch("");
                }}
              >
                View All
                <span>→</span>
              </button>

            </div>

            <div className={styles.blogGrid}>

              {filteredBlogs.slice(0, 3).map((blog) => (
                <article
                  className={styles.blogCard}
                  key={blog.id}
                >

                  <div className={styles.blogImageWrapper}>

                    <img
                      src={blog.image}
                      alt={blog.title}
                      className={styles.blogImage}
                    />

                    <span className={styles.blogCategory}>
                      {blog.category}
                    </span>

                  </div>

                  <div className={styles.blogContent}>

                    <h3>{blog.title}</h3>

                    <p>{blog.description}</p>

                    <div className={styles.blogMeta}>
                      <span>{blog.date}</span>

                      <Link href={`/blogs/${blog.id}`}>
                        Read More →
                      </Link>
                    </div>

                  </div>

                </article>
              ))}

            </div>

          </div>

        </section>

        {/* FROM 2026 */}
        <section className={styles.archiveSection}>

          <div className={styles.container}>

            <div className={styles.sectionHeader}>

              <div>
                <div className={styles.sectionKicker}>
                  ARCHIVE
                </div>

                <h2>
                  From {activeYear}
                  <span>✦</span>
                </h2>
              </div>

              <button
                type="button"
                className={styles.viewAll}
                onClick={() => {
                  setActiveCategory("All");
                  setSearch("");
                }}
              >
                View All
                <span>→</span>
              </button>

            </div>

            <div className={styles.archiveGrid}>

              {filteredBlogs.slice(3, 7).map((blog) => (
                <article
                  className={styles.archiveCard}
                  key={blog.id}
                >

                  <div className={styles.archiveImageWrapper}>
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className={styles.archiveImage}
                    />

                    <span>
                      {blog.category}
                    </span>
                  </div>

                  <div className={styles.archiveContent}>

                    <h3>{blog.title}</h3>

                    <div className={styles.archiveMeta}>
                      <span>{blog.date}</span>

                      <Link href={`/blogs/${blog.id}`}>
                        →
                      </Link>
                    </div>

                  </div>

                </article>
              ))}

            </div>

            <div className={styles.pagination}>

              <button className={styles.paginationActive}>
                1
              </button>

              <button>2</button>
              <button>3</button>
              <span>...</span>
              <button>8</button>

              <button>→</button>

            </div>

          </div>

        </section>

        {/* QUOTE */}
        <section className={styles.quoteSection}>

          <div className={styles.quoteCard}>

            <div className={styles.quoteIcon}>
              ✦
            </div>

            <p>
              “Faith does not make things easy,
              <br />
              but it makes them possible.”
            </p>

            <span>
              A Journey of Faith
            </span>

            <div className={styles.quoteLine}></div>

          </div>

        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>

          <img
            src="/images/church/intro-bg.png"
            alt=""
            className={styles.ctaImage}
          />

          <div className={styles.ctaOverlay}></div>

          <div className={styles.ctaContent}>

            <div className={styles.ctaKicker}>
              SHARE YOUR FAITH
            </div>

            <h2>
              Let Your Faith Inspire Others
            </h2>

            <p>
              Share your thoughts, experiences,
              prayers and reflections with our
              faith community.
            </p>

            <Link
              href="/contact"
              className={styles.ctaButton}
            >
              Write a Blog
              <span>→</span>
            </Link>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}