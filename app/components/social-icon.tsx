import React from "react";

type Props = {
  href: string;
  children: React.ReactNode;
};

const SocialIcon = ({ href, children }: Props) => {
  return (
    <a
      href={href}
      target="_blank"
      className="rounded-full hover:bg-slate-100 p-2 transition-colors dark:text-white dark:hover:bg-slate-800"
    >
      {children}
    </a>
  );
};

export default SocialIcon;
