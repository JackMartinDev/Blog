import BlogPost from "./components/blog-post";
import Hero from "./components/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="flex flex-col gap-4">
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
      </div>
    </>
  );
}
