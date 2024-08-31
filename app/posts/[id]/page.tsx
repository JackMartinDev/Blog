import { getPostsMeta, getPostByName } from "@/app/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getFormattedDate } from "@/app/lib/formatDate";
import "highlight.js/styles/github-dark.css";

export const revalidate = 0;

type Props = {
  params: {
    id: string;
  };
};
//
// export async function getStaticParams() {
//   const posts = await getPostsMeta();
//
//   if (!posts) return [];
//
//   return posts.map((post) => ({
//     postId: post.id,
//   }));
// }
//
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

  const pubDate = getFormattedDate(meta.date);

  return (
    <>
      <h2 className="text-3xl mt-4 mb-0">{meta.title}</h2>
      <p className="mt-0 text-sm">{pubDate}</p>
      <article className="prose">{content}</article>
      <p className="mb-10">
        <Link href="/">← Back to home</Link>
      </p>
    </>
  );
};

export default PostPage;
