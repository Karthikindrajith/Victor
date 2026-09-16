"use client";

import Link from "next/link";

export default function TamilMagazinesPage() {
  return (
    <main
      style={{
        minHeight: "70vh",
        padding: "140px 20px 100px",
        background: "#f8f5ee",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <p
          style={{
            letterSpacing: "3px",
            fontSize: "13px",
            color: "#a48342",
            marginBottom: "15px",
          }}
        >
          TAMIL PUBLICATIONS
        </p>

        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "48px",
            color: "#132238",
            marginBottom: "20px",
          }}
        >
          Tamil Magazines
        </h1>

        <div
          style={{
            width: "70px",
            height: "2px",
            background: "#b9975b",
            margin: "0 auto 30px",
          }}
        />

        <p
          style={{
            maxWidth: "650px",
            margin: "0 auto 40px",
            color: "#666",
            fontSize: "17px",
            lineHeight: "1.8",
          }}
        >
          Our Tamil magazines and publications will be available here.
          Please check this page for the latest editions and downloadable
          publications.
        </p>

        <Link
          href="/tamil"
          style={{
            display: "inline-block",
            padding: "14px 28px",
            background: "#132238",
            color: "#fff",
            textDecoration: "none",
            letterSpacing: "1px",
            fontSize: "14px",
          }}
        >
          ← BACK TO TAMIL
        </Link>
      </div>
    </main>
  );
}