import BlogPost from "./components/blog-post";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl min-h-screen">
      <div className="flex flex-col gap-4">
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
      </div>
    </main>
  );
}
