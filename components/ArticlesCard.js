import Image from "next/image";
import React from "react";

const ArticlesCard = ({
  author,
  description,
  content,
  publishedAt,
  image,
  title,
}) => {
  return (
    <div className="article-content">
      <div className="article-picture">
          <img src={image} alt="article-picture" height={200} width={600}/>
      </div>
      <h2>Author: {author}</h2>
      <h3>{title}</h3>
      <h5>Published at: {publishedAt}</h5>
      <p>{description}</p>
    </div>
  );
};

export default ArticlesCard;
