"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import styles from "./Magazine.module.css";

const magazines = [
  {
    number: "01",
    issue: "SEP – OCT",
    year: "2026",
    volume: "Vol. 12",
    issueNo: "Issue 5",
    image: "/images/church/hero-01.png",
    file: "/magazines/2026/Sept%20-%20Oct.pdf",
  },
  {
    number: "02",
    issue: "JUL – AUG",
    year: "2026",
    volume: "Vol. 12",
    issueNo: "Issue 4",
    image: "/images/church/church-01.png",
    file: "/magazines/2026/July%20-%20Aug.pdf",
  },
  {
    number: "03",
    issue: "MAY – JUNE",
    year: "2026",
    volume: "Vol. 12",
    issueNo: "Issue 3",
    image: "/images/church/faith-01.png",
    file: "/magazines/2026/May-June.pdf",
  },
  {
    number: "04",
    issue: "MAR – APR",
    year: "2026",
    volume: "Vol. 12",
    issueNo: "Issue 2",
    image: "/images/church/faith-02.png",
    file: "/magazines/2026/Mar-Apr.pdf",
  },
  {
    number: "05",
    issue: "JAN – FEB",
    year: "2026",
    volume: "Vol. 12",
    issueNo: "Issue 1",
    image: "/images/church/faith-03.png",
    file: "/magazines/2026/Jan-Feb.pdf",
  },
];

