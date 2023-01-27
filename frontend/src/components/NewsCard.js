import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function NewsCard(props) {
  const tpCache = [0, 0];
  function double_click(ev) {
    const timestamp = new Date().getTime();
    tpCache[0] = tpCache[1];
    tpCache[1] = timestamp;
    if (tpCache[1] - tpCache[0] < 300) {
      console.log('double click');
    }
  }

  const post = props.news;
  useEffect(() => {
    document
      .getElementsByClassName('touch')[0]
      .addEventListener('touchstart', double_click);
  }, []);
  return (
    <article className="touch">
      <h1>{post.title}</h1>
      <span className="content">{post.content}</span>
      <div>
        <em>{post.categories[0] ? post.categories[0].name : ''}</em>
      </div>
      <div>likes</div>
    </article>
  );
}

NewsCard.propTypes = {
  news: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number
  ]),
};

export default NewsCard;
