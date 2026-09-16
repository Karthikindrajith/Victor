"use client";

import Link from "next/link";

export default function TamilBooksPage() {
  return (
    <main className="tamilBooksPage">
      {/* HERO */}
      <section className="booksHero">
        <div className="heroOverlay" />

        <div className="heroContent">
          <p className="eyebrow">TAMIL PUBLICATIONS</p>

          <h1>Tamil Books</h1>

          <div className="goldLine" />

          <p>
            Discover Tamil books and spiritual publications from
            Our Lady of Good Health, Velankanni.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="booksIntro">
        <div className="container">
          <p className="sectionLabel">OUR PUBLICATIONS</p>

          <h2>
            Tamil Books &amp; Spiritual
            <span> Publications</span>
          </h2>

          <div className="divider" />

          <p className="introText">
            Our Tamil publications are prepared to share the message of
            faith, devotion and spiritual reflection with devotees and
            readers.
          </p>

          {/* BOOK CARD */}
          <div className="bookCard">
            <div className="bookImage">
              <img
                src="/images/church/church-01.png"
                alt="Velankanni Basilica"
              />
            </div>

            <div className="bookContent">
              <span className="bookNumber">01</span>

              <p className="bookCategory">TAMIL PUBLICATION</p>

              <h3>Tamil Books</h3>

              <p>
                Tamil books and spiritual reading materials will be
                available here for devotees and readers.
              </p>

              <div className="bookActions">
                <button type="button" className="comingSoon">
                  COMING SOON
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORT */}
      <section className="supportSection">
        <div className="supportOverlay" />

        <div className="supportContent">
          <p className="sectionLabel">SUPPORT OUR PUBLICATIONS</p>

          <h2>
            Help Us Share
            <br />
            Good Spiritual Books
          </h2>

          <p>
            Your support can help us make more spiritual books and
            publications available to readers.
          </p>

          <Link href="/contact" className="contactButton">
            CONTACT US <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}