import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import styles from "./ChurchConstruction.module.css";

const requirements = [
  {
    no: "01",
    title: "Plastering Materials",
    description:
      "Plastering materials for interior and exterior and wages",
    amount: "₹13,00,000",
  },
  {
    no: "02",
    title: "Priests' Accommodation",
    description:
      "Priests' accommodation plastering materials and wages",
    amount: "₹1,05,000",
  },
  {
    no: "03",
    title: "Vengai Wooden Doors & Windows",
    description:
      "Vengai wooden doors, 9 nos. and windows, 14 nos. and wages",
    amount: "₹17,50,000",
  },
  {
    no: "04",
    title: "Flooring & Marble Work",
    description:
      "Flooring marble tiles, pasting 12 feet high wall and wages",
    amount: "₹24,00,000",
  },
  {
    no: "05",
    title: "Electrical Fittings",
    description:
      "Electrical fittings and wages",
    amount: "₹6,00,000",
  },
  {
    no: "06",
    title: "Painting",
    description:
      "Painting materials and wages",
    amount: "₹12,00,000",
  },
  {
    no: "07",
    title: "Stained Glass Works",
    description:
      "Stained glass works",
    amount: "₹9,00,000",
  },
  {
    no: "08",
    title: "Main Altar",
    description:
      "Main altar finishing work with white marble",
    amount: "₹9,25,000",
  },
  {
    no: "09",
    title: "Side Altar",
    description:
      "Side altar with teakwood",
    amount: "₹5,20,000",
  },
  {
    no: "10",
    title: "Statues",
    description:
      "Statues",
    amount: "₹3,00,000",
  },
];

const gallery = [
  {
    src: "/images/church/church-construction-hero.png",
    title: "Church Construction",
  },
  {
    src: "/images/church/church-01.png",
    title: "Sacred Architecture",
  },
  {
    src: "/images/church/faith-01.png",
    title: "Faith & Community",
  },
  {
    src: "/images/church/faith-02.png",
    title: "A Place of Prayer",
  },
  {
    src: "/images/church/faith-03.png",
    title: "Heritage & Devotion",
  },
  {
    src: "/images/church/faith-04.png",
    title: "Building Together",
  },
];

