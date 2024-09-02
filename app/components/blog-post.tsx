import Image from "next/image";
import Link from "next/link";
import { Meta } from "../types/post";
import PublishTime from "./publish-time";

type Props = {
  post: Meta;
};

const BlogPost = ({ post }: Props) => {
  const { id, title, date, summary } = post;
  return (
    <article className="flex flex-col gap-2 font-light sm:flex-row cursor-pointer border-b last:border-0 p-4 dark:text-slate-50">
      <Link href={`/posts/${id}`} className="flex shrink-0">
        <div>
          <Image
            src={"/thumbnail.jpg"}
            alt="Blog post"
            width={1300}
            height={866}
            className="border w-full h-auto sm:w-[320px] sm:h-[180px] object-cover"
          />
        </div>
      </Link>
      <Link href={`/posts/${id}`}>
        <div className="flex flex-col items-start gap-1">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p>
            <PublishTime date={date} />
          </p>
          <p className="line-clamp-5 md:line-clamp-4">{summary}</p>
          <p className="text-sm underline underline-offset-2">Read More</p>
        </div>
      </Link>
    </article>
  );
};

export default BlogPost;
