import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createThunk, setForm } from '../redux/action/news';
import NavBar from './NavBar';

function CreateNews() {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.news.form);

  function submitForm() {
    const myForm = document.getElementById('post');
    dispatch(createThunk(myForm));
  }

  useEffect(() => {
    if (form === 'submitted') {
      setTimeout(() => dispatch(setForm('')), 2000);
    }
  }, [form]);

  return (
    <div className="app-news-create-wrapper">
      <header className="app-header">
        <NavBar />
      </header>
      <section className="app-news-create-form-wrapper">
        {form !== 'submitted' ? (
          <section>
            <h1>O que você está pensando no momento?</h1>
            <div className="father">
              <div className="form-test">
                <form method="POST" id="post">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Título?"
                    defaultValue=''
                    className='no-bg'
                  />
                  <textarea
                    id="content"
                    name="content"
                    rows="10"
                    required
                    placeholder="Escreva aqui seus pensamentos..."
                    className='no-bg'
                  />
                  <div className="app-news-create-form-hashtags no-bg">
                    #
                    <input
                      id="category"
                      name="categories"
                      type="text"
                      required
                      placeholder="Exemplo: Saúde, felicidade, tranquilidade, paz OU Saúde"
                      className='no-bg'
                    />
                  </div>
                </form>
              </div>
              <section className="app-news-create-lastnews ">
                <h2>Ferramentas de texto</h2>
                <div>Em breve...</div>
              </section>
            </div>
              <section className="publish-section">
                <button type="button" className='publish-button' onClick={submitForm}>
                  Publicar
                </button>
                <button type="button" className='cancel-button'>Cancelar</button>
              </section>
          </section>
        ) : (
          <section className="sucess-send-post">
            <div className="text-reveal">
              <h2>Enviado com sucesso!</h2>
            </div>
          </section>
        )}
      </section>
    </div>
  );
}

export default CreateNews;
