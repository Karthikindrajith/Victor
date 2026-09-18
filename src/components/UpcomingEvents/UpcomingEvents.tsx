"use client";

import { useEffect, useState } from "react";
import styles from "./UpcomingEvents.module.css";

type Event = {
  id: number;
  title: string;
  event_type: string;
  date: string;
  description: string;
  image: string | null;
  is_active: boolean;
};

const API_URL = "http://127.0.0.1:8000/api/events/";

export default function UpcomingEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }

        const data = await response.json();

        const activeEvents = data
          .filter((event: Event) => event.is_active)
          .slice(0, 3);

        setEvents(activeEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const formatDate = (date: string) => {
    const eventDate = new Date(date);

    return {
      date: eventDate.getDate().toString().padStart(2, "0"),
      month: eventDate
        .toLocaleString("en-US", { month: "short" })
        .toUpperCase(),
      year: eventDate.getFullYear().toString(),
    };
  };

  return (
    <section className={styles.section} id="events">
      {/* Background decorations */}
      <div className={styles.backgroundGlow}></div>

      <div className={styles.maryDecoration}>
        <span>PRAY</span>
        <span>PILGRIMAGE</span>
        <span>PEACE</span>
        <span>FOR ALL</span>
      </div>

      <div className={styles.churchDecoration}>
        <div className={styles.tower}></div>
        <div className={styles.towerSmall}></div>
        <div className={styles.cross}>✝</div>
      </div>

      {/* Header */}
      <div className={styles.header}>
        <div className={styles.overline}>
          <span></span>
          <p>WALK TOGETHER IN FAITH</p>
          <span></span>
        </div>

        <h2>
          Upcoming <em>Events</em>
        </h2>

        <p className={styles.intro}>
          Join us for special celebrations, feast days and parish events
        
          <br />
          Let us come together in prayer, faith and community.
        </p>
      </div>

      {/* Event Cards */}
      <div className={styles.eventsGrid}>
        {loading ? (
          <div>Loading events...</div>
        ) : events.length === 0 ? (
          <div>No upcoming events available.</div>
        ) : (
          events.map((event, index) => {
            const formattedDate = formatDate(event.date);

            return (
              <article
                className={styles.eventCard}
                key={event.id}
                style={
                  {
                    "--card-index": index,
                  } as React.CSSProperties
                }
              >
                {/* Image */}
                <div className={styles.imageBox}>
                  {event.image ? (
                    <img
                      src={
                        event.image.startsWith("http")
                          ? event.image
                          : `http://127.0.0.1:8000${event.image}`
                      }
                      alt={event.title}
                    />
                  ) : (
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        background: "#071f35",
                      }}
                    />
                  )}

                  <div className={styles.imageOverlay}></div>

                  {/* Date */}
                  <div className={styles.dateBox}>
                    <span>{formattedDate.month}</span>
                    <strong>{formattedDate.date}</strong>
                    <small>{formattedDate.year}</small>
                  </div>
                </div>

                {/* Floating Icon */}
                <div className={styles.iconCircle}>
                  {event.event_type === "Feast"
                    ? "♕"
                    : event.event_type === "Special Mass"
                    ? "✦"
                    : event.event_type === "Prayer"
                    ? "✝"
                    : "⌂"}
                </div>

                {/* Content */}
                <div className={styles.cardContent}>
                  <h3>{event.title}</h3>

                  <div className={styles.smallDivider}></div>

                  <p>{event.description}</p>

                  <a
                    href={`/events/${event.id}`}
                    className={styles.detailsLink}
                  >
                    <span>VIEW DETAILS</span>
                    <b>→</b>
                  </a>
                </div>
              </article>
            );
          })
        )}
      </div>

      {/* View All */}
      <div className={styles.bottom}>
        <a href="/events" className={styles.allEvents}>
          <span>VIEW ALL EVENTS</span>
          <b>→</b>
        </a>
      </div>

      {/* Side Quote */}
      <div className={styles.sideQuote}>
        <span>“With Mary,</span>
        <span>we journey</span>
        <span>in hope.”</span>
        <i></i>
      </div>

      {/* Bottom Decoration */}
      <div className={styles.bottomLeft}>
        <span>SOCIETY OF APOSTLES OF MARY</span>
        <span>OUR MOTHER</span>
        <span>OUR HOPE</span>
      </div>

      <div className={styles.bottomRight}>
        FAITH&nbsp;&nbsp; | &nbsp;&nbsp;COMMUNITY&nbsp;&nbsp; | &nbsp;&nbsp;SERVICE
      </div>
    </section>
  );
}