import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostsMeta, getPostByName } from "@/app/lib/posts";
import PublishTime from "@/app/components/publish-time";
import "highlight.js/styles/github-dark.css";

export const revalidate = 43200;

type Props = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  const posts = await getPostsMeta();

  if (!posts) return [];

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export async function generateMetadata({ params: { id } }: Props) {
  const post = await getPostByName(`${id}.mdx`);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.meta.title,
  };
}

const PostPage = async ({ params: { id } }: Props) => {
  const post = await getPostByName(`${id}.mdx`);

  if (!post) notFound();

  const { meta, content } = post;

  return (
    <div className="p-4">
      <h2 className="text-3xl font-semibold mt-4 mb-4">{meta.title}</h2>
      <div className="inline-block border-t py-2 dark:border-slate-600">
        <PublishTime date={meta.date} />
      </div>
      <article className="prose prose-slate dark:prose-invert max-w-none mb-6 text-lg font-normal">
        {content}
      </article>
      <p className="mb-6 text-lg hover:underline hover:underline-offset-2">
        <Link href="/">← Back to home</Link>
      </p>
    </div>
  );
};

export default PostPage;