export default function MagazinesPage() {
  return (
    <>
      <Navbar />

      <main className={styles.page}>

        {/* =====================================================
            HERO
        ====================================================== */}
        <section className={styles.hero}>
          <img
            src="/images/church/hero-01.png"
            alt="Our Lady of Velankanni Basilica"
            className={styles.heroImage}
          />

          <div className={styles.heroOverlay}></div>

          <div className={styles.heroContent}>
            <div className={styles.heroLine}>
              <span></span>
              FAITH IN EVERY WORD
              <span></span>
            </div>

            <h1>
              Bi-Monthly
              <strong>English Magazine</strong>
            </h1>

            <p className={styles.heroTagline}>
              Read <span>|</span> Reflect <span>|</span> Grow{" "}
              <span>|</span> Share
            </p>

            <div className={styles.heroQuote}>
              <span>
                “Proclaim the Good News
                <br />
                to all Creation.”
              </span>

              <small>Mark 16:15</small>
            </div>
          </div>

          <div className={styles.heroSideText}>
            <span>Our Lady</span>
            <span>Guides</span>
            <span>Our Words,</span>
            <span>Our Lives.</span>

            <div className={styles.ornament}>✦</div>
          </div>
        </section>

        {/* =====================================================
            BREADCRUMB
        ====================================================== */}
        <div className={styles.breadcrumb}>
          <div className={styles.container}>
            <Link href="/">Home</Link>
            <span>›</span>
            <span>English Magazine</span>
          </div>
        </div>

        {/* =====================================================
            OFFICIAL CONTENT
        ====================================================== */}
        <section className={styles.introSection}>
          <div className={styles.container}>
            <div className={styles.introGrid}>

              <div className={styles.crossIcon}>
                ✝
              </div>

              <div className={styles.introContent}>
                <div className={styles.sectionKicker}>
                  MATHAVIN SUSAI ACHAGAM
                </div>

                <h2>Bi-Monthly English Magazine</h2>

                <p>
                  Our English magazine is published every two months.
                  If you would like to receive a copy, please provide
                  your email address and WhatsApp number.
                </p>

                <p>
                  We will be happy to share the magazine with you.
                </p>

                <div className={styles.introButtons}>
                  <Link
                    href="/contact"
                    className={styles.primaryButton}
                  >
                    <span>✉</span>
                    Request a Copy
                    <b>→</b>
                  </Link>

                  <Link
                    href="/about"
                    className={styles.secondaryButton}
                  >
                    Learn More
                    <b>→</b>
                  </Link>
                </div>
              </div>

              <div className={styles.introArt}>
                <img
                  src="/images/church/church-01.png"
                  alt="Velankanni Basilica"
                />

                <div className={styles.artQuote}>
                  <span>
                    “A Church
                    <br />
                    that Communicates,
                    <br />
                    Brings People Closer
                    <br />
                    to Christ.”
                  </span>

                  <div>✦</div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =====================================================
            MAGAZINE ARCHIVE
        ====================================================== */}
        <section className={styles.archiveSection}>
          <div className={styles.container}>

            <div className={styles.archiveHeader}>
              <div>
                <div className={styles.sectionKicker}>
                  MAGAZINE ARCHIVE
                </div>

                <h2>
                  2026 <span>Issues</span>
                </h2>
              </div>

              <div className={styles.archiveLine}></div>

              <p>
                Explore our English magazines, arranged from
                the latest issue to the earliest issue.
              </p>
            </div>

            <div className={styles.magazineGrid}>

              {magazines.map((magazine) => (
                <article
                  className={styles.magazineCard}
                  key={magazine.number}
                >

                  <div className={styles.magazineImageWrap}>
                    <img
                      src={magazine.image}
                      alt={`${magazine.issue} ${magazine.year} English Magazine`}
                      className={styles.magazineImage}
                    />

                    <div className={styles.magazineImageOverlay}>
                      <span>
                        OUR LADY OF VELANKANNI
                      </span>

                      <strong>
                        English Magazine
                      </strong>

                      <small>
                        Faith • Family • Service • Society
                      </small>
                    </div>
                  </div>

                  <div className={styles.cardContent}>

                    <h3>
                      {magazine.issue} {magazine.year}
                    </h3>

                    <div className={styles.issueMeta}>
                      {magazine.volume}
                      <span>|</span>
                      {magazine.issueNo}
                    </div>

                    <div className={styles.cardActions}>

                      <a
                        href={magazine.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.viewButton}
                      >
                        <span>◉</span>
                        View PDF
                      </a>

                      <a
                        href={magazine.file}
                        download
                        className={styles.downloadButton}
                      >
                        <span>↓</span>
                        Download PDF
                      </a>

                    </div>
                  </div>

                </article>
              ))}

            </div>
          </div>
        </section>

        {/* =====================================================
            REQUEST MAGAZINE STRIP
        ====================================================== */}
        <section className={styles.requestSection}>
          <div className={styles.container}>

            <div className={styles.requestInner}>

              <div className={styles.mailCircle}>
                ✉
              </div>

              <div className={styles.requestText}>
                <h3>
                  Want to receive our English Magazine?
                </h3>

                <p>
                  Share your email address and WhatsApp number.
                  We will be happy to share the magazine with you.
                </p>
              </div>

              <Link
                href="/contact"
                className={styles.requestButton}
              >
                Contact Us
                <span>→</span>
              </Link>

            </div>

          </div>
        </section>

        {/* =====================================================
            WORD OF GOD
        ====================================================== */}
        <section className={styles.wordSection}>

          <img
            src="/images/church/intro-bg.png"
            alt=""
            className={styles.wordBackground}
          />

          <div className={styles.wordOverlay}></div>

          <div className={styles.wordContent}>

            <div className={styles.wordDecoration}>
              ✦
            </div>

            <h2>
              May His Word Inspire You Always
            </h2>

            <div className={styles.wordLine}></div>

            <p>
              “Your word is a lamp to my feet and a light to my path.”
            </p>

            <span>
              Psalm 119:105
            </span>

          </div>

        </section>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}
        <section className={styles.finalSection}>

          <div className={styles.container}>

            <div className={styles.finalInner}>

              <div>
                <div className={styles.sectionKicker}>
                  STAY CONNECTED
                </div>

                <h2>
                  Read. Reflect. Grow.
                </h2>

                <p>
                  Discover stories of faith, devotion,
                  reflection and spiritual life through our
                  English magazine.
                </p>
              </div>

              <Link
                href="/contact"
                className={styles.finalButton}
              >
                Request Magazine
                <span>→</span>
              </Link>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}