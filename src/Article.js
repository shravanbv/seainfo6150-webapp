import React from 'react';
import PropTypes from 'prop-types';

const Article= ({ article }) => {
  return (
    <div className="Article">
        <h3>{article.title}</h3>
        <p><em>By: {article.author}</em><br />{article.pubDate}</p>
        <p>{article.shortText}</p>
    </div>
  );
}

Article.propTypes = {
        article: PropTypes.shape({
    "title": PropTypes.string.isRequired,
    "shortText": PropTypes.string.isRequired,
    "pubDate": PropTypes.string.isRequired,
    "pubYear": PropTypes.string.isRequired,
    "author": PropTypes.string.isRequired
  }).isRequired
}

export default Article;
