"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [tamilOpen, setTamilOpen] = useState(false);
  const [booksOpen, setBooksOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileTamilOpen, setMobileTamilOpen] = useState(false);
  const [mobileBooksOpen, setMobileBooksOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileTamilOpen(false);
    setMobileBooksOpen(false);
  };

  return (
    <header className={styles.header}>

      {/* =====================================================
          TOP BAR
      ===================================================== */}


      <div className={styles.topBar}>
        <div className={styles.topLeft}>
          OUR LADY OF GOOD HEALTH • Society of Apostles of Mary

        </div>

        <div className={styles.topRight}>
          <Link href="/about">
            About
          </Link>

          <span>|</span>

          <Link href="/contact">
            Contact
          </Link>

          <span>|</span>

          <button
            type="button"
            className={styles.language}
            aria-label="Select language"
          >
            EN
            <span>▼</span>
          </button>

          <span className={styles.searchIcon}>
            ⌕
          </span>
        </div>
      </div>


      {/* =====================================================
          MAIN NAVIGATION
      ===================================================== */}
      <nav className={styles.nav}>

        {/* LOGO */}
        <Link
          href="/"
          className={styles.logo}
          aria-label="Velankanni Home"
        >
          <img
            src="/images/logo/logo.png"
            alt="Society of Apostles of Mary Logo"
          />

          <div className={styles.logoText}>
    <span>OUR LADY OF GOOD HEALTH</span>
    <small></small>
  </div>
        </Link>


        {/* ===================================================
            DESKTOP MENU
        =================================================== */}
        <div className={styles.menu}>

          {/* HOME */}
          <Link
            href="/"
            className={`${styles.menuItem} ${styles.active}`}
          >
            HOME
          </Link>


          {/* ABOUT US */}
          <Link
            href="/about"
            className={styles.menuItem}
          >
            ABOUT US
          </Link>


          {/* CHURCH CONSTRUCTION */}
          <Link
            href="/church-construction"
            className={styles.menuItem}
          >
            CHURCH CONSTRUCTION
          </Link>


          {/* =================================================
              BOOKS DROPDOWN
          ================================================= */}
          <div
            className={styles.tamilWrapper}
            onMouseEnter={() => setBooksOpen(true)}
            onMouseLeave={() => setBooksOpen(false)}
          >
            <button
              type="button"
              className={`${styles.menuItem} ${styles.tamilButton}`}
              onClick={() => setBooksOpen(!booksOpen)}
              aria-expanded={booksOpen}
            >
              BOOKS

              <span className={styles.arrowDown}>
                ▼
              </span>
            </button>

            {booksOpen && (
              <div className={styles.dropdown}>

                <Link href="/books">
                  English Books
                </Link>

                <Link href="/magazines">
                  English Magazines
                </Link>

              </div>
            )}
          </div>


          {/* BLOGS */}
          <Link
            href="/blogs"
            className={styles.menuItem}
          >
            BLOGS
          </Link>


          {/* EVENTS */}
          <Link
            href="/events"
            className={styles.menuItem}
          >
            EVENTS
          </Link>


          {/* =================================================
              TAMIL DROPDOWN
          ================================================= */}
          <div
            className={styles.tamilWrapper}
            onMouseEnter={() => setTamilOpen(true)}
            onMouseLeave={() => setTamilOpen(false)}
          >
            <button
              type="button"
              className={`${styles.menuItem} ${styles.tamilButton}`}
              onClick={() => setTamilOpen(!tamilOpen)}
              aria-expanded={tamilOpen}
            >
              TAMIL

              <span className={styles.arrowDown}>
                ▼
              </span>
            </button>

            {tamilOpen && (
              <div className={styles.dropdown}>

                <Link href="/tamil/about-us">
                  About Us
                </Link>

                <Link href="/tamil/duties">
                  Duties
                </Link>

                <Link href="/tamil/church-construction">
                  Church Construction Tamil
                </Link>

                <Link href="/tamil/magazines">
                  Tamil Magazines
                </Link>

                <Link href="/tamil/books">
                  Tamil Books
                </Link>

                <Link href="/tamil/vocations">
                  Vocations
                </Link>

                <Link href="/tamil/blogs">
                  Tamil Blogs
                </Link>

              </div>
            )}
          </div>


          {/* CONTACT */}
          <Link
            href="/contact"
            className={styles.menuItem}
          >
            CONTACT
          </Link>


          {/* PLAN YOUR VISIT */}
          <Link
            href="/pilgrimage"
            className={styles.visitButton}
          >
            PLAN YOUR VISIT

            <span>
              →
            </span>
          </Link>

        </div>


        {/* ===================================================
            MOBILE MENU BUTTON
        =================================================== */}
        <button
          type="button"
          className={styles.mobileButton}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>


        {/* ===================================================
            MOBILE MENU
        =================================================== */}
        {mobileOpen && (
          <div className={styles.mobileMenu}>

            {/* HOME */}
            <Link
              href="/"
              onClick={closeMobileMenu}
            >
              Home
            </Link>


            {/* ABOUT */}
            <Link
              href="/about"
              onClick={closeMobileMenu}
            >
              About Us
            </Link>


            {/* CHURCH CONSTRUCTION */}
            <Link
              href="/church-construction"
              onClick={closeMobileMenu}
            >
              Church Construction
            </Link>


            {/* =================================================
                MOBILE BOOKS DROPDOWN
            ================================================= */}
            <div className={styles.mobileTamil}>

              <button
                type="button"
                onClick={() =>
                  setMobileBooksOpen(!mobileBooksOpen)
                }
                aria-expanded={mobileBooksOpen}
              >
                <span>
                  Books
                </span>

                <span>
                  {mobileBooksOpen ? "▲" : "▼"}
                </span>
              </button>


              {mobileBooksOpen && (
                <div className={styles.mobileDropdown}>

                  <Link
                    href="/books"
                    onClick={closeMobileMenu}
                  >
                    English Books
                  </Link>

                  <Link
                    href="/magazines"
                    onClick={closeMobileMenu}
                  >
                    English Magazines
                  </Link>

                </div>
              )}

            </div>


            {/* BLOGS */}
            <Link
              href="/blogs"
              onClick={closeMobileMenu}
            >
              Blogs
            </Link>


            {/* EVENTS */}
            <Link
              href="/events"
              onClick={closeMobileMenu}
            >
              Events
            </Link>


            {/* =================================================
                MOBILE TAMIL DROPDOWN
            ================================================= */}
            <div className={styles.mobileTamil}>

              <button
                type="button"
                onClick={() =>
                  setMobileTamilOpen(!mobileTamilOpen)
                }
                aria-expanded={mobileTamilOpen}
              >
                <span>
                  Tamil
                </span>

                <span>
                  {mobileTamilOpen ? "▲" : "▼"}
                </span>
              </button>


              {mobileTamilOpen && (
                <div className={styles.mobileDropdown}>

                  <Link
                    href="/tamil/about-us"
                    onClick={closeMobileMenu}
                  >
                    About Us
                  </Link>

                  <Link
                    href="/tamil/duties"
                    onClick={closeMobileMenu}
                  >
                    Duties
                  </Link>

                  <Link
                    href="/tamil/church-construction"
                    onClick={closeMobileMenu}
                  >
                    Church Construction Tamil
                  </Link>

                  <Link
                    href="/tamil/magazines"
                    onClick={closeMobileMenu}
                  >
                    Tamil Magazines
                  </Link>

                  <Link
                    href="/tamil/books"
                    onClick={closeMobileMenu}
                  >
                    Tamil Books
                  </Link>

                  <Link
                    href="/tamil/vocations"
                    onClick={closeMobileMenu}
                  >
                    Vocations
                  </Link>

                  <Link
                    href="/tamil/blogs"
                    onClick={closeMobileMenu}
                  >
                    Tamil Blogs
                  </Link>

                </div>
              )}

            </div>


            {/* CONTACT */}
            <Link
              href="/contact"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>


            {/* PLAN YOUR VISIT */}
            <Link
              href="/pilgrimage"
              className={styles.visitButton}
              onClick={closeMobileMenu}
            >
              Plan Your Visit

              <span>
                →
              </span>
            </Link>

          </div>
        )}

      </nav>

    </header>
  );
}