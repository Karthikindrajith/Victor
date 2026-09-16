import Link from "next/link";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function TamilBlogDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;

  return (
    <main>
      <h1>Tamil Blog</h1>

      <p>
        Blog Slug: {slug}
      </p>

      <p>
        Full Tamil blog content will be available here.
      </p>

      <Link href="/tamil/tamil-blogs">
        ← Back to Tamil Blogs
      </Link>
    </main>
  );
}