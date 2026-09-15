"use client";

import Link from "next/link";
import Image from "next/image";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import styles from "./About.module.css";

export default function AboutPage() {
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
        {/* Full Background */}
        <div className={styles.heroBackground}></div>

        {/* Cinematic overlays */}
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroBottomFade}></div>

        {/* Mother Mary / Basilica visual */}
        <div className={styles.heroVisual}>
          <Image
            src="/images/church/mother-mary.png"
            alt="Our Lady of Good Health"
            fill
            priority
            sizes="65vw"
            className={styles.heroVisualImage}
          />
        </div>

        {/* Hero Content */}
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <div className={styles.heroEyebrow}>
              <span>VELANKANNI</span>
              <i>•</i>
              <span>INDIA</span>
            </div>

            <h1>
              About Our
              <br />
              <em>Sacred Shrine</em>
            </h1>

            <p>
              Discover the story, heritage and spiritual journey of
              Velankanni — a place where millions come in faith,
              hope and devotion.
            </p>

            <div className={styles.heroActions}>
              <Link
                href="#story"
                className={styles.primaryButton}
              >
                <span>Explore Our Story</span>
                <b>→</b>
              </Link>

              <Link
                href="/contact"
                className={styles.secondaryButton}
              >
                <span>Plan Your Visit</span>
                <b>→</b>
              </Link>
            </div>
          </div>
        </div>

        {/* Side slide indicator */}
        <div className={styles.heroSideIndicator}>
          <span className={styles.current}>01</span>

          <div className={styles.sideLine}></div>

          <span>04</span>
        </div>

        {/* Hero stats */}
        <div className={styles.heroStats}>
          <div className={styles.stat}>
            <div className={styles.statIcon}>
              <span>♧</span>
            </div>

            <div className={styles.statText}>
              <strong>MILLIONS</strong>
              <small>PILGRIMS EVERY YEAR</small>
            </div>
          </div>

          <div className={styles.stat}>
            <div className={styles.statIcon}>
              <span>◎</span>
            </div>

            <div className={styles.statText}>
              <strong>ALL NATIONS</strong>
              <small>WELCOME HERE</small>
            </div>
          </div>

          <div className={styles.stat}>
            <div className={styles.statIcon}>
              <span>♜</span>
            </div>

            <div className={styles.statText}>
              <strong>A PLACE OF</strong>
              <small>FAITH &amp; HEALING</small>
            </div>
          </div>

          <div className={styles.stat}>
            <div className={styles.statIcon}>
              <span>✦</span>
            </div>

            <div className={styles.statText}>
              <strong>A JOURNEY OF</strong>
              <small>HOPE</small>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          OUR STORY
      ===================================================== */}
      <section
        id="story"
        className={styles.storySection}
      >
        <div className={styles.storyContainer}>
          {/* Left */}
          <div className={styles.storyContent}>
            <div className={styles.sectionLabel}>
              <span></span>
              <strong>OUR STORY</strong>
            </div>

            <h2>
              A Legacy
              <br />
              <em>of Faith and Hope</em>
            </h2>

            <p className={styles.storyLead}>
              Velankanni is more than a destination — it is a
              place where faith meets life, where prayers are
              heard, and where people experience the loving
              presence of Our Lady of Good Health.
            </p>

            <p>
              For generations, pilgrims from across India and
              around the world have travelled to this sacred
              place carrying their prayers, gratitude, struggles
              and hopes.
            </p>

            <p>
              Today, the shrine continues to welcome everyone
              with compassion, peace and a spirit of faith.
            </p>

            <Link
              href="#our-lady"
              className={styles.darkButton}
            >
              <span>Discover Our Story</span>
              <b>→</b>
            </Link>
          </div>

          {/* Right */}
          <div className={styles.storyVisual}>
            <div className={styles.storyFrame}></div>

            <div className={styles.storyImage}>
              <Image
                src="/images/church/church-01.png"
                alt="Velankanni Basilica"
                fill
                sizes="55vw"
                className={styles.coverImage}
              />
            </div>

            <div className={styles.storyQuote}>
              <div className={styles.quoteSymbol}>“</div>

              <p>
                A place
                <br />
                where heaven
                <br />
                touches lives.
              </p>

              <span></span>
            </div>

            <div className={styles.storyNumber}>
              01
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          OUR LADY
      ===================================================== */}
      <section
        id="our-lady"
        className={styles.marySection}
      >
        <div className={styles.maryBackground}></div>
        <div className={styles.maryOverlay}></div>

        <div className={styles.maryContainer}>
          {/* Mary image */}
          <div className={styles.maryVisual}>
            <div className={styles.maryGlow}></div>

            <Image
              src="/images/church/mother-mary.png"
              alt="Our Lady of Good Health"
              fill
              sizes="50vw"
              className={styles.maryImage}
            />

            <div className={styles.maryFrame}></div>
          </div>

          {/* Content */}
          <div className={styles.maryContent}>
            <div className={styles.lightLabel}>
              <span></span>
              <strong>OUR LADY</strong>
            </div>

            <h2>
              Mother of
              <br />
              <em>Good Health</em>
            </h2>

            <p className={styles.maryLead}>
              Our Lady of Good Health is a symbol of love,
              compassion and healing. Countless pilgrims have
              experienced her intercession and continue to place
              their trust in her.
            </p>

            <div className={styles.maryFeatures}>
              <div className={styles.maryFeature}>
                <div className={styles.featureIcon}>
                  ♡
                </div>

                <strong>Compassion</strong>
                <small>for All</small>
              </div>

              <div className={styles.maryFeature}>
                <div className={styles.featureIcon}>
                  ♧
                </div>

                <strong>A Refuge</strong>
                <small>in Times of Need</small>
              </div>

              <div className={styles.maryFeature}>
                <div className={styles.featureIcon}>
                  ☼
                </div>

                <strong>A Beacon</strong>
                <small>of Hope</small>
              </div>
            </div>

            <Link
              href="/contact"
              className={styles.maryButton}
            >
              <span>Plan Your Pilgrimage</span>
              <b>→</b>
            </Link>
          </div>

          {/* Quote */}
          <div className={styles.maryQuote}>
            <div>“</div>

            <p>
              With Mary,
              <br />
              we walk in faith,
              <br />
              hope and love.
            </p>

            <span></span>
          </div>
        </div>
      </section>

      {/* =====================================================
          HERITAGE & MISSION
      ===================================================== */}
      <section
        id="mission"
        className={styles.missionSection}
      >
        <div className={styles.missionContainer}>
          {/* Intro */}
          <div className={styles.missionIntro}>
            <div className={styles.sectionLabel}>
              <span></span>
              <strong>OUR HERITAGE &amp; MISSION</strong>
            </div>

            <h2>
              Serving People.
              <br />
              <em>Strengthening Faith.</em>
            </h2>

            <p>
              The shrine continues its mission of prayer,
              service and compassion, welcoming millions of
              pilgrims every year.
            </p>

            <p>
              Through worship, charity, community outreach and
              spiritual guidance, Velankanni remains a place of
              hope for all.
            </p>

            <Link
              href="#visit"
              className={styles.darkButton}
            >
              <span>Our Mission</span>
              <b>→</b>
            </Link>
          </div>

          {/* Cards */}
          <div className={styles.missionCards}>
            <article className={styles.missionCard}>
              <div className={styles.missionImage}>
                <Image
                  src="/images/church/faith-01.png
                  "
                  alt="Pilgrims at Velankanni"
                  fill
                  sizes="25vw"
                  className={styles.coverImage}
                />
              </div>

              <div className={styles.missionBody}>
                <div className={styles.cardIcon}>
                  ♧
                </div>

                <h3>Pilgrims</h3>

                <p>
                  A home for every pilgrim from every nation.
                </p>
              </div>
            </article>

            <article className={styles.missionCard}>
              <div className={styles.missionImage}>
                <Image
                  src="/images/church/faith-02.png"
                  alt="Worship at Velankanni"
                  fill
                  sizes="25vw"
                  className={styles.coverImage}
                />
              </div>

              <div className={styles.missionBody}>
                <div className={styles.cardIcon}>
                  ♜
                </div>

                <h3>Worship</h3>

                <p>
                  A place of prayer, healing and thanksgiving.
                </p>
              </div>
            </article>

            <article className={styles.missionCard}>
              <div className={styles.missionImage}>
                <Image
                  src="/images/church/faith-03.png"
                  alt="Service at Velankanni"
                  fill
                  sizes="25vw"
                  className={styles.coverImage}
                />
              </div>

              <div className={styles.missionBody}>
                <div className={styles.cardIcon}>
                  ♡
                </div>

                <h3>Service</h3>

                <p>
                  Extending love and care to those in need.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================
          VISIT CTA
      ===================================================== */}
      <section
        id="visit"
        className={styles.visitSection}
      >
        <div className={styles.visitBackground}></div>
        <div className={styles.visitOverlay}></div>

        <div className={styles.visitContainer}>
          <div className={styles.visitContent}>
            <div className={styles.visitLabel}>
              YOUR JOURNEY BEGINS HERE
            </div>

            <h2>
              Plan Your Visit
              <br />
              <em>to Velankanni</em>
            </h2>

            <p>
              Experience a journey of faith, peace and renewal.
            </p>
          </div>

          <Link
            href="/contact"
            className={styles.visitButton}
          >
            <span>Plan Your Visit</span>
            <b>→</b>
          </Link>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}
      <Footer />
    </main>
  );
}