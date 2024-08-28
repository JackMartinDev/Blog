import Image from "next/image";

const BlogPost = () => {
  return (
    <div className="flex flex-col gap-2 font-light sm:flex-row cursor-pointer border-b last:border-0 p-4 dark:text-slate-50">
      <div className="flex shrink-0">
        <Image
          src="/thumbnail.jpg"
          alt="Blog post"
          width={1300}
          height={866}
          className="border w-full h-auto sm:w-[320px] sm:h-[180px] object-cover"
        />
      </div>
      <div className="flex flex-col items-start gap-1">
        <h3 className="text-xl font-semibold">Blog post title</h3>
        <p className="">Published on 2021-01-01</p>
        <p className="">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
          maiores placeat, deleniti sunt officia ipsum ab quas earum facilis
          fugiat quod dolore rerum accusantium, sequi eius voluptates totam
          accusamus ratione.
        </p>
        <button className="text-sm underline underline-offset-2">
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogPost;
