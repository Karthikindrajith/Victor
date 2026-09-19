"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div className={styles.mainFooter}>
        <div className={styles.backgroundChurch}></div>
        <div className={styles.backgroundOverlay}></div>

        <div className={styles.container}>

          {/* =================================================
              BRAND
          ================================================= */}

          <div className={styles.brandColumn}>

            <Link href="/" className={styles.logoLink}>
              <Image
                src="/images/logo/logo.png"
                alt="Apostles of Mary"
                width={150}
                height={150}
                className={styles.logo}
              />
            </Link>


          

            <div className={styles.location}>
             Tuticon
            </div>

            <div className={styles.brandLine}></div>

            <p className={styles.brandDescription}>
              A sacred place of faith, healing and hope.
              Welcoming all to experience God&apos;s love
              through prayer, service and community.
            </p>

            <div className={styles.brandValues}>
              <span>FAITH</span>
              <i></i>
              <span>SERVICE</span>
              <i></i>
              <span>COMMUNITY</span>
            </div>

            {/* SOCIAL MEDIA */}

            <div className={styles.socialArea}>
              <h3>FOLLOW US</h3>

              <div className={styles.socialLinks}>

                {/* FACEBOOK */}

                <a
                  href="#"
                  aria-label="Facebook"
                  className={styles.socialLink}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 8H16V5H14C11.79 5 10 6.79 10 9V11H7V14H10V21H13V14H16L17 11H13V9C13 8.45 13.45 8 14 8Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>

                {/* INSTAGRAM */}

                <a
                  href="#"
                  aria-label="Instagram"
                  className={styles.socialLink}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="5"
                      stroke="currentColor"
                      strokeWidth="2"
                    />

                    <circle
                      cx="12"
                      cy="12"
                      r="4"
                      stroke="currentColor"
                      strokeWidth="2"
                    />

                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1"
                      fill="currentColor"
                    />
                  </svg>
                </a>

                {/* YOUTUBE */}

                <a
                  href="#"
                  aria-label="YouTube"
                  className={styles.socialLink}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.58 7.19C21.35 6.33 20.67 5.65 19.81 5.42C18.25 5 12 5 12 5C12 5 5.75 5 4.19 5.42C3.33 5.65 2.65 6.33 2.42 7.19C2 8.75 2 12 2 12C2 12 2 15.25 2.42 16.81C2.65 17.67 3.33 18.35 4.19 18.58C5.75 19 12 19 12 19C12 19 18.25 19 19.81 18.58C20.67 18.35 21.35 17.67 21.58 16.81C22 15.25 22 12 22 12C22 12 22 8.75 21.58 7.19Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />

                    <path
                      d="M10 9L15 12L10 15V9Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>

                {/* WHATSAPP */}

                <a
                  href="#"
                  aria-label="WhatsApp"
                  className={styles.socialLink}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 4C18.9 2.9 17.4 2.3 15.8 2.3C10.5 2.3 6.2 6.6 6.2 11.9C6.2 13.3 6.6 14.7 7.2 15.9L6 20.2L10.4 19C11.6 19.6 12.9 19.9 14.2 19.9C19.5 19.9 23.8 15.6 23.8 10.3C23.8 7.9 22.5 5.8 20 4Z"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />

                    <path
                      d="M11 8.5C11.2 8.2 11.5 8.2 11.7 8.5L12.7 10C12.9 10.3 12.8 10.6 12.5 10.8L11.9 11.2C12.5 12.3 13.4 13.2 14.5 13.8L14.9 13.2C15.1 12.9 15.4 12.8 15.7 13L17.2 14C17.5 14.2 17.5 14.5 17.2 14.8L16.6 15.5C16.2 15.9 15.6 16.1 15 15.9C12.6 15.2 10.7 13.3 10 10.9C9.8 10.3 10 9.7 10.4 9.3L11 8.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>

              </div>
            </div>
          </div>


          {/* =================================================
              QUICK LINKS
          ================================================= */}

          <div className={styles.linkColumn}>

            <div className={styles.columnHeading}>
              <h3>QUICK LINKS</h3>
              <span></span>
            </div>

            <nav className={styles.footerNav}>

              <Link href="/">
                Home
              </Link>

              <Link href="/about">
                About Us
              </Link>

              <Link href="/books">
                Books
              </Link>

              <Link href="/blogs">
                Blogs
              </Link>

              <Link href="/tamil">
                Tamil
              </Link>

              <Link href="/contact">
                Contact
              </Link>

              {/* EXTRA LINK */}

              <Link href="/events">
                Events
              </Link>

            </nav>
          </div>


          {/* =================================================
              TAMIL
          ================================================= */}

          <div className={styles.linkColumn}>

            <div className={styles.columnHeading}>
              <h3>TAMIL</h3>
              <span></span>
            </div>

            <nav
              className={`${styles.footerNav} ${styles.tamilNav}`}
            >

              <Link href="/tamil">
                முகப்பு
              </Link>

              <Link href="/tamil/about-us">
                எங்களை பற்றி
              </Link>

              <Link href="/tamil/duties">
                பணிகள்
              </Link>

              <Link href="/tamil/church-construction">
                திருப்பணி
              </Link>

              <Link href="/tamil/magazines">
                இதழ்கள்
              </Link>

              <Link href="/tamil/books">
                தமிழ் புத்தகங்கள்
              </Link>

              <Link href="/tamil/vocations">
                அழைப்புப்பணி
              </Link>

              <Link href="/tamil/blogs">
                தமிழ் வலைப்பதிவு
              </Link>

            </nav>
          </div>


          {/* =================================================
              VISIT US
          ================================================= */}

          <div className={styles.visitColumn}>

            <div className={styles.columnHeading}>
              <h3>VISIT US</h3>
              <span></span>
            </div>


            {/* LOCATION */}

            <div className={styles.contactItem}>

              <div className={styles.contactIcon}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21C15.5 16.8 18 13.4 18 9.8C18 6.6 15.3 4 12 4C8.7 4 6 6.6 6 9.8C6 13.4 8.5 16.8 12 21Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />

                  <circle
                    cx="12"
                    cy="9.5"
                    r="2.3"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                </svg>
              </div>

              <p>
                Society of Apostles of Mary
                <br />
                Tuticon
                <br />
                Tamil Nadu – 611 111,
                <br />
                India
              </p>

            </div>


            {/* PHONE */}

            <div className={styles.contactItem}>

              <div className={styles.contactIcon}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.6 3.8L9.2 3.2C9.7 3.1 10.2 3.4 10.4 3.9L11.7 7C11.9 7.5 11.7 8 11.3 8.3L9.7 9.5C10.6 11.5 12.2 13.2 14.2 14.2L15.5 12.6C15.8 12.2 16.3 12.1 16.8 12.3L19.9 13.6C20.4 13.8 20.7 14.3 20.6 14.8L20 17.4C19.8 18.3 19 19 18.1 19C10.3 19 5 13.7 5 5.9C5 5 5.7 4.2 6.6 3.8Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>

              <a href="tel:+914365264296">
                04612361989
              </a>
               <a href="tel:+914365264296">
                9487609983 , 9487257479
              </a>

            </div>


            {/* EMAIL */}

            <div className={styles.contactItem}>

              <div className={styles.contactIcon}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />

                  <path
                    d="M4 7L12 13L20 7"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                </svg>
              </div>

              <a href="mailto:tutirosamystica@gmail.com">
                tutirosamystica@gmail.com
              </a>

            </div>


            {/* TIMING */}

            <div className={styles.contactItem}>

              <div className={styles.contactIcon}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="8.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />

                  <path
                    d="M12 7V12L15.5 14"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <p>
                Mon – Sun
                <br />
                6:00 AM – 9:00 PM
              </p>

            </div>


            {/* DIRECTIONS */}

            <Link
              href="/contact"
              className={styles.directionButton}
            >
              <span>GET DIRECTIONS</span>
              <b>→</b>
            </Link>

          </div>


          {/* =================================================
              PLAN YOUR VISIT
          ================================================= */}

          <div className={styles.visitCta}>

            <div className={styles.crossDecoration}>
              ✝
            </div>

            <div className={styles.ctaSmall}>
              PLAN YOUR
            </div>

            <h3>
              VISIT
            </h3>

            <div className={styles.ctaLine}></div>

            <p>
              Come with faith.
              <br />
              Leave with hope.
            </p>

            <Link
              href="/pilgrimage"
              className={styles.learnButton}
            >
              <span>LEARN MORE</span>
              <b>→</b>
            </Link>

            <div className={styles.ctaWords}>
              <span>PILGRIMAGE</span>
              <span>PRAYER</span>
              <span>PEACE</span>
              <span>FOR ALL</span>
            </div>

          </div>

        </div>
      </div>


      {/* =====================================================
          PRAYER CTA STRIP
      ===================================================== */}

      <section className={styles.prayerStrip}>

        <div className={styles.prayerImage}></div>

        <div className={styles.prayerContainer}>

          <div className={styles.prayerText}>

            <div className={styles.prayerEyebrow}>
              <span></span>
              <p>JOIN US IN PRAYER</p>
            </div>

            <h3>
              Experience Peace.
              <br className={styles.mobileBreak} />
              {" "}
              Experience of Apostles of Mary.
            </h3>

          </div>


          <Link
            href="/pilgrimage"
            className={styles.planButton}
          >
            <span>PLAN YOUR VISIT</span>
            <b>→</b>
          </Link>


          <div className={styles.prayerActions}>

            <Link href="/basilica">
              <span className={styles.actionIcon}>♰</span>
              <strong>ATTEND</strong>
              <small>MASS</small>
            </Link>

            <Link href="/contact">
              <span className={styles.actionIcon}>♧</span>
              <strong>SERVE</strong>
              <small>TOGETHER</small>
            </Link>

            <Link href="/contact">
              <span className={styles.actionIcon}>♡</span>
              <strong>MAKE A</strong>
              <small>DIFFERENCE</small>
            </Link>

          </div>

        </div>
      </section>


      {/* =====================================================
          COPYRIGHT BAR
      ===================================================== */}

      <div className={styles.copyright}>

        <div className={styles.copyrightContainer}>

          <div className={styles.copyrightText}>

            <p>
              © {new Date().getFullYear()} Society Of Apostles Of Mary.
            </p>a

            <span>
              All Rights Reserved.
            </span>

          </div>


          <div className={styles.copyrightCenter}>

            <span></span>

            <div>✝</div>

            <span></span>

          </div>


          <div className={styles.legalLinks}>

            <Link href="#">
              Privacy Policy
            </Link>

            <i></i>

            <Link href="#">
              Terms of Use
            </Link>

            <i></i>

            <Link href="#">
              Sitemap
            </Link>

          </div>


          <div className={styles.footerMotto}>

            <div className={styles.mottoIcon}>
              ✧
            </div>

            <p>
              TOGETHER
              <br />
              IN FAITH
              <br />
              ALWAYS
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}