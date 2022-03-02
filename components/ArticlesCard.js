import Image from "next/image";
import React from "react";

const ArticlesCard = ({
  author,
  description,
  publishedAt,
  title,
}) => {
  return (
    <div className="article-content">
      <h2>Author: {author}</h2>
      <h3>{title}</h3>
      <h5>Published at: {publishedAt}</h5>
      <p>{description}</p>
    </div>
  );
};

export default ArticlesCard;
