"use client";

import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Hero.module.css";

const slides = [
  {
    image: "/images/church/hero-01.png",
    eyebrow: "A PLACE OF FAITH • A HOME FOR ALL",
   title: "A Journey of",
highlight: "Faith & Grace",
    description:
      "For generations, millions have come to  seeking hope, healing and peace. Experience the everlasting love of Mother Mary.",
  },

  {
    image: "/images/church/hero-02.png",
    eyebrow: "A SACRED PLACE • A WORLD OF HOPE",
    title: "A Sanctuary",
    highlight: "Of Hope",
    description:
      "A sacred destination where pilgrims from every corner of the world come together in faith, prayer and devotion.",
  },

  {
    image: "/images/church/hero-03.png",
    eyebrow: "FAITH • PRAYER • DEVOTION",
    title: "Walk With",
    highlight: "Mother Mary",
    description:
      "Discover the beauty of prayer and the timeless devotion that brings millions of pilgrims.",
  },

  {
    image: "/images/church/hero-04.png",
    eyebrow: "SOCIETY OF APOSTLES OF MARY• INDIA",
    title: "A Place For",
    highlight: "All Nations",
    description:
      "Where faith knows no borders and every pilgrim is welcomed with love, peace and hope.",
  },
];

export default function Hero() {

  const [current, setCurrent] = useState(0);


  /* ===============================
     AUTOMATIC SLIDER
  =============================== */

  useEffect(() => {

    const timer = setInterval(() => {

      setCurrent(
        (previous) =>
          (previous + 1) % slides.length
      );

    }, 6000);


    return () => clearInterval(timer);

  }, []);


  /* ===============================
     NEXT
  =============================== */

  const nextSlide = () => {

    setCurrent(
      (previous) =>
        (previous + 1) % slides.length
    );

  };


  /* ===============================
     PREVIOUS
  =============================== */

  const previousSlide = () => {

    setCurrent(
      (previous) =>
        (previous - 1 + slides.length) % slides.length
    );

  };


  const slide = slides[current];


  return (
    <section className={styles.hero}>

      {/* =================================
          BACKGROUND IMAGES
      ================================= */}

      {slides.map((item, index) => (

        <div
          key={item.image}
          className={`${styles.slide} ${
            index === current
              ? styles.slideActive
              : ""
          }`}
          style={{
            backgroundImage:
              `url("${item.image}")`,
          }}
        />

      ))}


      {/* =================================
          OVERLAY
      ================================= */}

      <div className={styles.overlay} />


      {/* =================================
          NAVBAR
      ================================= */}

      <Navbar />


      {/* =================================
          HERO CONTENT
      ================================= */}

      <div className={styles.heroContainer}>

        <div className={styles.heroContent}>

          <div className={styles.eyebrow}>
            {slide.eyebrow}
          </div>


          <h1 className={styles.title}>

            {slide.title}

            <br />

            <span>
              {slide.highlight}
            </span>

          </h1>


          <p className={styles.description}>
            {slide.description}
          </p>


          <div className={styles.buttons}>

            <a
              href="/about-us"
              className={styles.primaryButton}
            >
              Explore More
              <span>→</span>
            </a>


            <a
              href="/contact"
              className={styles.secondaryButton}
            >
              Plan Your Visit
              <span>→</span>
            </a>

          </div>

        </div>

      </div>


      {/* =================================
          LEFT ARROW
      ================================= */}

      <button
        className={`${styles.arrow} ${styles.leftArrow}`}
        onClick={previousSlide}
        aria-label="Previous slide"
      >
        ‹
      </button>


      {/* =================================
          RIGHT ARROW
      ================================= */}

      <button
        className={`${styles.arrow} ${styles.rightArrow}`}
        onClick={nextSlide}
        aria-label="Next slide"
      >
        ›
      </button>


      {/* =================================
          SLIDE NUMBERS
      ================================= */}

      <div className={styles.slideNumbers}>

        {slides.map((_, index) => (

          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={
              index === current
                ? styles.numberActive
                : ""
            }
          >
            0{index + 1}
          </button>

        ))}

      </div>


      {/* =================================
          BOTTOM PROGRESS
      ================================= */}

      <div className={styles.bottomSlider}>

        <span>
          0{current + 1}
        </span>

        <div className={styles.progress}>

          <span
            style={{
              width:
                `${((current + 1) / slides.length) * 100}%`,
            }}
          />

        </div>

        <span>
          0{slides.length}
        </span>

      </div>

    </section>
  );
}