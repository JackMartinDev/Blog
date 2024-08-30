import BlogPost from "./components/blog-post";
import Hero from "./components/hero";
import prisma from "./lib/db";

export default async function Home() {
  const posts = await prisma.post.findMany({
    where: {
      published: true,
    },
  });
  return (
    <>
      <Hero />
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}
