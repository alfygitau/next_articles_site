import Head from "next/head";
import React from "react";
import ArticlesCard from "../../components/ArticlesCard";
import styles from "../../styles/posts.module.css";

export const getStaticProps = async () => {
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=291c53ddb3a34ad58decc6e5d11a7767"
  );
  const articles = await response.json();
  return {
    props: { articles },
  };
};

const Articles = ({ articles }) => {
  const results = articles.articles;
  console.log(results);

  return (
    <>
      <Head>
        <title>Articles | Articles</title>
      </Head>
      <div>
        <h1>Articles Page</h1>
        {results.map((result) => (
          <div key={result.id} className={styles.single}>
            <ArticlesCard
              author={result.author}
              content={result.content}
              description={result.description}
              image={result.urlToImage}
              title={result.title}
              publishedAt={result.publishedAt}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Articles;
