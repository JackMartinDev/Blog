import { getPostsMeta } from "../lib/posts";
import BlogPost from "./blog-post";

const Posts = async () => {
  const posts = await getPostsMeta();

  if (!posts) {
    return <div>No posts available at the moment</div>;
  }
  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
