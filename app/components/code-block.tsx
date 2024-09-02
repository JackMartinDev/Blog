"use client";

import { useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const CodeBlock = ({ children, className }: Props) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  //MDX code snippets are parsed as many small HTML elements, so we need to recursively
  //get the text content of all children
  const getTextContent = (children: React.ReactNode): string => {
    if (typeof children === "string") {
      return children;
    } else if (Array.isArray(children)) {
      return children.map((child) => getTextContent(child)).join("");
    } else if (typeof children === "object" && children !== null) {
      return getTextContent((children as any).props.children);
    } else {
      return "";
    }
  };

  const textToCopy = getTextContent(children).trim();

  return (
    <div className="relative">
      <button
        className="absolute top-6 right-7 bg-blue-500 hover:bg-blue-700 text-white text-sm py-1 px-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
        onClick={handleCopy}
      >
        {copied ? "Copied!" : "Copy"}
      </button>
      <pre className={`overflow-x-auto ${className}`}>
        <code className={className}>{children}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