export default function ChurchConstructionPage() {
  return (
    <main className={styles.page}>

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <Navbar />


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className={styles.hero}>

        <Image
          src="/images/church/church-construction-hero.png"
          alt="Church of Our Lady construction"
          fill
          priority
          className={styles.heroImage}
          sizes="100vw"
        />

        <div className={styles.heroOverlay} />

        <div className={styles.heroGlow} />

        <div className={styles.heroContent}>

          <div className={styles.eyebrow}>
            VELANKANNI • INDIA
          </div>

          <h1>
            Church
            <span>Construction</span>
          </h1>

          <p>
            Building a magnificent house of prayer through faith,
            generosity and the loving support of our benefactors.
          </p>

          <div className={styles.heroActions}>

            <a
              href="#appeal"
              className={styles.primaryButton}
            >
              Discover the Appeal
              <span>↓</span>
            </a>

            <a
              href="#donate"
              className={styles.secondaryButton}
            >
              Support the Church
              <span>→</span>
            </a>

          </div>

        </div>


        {/* SIDE IMAGE */}

        <div className={styles.heroSideImage}>

          <Image
            src="/images/church/church-construction-side-01.png"
            alt="Church construction work"
            fill
            className={styles.sideImage}
            sizes="320px"
          />

        </div>


        {/* HERO STATS */}

        <div className={styles.heroBottom}>

          <div>
            <strong>4,000</strong>
            <span>SQ. FT. CHURCH</span>
          </div>

          <div>
            <strong>₹1 CRORE</strong>
            <span>ESTIMATED REQUIREMENT</span>
          </div>

          <div>
            <strong>10</strong>
            <span>KEY REQUIREMENTS</span>
          </div>

        </div>

      </section>


      {/* =====================================================
          CONSTRUCTION APPEAL
      ===================================================== */}

      <section
        id="appeal"
        className={styles.appealSection}
      >

        <div className={styles.container}>

          <div className={styles.sectionHeading}>

            <span className={styles.sectionKicker}>
              CHURCH CONSTRUCTION APPEAL
            </span>

            <h2>
              Building a House of
              <em> Prayer &amp; Hope</em>
            </h2>

          </div>


          <div className={styles.appealGrid}>

            <div className={styles.appealText}>

              <p>
                The Church of Our Lady, the Victorious Queen of the
                Universe, is under construction for more than seven
                years now.
              </p>

              <p>
                We have been building this magnificent church with
                the help of our loving benefactors, with the intention
                of making reparation for the sins committed against
                the Sacred Heart of Jesus (in the Blessed Sacrament
                of the Altar) and for those committed against the
                Immaculate Heart of Mary, as requested by Herself
                at Fatima.
              </p>

              <p>
                Due to lack of sufficient funds, the building work
                of Our Blessed Mother&apos;s church has been delayed.
              </p>

              <p>
                This <strong>4,000 sq. feet church</strong> can be
                finished only with your loving support. The church
                needs the following materials for its completion.
              </p>


              <div className={styles.quote}>

                <span className={styles.quoteMark}>
                  “
                </span>

                <p>
                  To complete the request we the children of Mother
                  Mary to pray specifically and your generous
                  contribution.
                </p>

              </div>

            </div>


            {/* MARY IMAGE */}

            <div className={styles.appealImage}>

              <Image
                src="/images/church/mother-mary-construction.png"
                alt="Our Blessed Mother Mary"
                fill
                className={styles.maryImage}
                sizes="(max-width: 900px) 100vw, 50vw"
              />

              <div className={styles.imageCaption}>
                <span>
                  OUR BLESSED MOTHER
                </span>

                <strong>
                  Queen of the Universe
                </strong>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ONE CRORE HIGHLIGHT
      ===================================================== */}

      <section className={styles.highlightSection}>

        <div className={styles.container}>

          <div className={styles.highlightGrid}>

            <div className={styles.highlightContent}>

              <span className={styles.sectionKicker}>
                THE NEED
              </span>

              <h2>
                A Magnificent Church
                <br />
                <em>Awaiting Completion</em>
              </h2>

              <p>
                The total estimated requirement for completing
                the church is
                <strong> ₹1,00,00,000</strong>.
                Every contribution helps bring this sacred dream
                closer to completion.
              </p>

              <Link
                href="#donate"
                className={styles.goldButton}
              >
                Make a Contribution
                <span>→</span>
              </Link>

            </div>


            <div className={styles.amountCard}>

              <span>
                TOTAL REQUIREMENT
              </span>

              <strong>
                ₹1 CRORE
              </strong>

              <small>
                4,000 SQ. FEET CHURCH
              </small>

              <div className={styles.amountLine} />

              <p>
                Help us complete this magnificent
                church dedicated to Our Blessed Mother.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          REQUIREMENTS
      ===================================================== */}

      <section className={styles.requirementsSection}>

        <div className={styles.container}>

          <div className={styles.sectionHeading}>

            <span className={styles.sectionKicker}>
              COMPLETION REQUIREMENTS
            </span>

            <h2>
              Where Your
              <em> Support Goes</em>
            </h2>

            <p>
              The church requires the following materials and
              works for its completion.
            </p>

          </div>


          <div className={styles.requirementsTable}>

            <div className={styles.tableHeader}>

              <span>
                NO.
              </span>

              <span>
                REQUIREMENT
              </span>

              <span>
                ESTIMATED COST
              </span>

            </div>


            {requirements.map((item) => (
              <div
                className={styles.requirementRow}
                key={item.no}
              >

                <span className={styles.requirementNo}>
                  {item.no}
                </span>

                <div className={styles.requirementInfo}>

                  <strong>
                    {item.title}
                  </strong>

                  <p>
                    {item.description}
                  </p>

                </div>

                <strong className={styles.requirementAmount}>
                  {item.amount}
                </strong>

              </div>
            ))}


            <div className={styles.totalRow}>

              <span>
                TOTAL
              </span>

              <strong>
                ₹1,00,00,000
              </strong>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PRAYER BANNER
      ===================================================== */}

      <section className={styles.prayerBanner}>

        <div className={styles.container}>

          <div className={styles.prayerInner}>

            <div>

              <span>
                A CALL TO FAITH
              </span>

              <h2>
                Let us build this
                <em> House of Prayer</em>
                together.
              </h2>

            </div>

            <a
              href="#donate"
              className={styles.prayerButton}
            >
              Support the Mission
              <span>→</span>
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          DONATION
      ===================================================== */}

      <section
        id="donate"
        className={styles.donationSection}
      >

        <div className={styles.container}>

          <div className={styles.sectionHeading}>

            <span className={styles.sectionKicker}>
              SUPPORT THE CHURCH
            </span>

            <h2>
              Your Generosity
              <em> Builds a House of Prayer</em>
            </h2>

            <p>
              Your generous contribution can help us complete
              the church and continue this sacred mission.
            </p>

          </div>


          <div className={styles.donationGrid}>

            {/* QR CARD */}

            <div className={styles.qrCard}>

              <div className={styles.qrContent}>

                <span className={styles.qrKicker}>
                  SCAN &amp; DONATE
                </span>

                <h3>
                  Give with
                  <br />
                  <em>Love &amp; Faith</em>
                </h3>

                <p>
                  Scan the QR code to make your contribution
                  towards the church construction.
                </p>

              </div>


              <div className={styles.qrBox}>

                <Image
                  src="/images/church/iob-donation-qr.png"
                  alt="Donation QR Code"
                  width={230}
                  height={230}
                  className={styles.qrImage}
                />

              </div>

            </div>


            {/* BANK DETAILS */}

            <div className={styles.bankCard}>

              <span className={styles.qrKicker}>
                BANK TRANSFER
              </span>

              <h3>
                Donation
                <em> Details</em>
              </h3>


              <div className={styles.bankDetails}>

                <div>
                  <span>
                    ACCOUNT NAME
                  </span>

                  <strong>
                    Society of Apostles of Mary
                  </strong>
                </div>


                <div>
                  <span>
                    ACCOUNT NUMBER
                  </span>

                  <strong>
                    12180200000473
                  </strong>
                </div>


                <div>
                  <span>
                    IFSC CODE
                  </span>

                  <strong>
                    IOBA0001218
                  </strong>
                </div>


                <div>
                  <span>
                    BANK
                  </span>

                  <strong>
                    Indian Overseas Bank
                  </strong>
                </div>


                <div>
                  <span>
                    BRANCH
                  </span>

                  <strong>
                    Mappillaiurani Branch,
                    Thoothukudi
                  </strong>
                </div>


                <div>
                  <span>
                    G-PAY
                  </span>

                  <strong>
                    94876 09983
                  </strong>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT / ADDRESS
      ===================================================== */}

      <section className={styles.contactSection}>

        <div className={styles.container}>

          <div className={styles.contactGrid}>

            <div className={styles.contactIntro}>

              <span className={styles.sectionKicker}>
                SOCIETY OF APOSTLES OF MARY
              </span>

              <h2>
                For further
                <em> enquiries</em>
              </h2>

              <p>
                For more information regarding the church
                construction and contributions, please contact us.
              </p>

            </div>


            <div className={styles.contactDetails}>

              <div className={styles.contactItem}>

                <span>
                  ADDRESS
                </span>

                <p>
                  Society of Apostles of Mary
                  <br />
                  11/519 Sahayamathapattanam,
                  2nd Street,
                  <br />
                  Tuticorin-628 002
                </p>

              </div>


              <div className={styles.contactItem}>

                <span>
                  TELEPHONE
                </span>

                <a href="tel:+914612361989">
                  +91 461 236 1989
                </a>

              </div>


              <div className={styles.contactItem}>

                <span>
                  MOBILE
                </span>

                <a href="tel:+919487609983">
                  +91 94876 09983
                </a>

                <a href="tel:+919487527479">
                  +91 94875 27479
                </a>

              </div>


              <div className={styles.contactItem}>

                <span>
                  EMAIL
                </span>

                <a href="mailto:futurosomystica@gmail.com">
                  futurosomystica@gmail.com
                </a>

                <a href="mailto:julianveritas@gmail.com">
                  julianveritas@gmail.com
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ENGLISH CONSTRUCTION
      ===================================================== */}

      <section className={styles.englishSection}>

        <div className={styles.container}>

          <div className={styles.englishGrid}>

            <div className={styles.englishImage}>

              <Image
                src="/images/church/church-01.png"
                alt="Church construction"
                fill
                className={styles.storyImage}
                sizes="(max-width: 900px) 100vw, 50vw"
              />

            </div>


            <div className={styles.englishContent}>

              <span className={styles.sectionKicker}>
                ENGLISH
              </span>

              <h2>
                Church
                <em> Construction</em>
              </h2>

              <p>
                Read more about the construction of the Church
                of Our Lady, the Victorious Queen of the Universe,
                and the vision behind this sacred project.
              </p>

              <p>
                The church is being built with the support of
                loving benefactors who wish to contribute towards
                this place of prayer and devotion.
              </p>

              <Link
                href="/church-construction"
                className={styles.outlineButton}
              >
                Read Construction Details
                <span>→</span>
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          YOUTUBE
      ===================================================== */}

      <section className={styles.videoSection}>

        <div className={styles.container}>

          <div className={styles.sectionHeading}>

            <span className={styles.sectionKicker}>
              WATCH
            </span>

            <h2>
              The Journey of
              <em> Construction</em>
            </h2>

          </div>


          <div className={styles.videoCard}>

            <Image
              src="/images/church/church-construction-hero.png"
              alt="Church construction video"
              fill
              className={styles.videoImage}
              sizes="100vw"
            />

            <div className={styles.videoOverlay} />


            <a
              href={"https://youtu.be/zCDOajWtaqY?si=K0cs5lBDCiZhLNPT"}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.playButton}
              aria-label="Watch church construction on YouTube"
            >
              <span>
                ▶
              </span>
            </a>


            <div className={styles.videoText}>

              <span>
                YOUTUBE
              </span>

              <h3>
                Watch the Church
                <br />
                Construction Journey
              </h3>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          GALLERY
      ===================================================== */}

      <section className={styles.gallerySection}>

        <div className={styles.container}>

          <div className={styles.galleryHeading}>

            <div>

              <span className={styles.sectionKicker}>
                CONSTRUCTION GALLERY
              </span>

              <h2>
                A Sacred Work
                <em> in Progress</em>
              </h2>

            </div>

            <p>
              Every wall, arch and detail represents the faith
              and generosity of those who support this mission.
            </p>

          </div>


          <div className={styles.galleryGrid}>

            {gallery.map((item, index) => (
              <div
                className={`${styles.galleryItem} ${
                  index === 0
                    ? styles.galleryLarge
                    : ""
                }`}
                key={item.src}
              >

                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className={styles.galleryImage}
                  sizes={
                    index === 0
                      ? "(max-width: 900px) 100vw, 66vw"
                      : "(max-width: 900px) 50vw, 33vw"
                  }
                />

                <div className={styles.galleryOverlay} />

                <div className={styles.galleryCaption}>
                  {item.title}
                </div>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className={styles.finalCta}>

        <Image
          src="/images/church/intro-bg.png"
          alt="Velankanni Basilica"
          fill
          className={styles.finalCtaImage}
          sizes="100vw"
        />

        <div className={styles.finalCtaOverlay} />


        <div className={styles.finalCtaContent}>

          <div className={styles.finalMary}>

            <Image
              src="/images/church/mother-mary-construction.png"
              alt="Our Blessed Mother"
              fill
              className={styles.finalMaryImage}
              sizes="300px"
            />

          </div>


          <div className={styles.finalText}>

            <span>
              WITH FAITH • WITH LOVE • TOGETHER
            </span>

            <h2>
              Help Complete
              <br />
              <em>Our Blessed Mother&apos;s Church</em>
            </h2>

            <p>
              Your prayer and generous contribution can help
              bring this sacred house of prayer to completion.
            </p>

            <a
              href="#donate"
              className={styles.finalButton}
            >
              Support the Church
              <span>→</span>
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />

    </main>
  );
}