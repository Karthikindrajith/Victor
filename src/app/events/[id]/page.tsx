"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import styles from "./EventDetails.module.css";

type Event = {
  id: number;
  title: string;
  event_type: string;
  date: string;
  description: string;
  image: string | null;
};

export default function EventDetailsPage() {
  const params = useParams();
  const id = params.id;

  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/events/${id}/`
        );

        if (!response.ok) {
          throw new Error("Event not found");
        }

        const data = await response.json();
        setEvent(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchEvent();
    }
  }, [id]);

  if (loading) {
    return (
      <main className={styles.page}>
        <div className={styles.loading}>Loading event...</div>
      </main>
    );
  }

  if (!event) {
    return (
      <main className={styles.page}>
        <div className={styles.notFound}>
          <h1>Event Not Found</h1>
          <Link href="/">BACK TO HOME</Link>
        </div>
      </main>
    );
  }

  const date = new Date(event.date);

  const day = date.getDate().toString().padStart(2, "0");
  const month = date
    .toLocaleString("en-US", { month: "long" })
    .toUpperCase();
  const year = date.getFullYear();

  const imageUrl = event.image
    ? event.image.startsWith("http")
      ? event.image
      : `http://127.0.0.1:8000${event.image}`
    : null;

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        {imageUrl && (
          <img
            src={imageUrl}
            alt={event.title}
            className={styles.heroImage}
          />
        )}

        <div className={styles.heroOverlay}></div>

        <div className={styles.heroContent}>
          <p>VELANKANNI • EVENTS</p>
          <h1>{event.title}</h1>
          <span>{event.event_type}</span>
        </div>
      </section>

      <section className={styles.details}>
        <div className={styles.dateCard}>
          <span>{month}</span>
          <strong>{day}</strong>
          <small>{year}</small>
        </div>

        <div className={styles.content}>
          <p className={styles.overline}>EVENT DETAILS</p>

          <h2>{event.title}</h2>

          <div className={styles.divider}></div>

          <p className={styles.description}>{event.description}</p>

          <div className={styles.info}>
            <div>
              <span>EVENT TYPE</span>
              <strong>{event.event_type}</strong>
            </div>

            <div>
              <span>DATE</span>
              <strong>
                {day} {month} {year}
              </strong>
            </div>
          </div>

          <Link href="/events" className={styles.backButton}>
            <span>←</span>
            BACK TO EVENTS
          </Link>
        </div>
      </section>
    </main>
  );
}