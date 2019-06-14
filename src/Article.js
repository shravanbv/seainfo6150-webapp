import React from 'react';
import PropTypes from 'prop-types';

const Article= ({ article }) => (
    <article className="Article">
        <header>
            <h3>{article.title}</h3>
        </header>  

        <footer>
        <p><em>By: {article.author}</em><br/>{article.pubDate}</p>
        <p>{article.shortText}</p>
        </footer>
    </article>
  );


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
