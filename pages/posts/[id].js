import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  const paths = data.map((post) => {
    return {
      params: { id: post.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await response.json();
  return {
    props: { post: data },
  };
};

const PostDetails = ({ post }) => {
//   const router = useRouter();
//   const { id } = router.query;
//   console.log(id);

  console.log(post);
  return (
    <>
      <Head>
        <title>Articles | Details</title>
      </Head>
      <div>
        <h1>Post Details</h1>
        <h4>{post.title}</h4>
        <p>{post.body}</p>
      </div>
    </>
  );
};

export default PostDetails;
