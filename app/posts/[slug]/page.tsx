import prisma from "@/app/lib/db";
import React from "react";

const PostPage = async ({ params }) => {
  const post = await prisma.post.findUnique({
    where: {
      slug: params.slug,
    },
  });
  return <div>{post?.slug}</div>;
};

export default PostPage;
