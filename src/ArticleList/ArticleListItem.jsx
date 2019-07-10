import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArticleListItem.module.css'
import ArticleImage from './ArticleImage';

const ArticleListItem = ({ title, author, pubData, shortTest, url }) => (
    <article className = {styles.articleListItem}>
        <ArticleImage title={title} url={url} />
        <p>{shortTest}</p>
        <footer className = {styles.article_Date_Author}>
            <p><city><i>By: {author}</i> </city><br /> <strong><time dateTime = {pubData}>{pubData}</time></strong></p>    
        </footer>   
    </article>
);

ArticleListItem.propTypes = {
      title: PropTypes.string.isRequired,
      shortText: PropTypes.string.isRequired,
      pubDate: PropTypes.string.isRequired,
      pubYear: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
};

export default ArticleListItem;
