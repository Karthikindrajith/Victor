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
            alt="Society of Apostles of Mary"
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
              <span>SOCIETY OF APOSTLES OF MARY</span>
              <i>•</i>
              <span>INDIA</span>
            </div>

            <h1>
              A Community
              <br />
              <em>Rooted in Faith</em>
            </h1>

            <p>
              Discover a journey of prayer, service and devotion —
              bringing people together through faith, compassion
              and a shared commitment to serve God and humanity.
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
              <small>FAITH &amp; SERVICE</small>
            </div>
          </div>

          <div className={styles.stat}>
            <div className={styles.statIcon}>
              <span>✦</span>
            </div>

            <div className={styles.statText}>
              <strong>A JOURNEY OF</strong>
              <small>HOPE &amp; DEVOTION</small>
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
              The Society of Apostles of Mary is a community
              rooted in prayer, faith and service, bringing
              people together through a shared spiritual journey.
            </p>

            <p>
              Through generations of devotion, service and
              community life, the Society continues to inspire
              people to live with faith, compassion and hope.
            </p>

            <p>
              Today, the mission continues with a spirit of
              prayer, service and dedication, welcoming everyone
              with peace, love and faith.
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
                alt="Society of Apostles of Mary"
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
                where faith
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
          OUR MISSION
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
              alt="Society of Apostles of Mary"
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
              <strong>OUR MISSION</strong>
            </div>

            <h2>
              Called to
              <br />
              <em>Faith &amp; Service</em>
            </h2>

            <p className={styles.maryLead}>
              The Society of Apostles of Mary seeks to build
              a community inspired by faith, prayer, compassion
              and service, sharing hope with everyone.
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
              <span>Connect With Us</span>
              <b>→</b>
            </Link>
          </div>

          {/* Quote */}
          <div className={styles.maryQuote}>
            <div>“</div>

            <p>
              With faith,
              <br />
              we walk in hope,
              <br />
              service and love.
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
              The Society continues its mission through prayer,
              service, compassion and community, creating a
              welcoming space for people from every walk of life.
            </p>

            <p>
              Through worship, charity, community outreach and
              spiritual guidance, the mission remains focused on
              faith, hope and service.
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
                  src="/images/church/faith-01.png"
                  alt="Pilgrims"
                  fill
                  sizes="25vw"
                  className={styles.coverImage}
                />
              </div>

              <div className={styles.missionBody}>
                <div className={styles.cardIcon}>
                  ♧
                </div>

                <h3>Community</h3>

                <p>
                  A welcoming community built on faith,
                  unity and togetherness.
                </p>
              </div>
            </article>

            <article className={styles.missionCard}>
              <div className={styles.missionImage}>
                <Image
                  src="/images/church/faith-02.png"
                  alt="Worship"
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
                  A life of prayer, worship and spiritual
                  devotion.
                </p>
              </div>
            </article>

            <article className={styles.missionCard}>
              <div className={styles.missionImage}>
                <Image
                  src="/images/church/faith-03.png"
                  alt="Service"
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
                  Extending love, care and compassion to
                  those in need.
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
              Come and
              <br />
              <em>Walk in Faith</em>
            </h2>

            <p>
              Experience a journey of faith, peace,
              service and renewal.
            </p>
          </div>

          <Link
            href="/contact"
            className={styles.visitButton}
          >
            <span>Connect With Us</span>
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