import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { byIdThunk } from '../redux/action/news';
import NewsCard from './NewsCard';
import NavBar from './NavBar';

function NewsDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(byIdThunk(id));
  }, []);

  const notice = useSelector((state) => state.news.specificNews);
  return (
    <>
      <header className="app-header">
        <NavBar />
      </header>
      <section className="app-news-details-wrapper">
        {notice ? <NewsCard news={notice} /> : <h2>Carregando Post...</h2>}
      </section>
    </>
  );
}

export default NewsDetails;
