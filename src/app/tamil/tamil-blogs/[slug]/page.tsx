import Link from "next/link";

export default async function BlogSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main>
      <h1>Blog Details</h1>

      <p>Blog Slug: {slug}</p>

      <p>
        This is a dummy blog detail page.
      </p>

      <Link href="/blogs">
        ← Back to Blogs
      </Link>
    </main>
  );
}