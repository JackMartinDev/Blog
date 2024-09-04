import { visit } from "unist-util-visit";

export default function WrapCodeBlocks() {
  return (tree) => {
    visit(tree, "element", (node, index, parent) => {
      if (node.tagName === "pre") {
        parent.children[index] = {
          type: "element",
          tagName: "CodeBlock",
          properties: node.properties,
          children: node.children,
        };
      }
    });
  };
}
