import Hero from "./components/hero";
import Posts from "./components/posts";

export const revalidate = 43200;

export default async function Home() {
  return (
    <>
      <Hero />
      <Posts />
    </>
  );
}
