import Image from "next/image";

const Hero = () => {
  return (
    <div className="dark:text-slate-50 flex flex-col gap-1 p-4">
      <Image
        src="/image.jpg"
        width={160}
        height={160}
        alt="Avatar"
        className="rounded-full object-cover"
      />
      <h1 className="text-4xl font-bold">Hello, World!</h1>
      <p className="text-lg font-light">Welcome to my blog!</p>
      <p className="text-lg font-light">
        Here I write about programming, web development, and other tech-related
        topics, as well as some personal thoughts about life in Japan.
      </p>
    </div>
  );
};

export default Hero;
