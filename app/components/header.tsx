import Link from "next/link";
import SocialIcon from "./social-icon";
import ThemeButton from "@/app/components/theme-button";
import GitHubIcon from "@/app/components/icons/github-icon";
import JPFlag from "@/app/components/icons/japan-flag";

const Header = () => {
  return (
    <nav className="h-14 border-b sticky top-0 bg-white dark:bg-slate-900 z-10">
      <div className="px-4 flex flex-row justify-between items-center dark:text-slate-50 mx-auto max-w-5xl h-full">
        <span className="text-3xl font-semibold">
          <Link href="/">Jack Martin</Link>
          <span className="ml-0.5 text-slate-400 dark:text-slate-400 text-base">
            dev in {<JPFlag />}
          </span>
        </span>
        <div className="flex flex-row gap-1 items-center">
          <SocialIcon href="https://github.com/JackMartinDev">
            <GitHubIcon />
          </SocialIcon>
          <ThemeButton />
        </div>
      </div>
    </nav>
  );
};

export default Header;
