import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import NewsCard from './NewsCard';

function News() {
  const { allNews } = useSelector((state) => state.news);

  useEffect(() => {
    console.log('Wip...');
  }, [allNews]);
  return (
    <section className="app-news-card-wrapper">
      <section className="app-news-card-article-wrapper">
        {allNews && allNews[0] ? (
          allNews.map((post) => {
            return <NewsCard news={post} key={post.id + Math.random()} />;
          })
        ) : allNews[0] === 0 ? (
          <h2>{`Ainda sem publicações, seja o primeiro! <3`}</h2>
        ) : (
          <h2 className="post-loading">Carregando posts... :0</h2>
        )}
      </section>
    </section>
  );
}

export default News;
