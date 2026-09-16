import Link from "next/link";

const blogs = [
  {
    slug: "mother-marys-message",
    title: "Mother Mary's Message",
  },
  {
    slug: "our-lady-of-good-health",
    title: "Our Lady of Good Health",
  },
  {
    slug: "feast-of-velankanni",
    title: "The Feast of Velankanni",
  },
];

export default function TamilBlogsPage() {
  return (
    <main>
      <h1>Tamil Blogs</h1>

      <p>Latest Tamil blog articles.</p>

      {blogs.map((blog) => (
        <div key={blog.slug}>
          <h2>{blog.title}</h2>

          <Link href={`/tamil/tamil-blogs/${blog.slug}`}>
            Read More →
          </Link>
        </div>
      ))}
    </main>
  );
}