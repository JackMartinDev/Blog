import Link from "next/link";
import SocialIcon from "./social-icon";
import ThemeButton from "@/app/components/theme-button";
import GitHubIcon from "@/app/components/icons/github-icon";

const Header = () => {
  return (
    <nav className="h-14 border-b sticky top-0 bg-white dark:bg-slate-900 z-10">
      <div className="px-4 flex flex-row justify-between items-center dark:text-slate-50 mx-auto max-w-5xl h-full">
        <span className="text-3xl font-semibold after:content-['dev\00a0in\00a0🇯🇵'] after:ml-0.5 after:text-slate-400 after:dark:text-slate-400 after:text-base">
          <Link href="/">Jack Martin</Link>
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
