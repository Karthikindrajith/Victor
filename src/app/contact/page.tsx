"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import styles from "./Contact.module.css";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <>
      <Navbar />

      <main className={styles.page}>

        {/* =====================================================
            HERO
        ====================================================== */}
        <section className={styles.hero}>

          <img
            src="/images/church/hero-04.png"
            alt="Basilica of Our Lady of Good Health, Velankanni"
            className={styles.heroImage}
          />

          <div className={styles.heroOverlay}></div>

          <div className={styles.heroContent}>

            <div className={styles.heroKicker}>
              <span></span>
              WE ARE ALWAYS HERE FOR YOU
              <span></span>
            </div>

            <h1>
              Contact <strong>Us</strong>
            </h1>

            <h2>
              Let&apos;s stay connected in faith
            </h2>

            <p>
              For prayers, pilgrimage information, mass timings,
              publications, or any other queries, feel free to
              reach out to us.
              <br />
              We would be happy to assist you.
            </p>

            <div className={styles.heroServices}>

              <div className={styles.heroService}>
                <div className={styles.heroIcon}>♧</div>
                <div>
                  <strong>Pray</strong>
                  <span>Together</span>
                </div>
              </div>

              <div className={styles.heroService}>
                <div className={styles.heroIcon}>♧</div>
                <div>
                  <strong>Serve</strong>
                  <span>Together</span>
                </div>
              </div>

              <div className={styles.heroService}>
                <div className={styles.heroIcon}>♡</div>
                <div>
                  <strong>Grow</strong>
                  <span>Together</span>
                </div>
              </div>

            </div>

          </div>

          <div className={styles.heroSideQuote}>
            <span>Mother</span>
            <span>of Good Health</span>
            <span>Pray for Us</span>

            <div>✦</div>
          </div>

        </section>

        {/* =====================================================
            BREADCRUMB
        ====================================================== */}
        <div className={styles.breadcrumb}>
          <div className={styles.container}>
            <Link href="/">Home</Link>
            <span>›</span>
            <span>Contact</span>
          </div>
        </div>

        {/* =====================================================
            CONTACT FORM + INFORMATION
        ====================================================== */}
        <section className={styles.contactSection}>

          <div className={styles.container}>

            <div className={styles.contactGrid}>

              {/* FORM */}
              <div className={styles.formWrapper}>

                <div className={styles.sectionKicker}>
                  SEND US A MESSAGE
                </div>

                <h2>
                  We&apos;d Love to <strong>Hear from You</strong>
                </h2>

                <p className={styles.formIntro}>
                  Fill in the details below and we will get back
                  to you as soon as possible.
                </p>

                <form
                  className={styles.form}
                  onSubmit={handleSubmit}
                >

                  <div className={styles.formRow}>

                    <div className={styles.inputGroup}>
                      <span className={styles.inputIcon}>♙</span>

                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name *"
                        required
                      />
                    </div>

                    <div className={styles.inputGroup}>
                      <span className={styles.inputIcon}>✉</span>

                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address *"
                        required
                      />
                    </div>

                  </div>

                  <div className={styles.formRow}>

                    <div className={styles.inputGroup}>
                      <span className={styles.inputIcon}>⌕</span>

                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number *"
                        required
                      />
                    </div>

                    <div className={styles.inputGroup}>
                      <span className={styles.inputIcon}>▤</span>

                      <select
                        name="subject"
                        defaultValue=""
                        required
                      >
                        <option value="" disabled>
                          Select Subject *
                        </option>
                        <option value="Prayer Request">
                          Prayer Request
                        </option>
                        <option value="Pilgrimage">
                          Pilgrimage Information
                        </option>
                        <option value="Books">
                          Books & Publications
                        </option>
                        <option value="Magazine">
                          English Magazine
                        </option>
                        <option value="General Enquiry">
                          General Enquiry
                        </option>
                      </select>
                    </div>

                  </div>

                  <div className={styles.messageGroup}>

                    <span className={styles.messageIcon}>
                      ◌
                    </span>

                    <textarea
                      name="message"
                      placeholder="Your Message *"
                      required
                    ></textarea>

                  </div>

                  <button
                    type="submit"
                    className={styles.submitButton}
                  >
                    <span>➤</span>

                    {submitted
                      ? "Message Sent Successfully"
                      : "Send Message"}

                    <b>→</b>
                  </button>

                  {submitted && (
                    <div className={styles.successMessage}>
                      Thank you for reaching out to us.
                      We will get back to you soon.
                    </div>
                  )}

                </form>

              </div>

              {/* CONTACT INFO */}
              <aside className={styles.infoCard}>

                <div className={styles.infoHeader}>
                  <h2>Our Contact Information</h2>
                  <span>✦</span>
                </div>

                <div className={styles.infoItem}>

                  <div className={styles.infoIcon}>
                    ●
                  </div>

                  <div>
                    <strong>
                      Basilica of Our Lady of Good Health
                    </strong>

                    <p>
                      Velankanni,
                      <br />
                      Nagapattinam District,
                      <br />
                      Tamil Nadu, India – 611 111
                    </p>
                  </div>

                </div>

                <div className={styles.infoItem}>

                  <div className={styles.infoIcon}>
                    ☎
                  </div>

                  <div>
                    <strong>Phone</strong>

                    <p>
                      +91 461 236 1989
                      <br />
                      +91 94876 09983
                    </p>
                  </div>

                </div>

                <div className={styles.infoItem}>

                  <div className={styles.infoIcon}>
                    ✉
                  </div>

                  <div>
                    <strong>Email</strong>

                    <p>
                      futurosomystica@gmail.com
                      <br />
                      julianveritas@gmail.com
                    </p>
                  </div>

                </div>

                <div className={styles.infoDivider}></div>

                <div className={styles.officeHours}>

                  <div className={styles.clockIcon}>
                    ◷
                  </div>

                  <div>
                    <h3>Office Hours</h3>

                    <strong>
                      Monday – Sunday
                    </strong>

                    <p>
                      5:00 AM – 9:00 PM
                      <br />
                      <span>(For Office Enquiries)</span>
                    </p>
                  </div>

                </div>

                {/* MAP */}
                <div className={styles.location}>

                  <div className={styles.locationTitle}>
                    <h3>Our Location</h3>
                    <span>✦</span>
                  </div>

                  <div className={styles.mapBox}>

                    <iframe
                      src="https://www.google.com/maps?q=Basilica%20of%20Our%20Lady%20of%20Good%20Health%20Velankanni&output=embed"
                      loading="lazy"
                      title="Basilica of Our Lady of Good Health location"
                    ></iframe>

                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Basilica+of+Our+Lady+of+Good+Health+Velankanni"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.mapButton}
                    >
                      View on Google Maps ↗
                    </a>

                  </div>

                </div>

              </aside>

            </div>

          </div>

        </section>

        {/* =====================================================
            QUICK ENQUIRIES
        ====================================================== */}
        <section className={styles.enquirySection}>

          <div className={styles.container}>

            <div className={styles.enquiryGrid}>

              <Link
                href="/contact"
                className={styles.enquiryCard}
              >
                <div className={styles.enquiryIcon}>
                  ♧
                </div>

                <div>
                  <h3>Prayer Requests</h3>
                  <p>
                    Share your prayer intentions
                    with us.
                  </p>
                </div>
              </Link>

              <Link
                href="/pilgrimage"
                className={styles.enquiryCard}
              >
                <div className={styles.enquiryIcon}>
                  ♧
                </div>

                <div>
                  <h3>Pilgrimage Information</h3>
                  <p>
                    Get information about pilgrimage,
                    stay, and facilities.
                  </p>
                </div>
              </Link>

              <Link
                href="/books"
                className={styles.enquiryCard}
              >
                <div className={styles.enquiryIcon}>
                  ▣
                </div>

                <div>
                  <h3>Publications</h3>
                  <p>
                    Inquire about magazines,
                    books and other resources.
                  </p>
                </div>
              </Link>

              <Link
                href="/contact"
                className={styles.enquiryCard}
              >
                <div className={styles.enquiryIcon}>
                  ◌
                </div>

                <div>
                  <h3>General Enquiries</h3>
                  <p>
                    We are happy to assist you
                    with any other questions.
                  </p>
                </div>
              </Link>

            </div>

          </div>

        </section>

        {/* =====================================================
            PRAYER BANNER
        ====================================================== */}
        <section className={styles.prayerBanner}>

          <img
            src="/images/church/intro-bg.png"
            alt=""
            className={styles.prayerImage}
          />

          <div className={styles.prayerOverlay}></div>

          <div className={styles.prayerContent}>

            <div className={styles.prayerCross}>
              ✦
            </div>

            <h2>
              “Come to me, all you who are weary
              <br />
              and burdened, and I will give you rest.”
            </h2>

            <span>Matthew 11:28</span>

            <div className={styles.prayerLine}></div>

          </div>

        </section>

        {/* =====================================================
            CONTACT CTA
        ====================================================== */}
        <section className={styles.ctaSection}>

          <div className={styles.container}>

            <div className={styles.ctaInner}>

              <div>

                <div className={styles.sectionKicker}>
                  WE ARE HERE TO HELP
                </div>

                <h2>
                  Stay Connected in <strong>Faith</strong>
                </h2>

                <p>
                  Whether you have a prayer request,
                  pilgrimage enquiry, or simply wish to
                  connect with us, we are always happy
                  to hear from you.
                </p>

              </div>

              <Link
                href="/pilgrimage"
                className={styles.ctaButton}
              >
                Plan Your Visit
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