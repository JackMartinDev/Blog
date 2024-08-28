import BlogPost from "./components/blog-post";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <BlogPost />
      <BlogPost />
      <BlogPost />
      <BlogPost />
      <BlogPost />
      <BlogPost />
    </div>
  );
}
