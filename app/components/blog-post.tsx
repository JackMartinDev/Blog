import { Post } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

const formatOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

const BlogPost = ({
  post: { image, title, slug, content, createdAt },
}: {
  post: Post;
}) => {
  return (
    <article className="flex flex-col gap-2 font-light sm:flex-row cursor-pointer border-b last:border-0 p-4 dark:text-slate-50">
      <Link href={`/posts/${slug}`} className="flex shrink-0">
        <div>
          <Image
            src={image ?? "/thumbnail.jpg"}
            alt="Blog post"
            width={1300}
            height={866}
            className="border w-full h-auto sm:w-[320px] sm:h-[180px] object-cover"
          />
        </div>
      </Link>
      <Link href={`/posts/${slug}`}>
        <div className="flex flex-col items-start gap-1">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="">{`Published on ${createdAt.toLocaleDateString("en-US", formatOptions)}`}</p>
          <p className="line-clamp-5 md:line-clamp-4">{content}</p>
          <p className="text-sm underline underline-offset-2">Read More</p>
        </div>
      </Link>
    </article>
  );
};

export default BlogPost;
