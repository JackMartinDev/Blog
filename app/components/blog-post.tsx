"use client";
import { Post } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BlogPost = ({
  post: { image, title, slug, content, createdAt },
}: {
  post: Post;
}) => {
  const router = useRouter();
  return (
    <div
      className="flex flex-col gap-2 font-light sm:flex-row cursor-pointer border-b last:border-0 p-4 dark:text-slate-50"
      onClick={() => router.push("/posts/" + slug)}
    >
      <div className="flex shrink-0">
        <Image
          src={image ?? "/thumbnail.jpg"}
          alt="Blog post"
          width={1300}
          height={866}
          className="border w-full h-auto sm:w-[320px] sm:h-[180px] object-cover"
        />
      </div>
      <div className="flex flex-col items-start gap-1">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="">{`Published on ${createdAt}`}</p>
        <p className="">
          {content.length > 200 ? `${content.slice(0, 200)}...` : content}
        </p>
        <button className="text-sm underline underline-offset-2">
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogPost;
