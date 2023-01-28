import React, { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setForm } from '../redux/action/news';
import loginUserThunk from '../redux/action/login'
import NavBar from './NavBar';

function Login() {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.news.form);
  let navigate = useNavigate();

  function submitForm() {
    const myForm = document.getElementById('user-post');
    dispatch(loginUserThunk(myForm));
  }

  const redirect = useCallback(() => {
    navigate('/', {
      replace: true
    })
  }, [navigate])

  useEffect(() => {
    if (form === 'submitted') {
      setTimeout(() => {
        dispatch(setForm(''));
        redirect()
      }, 2000);
    }
  }, [form, dispatch, redirect]);

  return (
    <div className="app-news-create-wrapper">
      <header className="app-header">
        <NavBar />
      </header>
      <section className="app-news-create-form-wrapper correction">
        {form === '' || form === 'error' ? (
          <section className="user-section-wrapper">
            <h1>Preencha os campos abaixo</h1>
            <em
              style={{ color: 'red' }}
            >{`Olá, obrigado por estar de volta e testar a aplicação :)`}</em>
            <div className="father no-bg-no-border">
              <div className="form-test">
                <form method="POST" id="user-post">
                  <div className="create-user-form">
                    <div>Email:</div>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="Seu email"
                      className="no-bg"
                    />
                  </div>
                  <div className="create-user-form">
                    <div>Password:</div>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      placeholder="Sua senha"
                      className="no-bg"
                    />
                  </div>
                </form>
              </div>
            </div>
            <section className="publish-section">
              <button
                type="button"
                className="publish-button nf ma"
                onClick={submitForm}
              >
                Entrar
              </button>
            </section>
          </section>
        ) : (
          <section className="sucess-send-post">
            <div className="text-reveal2">
              <h2>Aguarde...</h2>
            </div>
          </section>
        )}
      </section>
      { 
        form === 'error' && (<div> Dados incorretos </div>)
      }
    </div>
  );
}

export default Login;
