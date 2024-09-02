import { getPostsMeta, getPostByName } from "@/app/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import "highlight.js/styles/github-dark.css";
import PublishTime from "@/app/components/publish-time";

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
      <h2 className="text-3xl mt-4 mb-4">{meta.title}</h2>
      <div className="inline-block border-t py-2 dark:border-slate-600">
        <PublishTime date={meta.date} />
      </div>
      <article className="prose prose-slate dark:prose-invert mb-4">
        {content}
      </article>
      <p className="mb-10">
        <Link href="/">← Back to home</Link>
      </p>
    </div>
  );
};

export default PostPage;
