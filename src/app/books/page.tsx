"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import styles from "./Books.module.css";

const books = [
  {
    number: "01",
    title: "Read Me or Rue It",
    image: "/images/church/hero-01.png",
  },
  {
    number: "02",
    title:
      "A Brief History of St. Mary Magdalene de Pazzi, Carmelite and Mystic",
    image: "/images/church/church-01.png",
  },
  {
    number: "03",
    title: "The Penny Catechism",
    image: "/images/church/faith-01.png",
  },
];

export default function BooksPage() {
  return (
    <>
      {/* ================= NAVBAR ================= */}
      <Navbar />

      <main className={styles.page}>
        {/* ================= HERO ================= */}
        <section className={styles.hero}>
          <div className={styles.heroBackground} />
          <div className={styles.heroOverlay} />

          <div className={styles.maryWrap}>
            <div className={styles.maryImage} />
          </div>

          <div className={styles.heroContent}>
            <span className={styles.heroKicker}>
              MATHAVIN SUSAI ACHAGAM BOOK DEPOT
            </span>

            <h1>
              English
              <br />
              <em>Books</em>
            </h1>

            <p>
              Discover books of faith, devotion,
              <br />
              history and spiritual reflection.
            </p>

            <div className={styles.heroDivider}>
              <span />
              <i>✦</i>
              <span />
            </div>

            <small className={styles.heroBottomText}>
              READ • REFLECT • PRAY
            </small>
          </div>

          <div className={styles.heroQuote}>
            <span>“</span>
            <p>
              Let the word of Christ
              <br />
              dwell in you richly.
            </p>
            <small>Colossians 3:16</small>
          </div>

          <div className={styles.scroll}>
            <span>SCROLL TO EXPLORE</span>
            <div />
          </div>
        </section>

        {/* ================= INTRO ================= */}
        <section className={styles.intro}>
          <div className={styles.container}>
            <div className={styles.introNumber}>
              <strong>01</strong>
              <span />
              <small>OUR BOOK DEPOT</small>
            </div>

            <div className={styles.introContent}>
              <span className={styles.sectionKicker}>
                ENGLISH BOOK COLLECTION
              </span>

              <h2>
                Books that inspire
                <br />
                <em>faith and devotion.</em>
              </h2>

              <p>
                The following English books are available at Mathavin Susai
                Achagam Book Depot.
              </p>

              <p>If you are in need of any books, please contact us.</p>
            </div>
          </div>
        </section>

        {/* ================= BOOKS ================= */}
        <section className={styles.booksSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <div>
                <span className={styles.sectionKicker}>AVAILABLE NOW</span>

                <h2>
                  Our <em>Books</em>
                </h2>
              </div>

              <div className={styles.bookCount}>
                <strong>03</strong>
                <span>BOOKS</span>
              </div>
            </div>

            <div className={styles.booksGrid}>
              {books.map((book, index) => (
                <article
                  className={styles.bookCard}
                  key={book.number}
                  style={
                    {
                      "--delay": `${index * 0.12}s`,
                    } as React.CSSProperties
                  }
                >
                  <div className={styles.coverArea}>
                    <div className={styles.coverGlow} />

                    <div className={styles.bookCover}>
                      <img src={book.image} alt={book.title} />

                      <div className={styles.coverOverlay} />

                      <div className={styles.coverText}>
                        <small>VELANKANNI</small>

                        <strong>{book.title}</strong>

                        <span>FAITH • HISTORY • DEVOTION</span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.bookInfo}>
                    <span className={styles.bookNumber}>
                      BOOK {book.number}
                    </span>

                    <h3>{book.title}</h3>

                    <div className={styles.goldLine} />

                    <p>
                      Available from Mathavin Susai Achagam Book Depot.
                    </p>

                    <Link
                      href="/contact"
                      className={styles.enquireButton}
                    >
                      ENQUIRE ABOUT THIS BOOK
                      <span>→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CONTACT STRIP ================= */}
        <section className={styles.contactStrip}>
          <div className={styles.container}>
            <div className={styles.contactStripContent}>
              <div className={styles.contactIcon}>☎</div>

              <div>
                <span>BOOK ORDERS</span>

                <h3>Need any of these books?</h3>

                <p>
                  Please contact us for availability and purchase details.
                </p>
              </div>

              <Link href="/contact" className={styles.contactButton}>
                CONTACT US
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ================= BANK DETAILS ================= */}
        <section className={styles.bankSection}>
          <div className={styles.container}>
            <div className={styles.bankGrid}>
              <div className={styles.bankIntro}>
                <span className={styles.sectionKicker}>
                  BOOK ORDERS & SUPPORT
                </span>

                <h2>
                  Support our
                  <br />
                  <em>book ministry.</em>
                </h2>

                <p>
                  If you would like to purchase any of the available books,
                  please contact us.
                </p>

                <p>
                  Payments for book orders can be made using the bank details
                  provided.
                </p>
              </div>

              <div className={styles.bankCard}>
                <div className={styles.cardTop}>
                  <span>BANK DETAILS</span>
                  <i>✦</i>
                </div>

                <div className={styles.bankRow}>
                  <small>A/C NAME</small>
                  <strong>SOCIETY OF APOSTLES OF MARY</strong>
                </div>

                <div className={styles.bankRow}>
                  <small>ACCOUNT NUMBER</small>
                  <strong>31423199505</strong>
                </div>

                <div className={styles.bankRow}>
                  <small>IFS CODE</small>
                  <strong>SBIN0008145</strong>
                </div>

                <div className={styles.bankRow}>
                  <small>BANK</small>
                  <strong>STATE BANK OF INDIA</strong>
                </div>

                <div className={styles.bankRow}>
                  <small>BRANCH</small>
                  <strong>
                    Kanthasamypuram Branch, Tuticorin
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= ADDRESS ================= */}
        <section className={styles.addressSection}>
          <div className={styles.container}>
            <div className={styles.addressGrid}>
              <div className={styles.addressCard}>
                <span className={styles.cardKicker}>
                  VISIT / CONTACT
                </span>

                <h3>Our Address</h3>

                <div className={styles.cardLine} />

                <p>
                  Society of Apostles of Mary
                  <br />
                  11/519, 2nd Street,
                  <br />
                  Sagayamathapattinam,
                  <br />
                  Tuticorin, Tamilnadu,
                  <br />
                  India – 628002
                </p>
              </div>

              <div className={styles.addressCard}>
                <span className={styles.cardKicker}>
                  GET IN TOUCH
                </span>

                <h3>Contact Details</h3>

                <div className={styles.cardLine} />

                <div className={styles.contactDetails}>
                  <p>
                    <span>PHONE</span>
                    0461 2361989
                  </p>

                  <p>
                    <span>CELL</span>
                    94876 09983
                    <br />
                    94872 57479
                  </p>

                  <p>
                    <span>E-MAIL</span>
                    tutirosamystica@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SPONSORSHIP ================= */}
        <section className={styles.sponsorSection}>
          <div className={styles.sponsorBackground} />
          <div className={styles.sponsorOverlay} />

          <div className={styles.container}>
            <div className={styles.sponsorContent}>
              <span className={styles.sponsorKicker}>
                SUPPORT THE MISSION
              </span>

              <h2>
                More books.
                <br />
                <em>More hearts touched.</em>
              </h2>

              <div className={styles.sponsorDivider}>
                <span />
                <i>✦</i>
                <span />
              </div>

              <p>
                We are planning to print more English books in the coming
                days.
              </p>

              <p>
                If you would like to support us by sponsoring the printing of
                these books, please contact us.
              </p>

              <p>
                Your support will help us make more good English books
                available to readers.
              </p>

              <Link
                href="/contact"
                className={styles.sponsorButton}
              >
                CONTACT US FOR SPONSORSHIP
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ================= FINAL ================= */}
        <section className={styles.finalSection}>
          <div className={styles.container}>
            <div className={styles.finalContent}>
              <div>
                <span>MATHAVIN SUSAI ACHAGAM BOOK DEPOT</span>

                <h2>
                  Read.
                  <br />
                  <em>Reflect. Pray.</em>
                </h2>
              </div>

              <Link href="/contact" className={styles.finalButton}>
                GET IN TOUCH
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <Footer />
    </>
  );
}