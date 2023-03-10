import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createUserThunk, setForm } from '../redux/action/news';
import NavBar from './NavBar';

function CreateUser() {
  const dispatch = useDispatch();
  const [err, setErr] = useState(false);
  const form = useSelector((state) => state.news.form);
  let navigate = useNavigate();

  function submitForm() {
    const myForm = document.getElementById('user-post');
    const err = dispatch(createUserThunk(myForm));
    if (err) {
      setErr(true)
    }
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
        {form !== 'submitted' ? (
          <section className="user-section-wrapper">
            <h1>Preencha os campos abaixo</h1>
            <em
              style={{ color: 'red' }}
            >{`Essa é uma aplicação da testes, utilize dados ficticios. Apenas lembre-se quando for fazer Log-in.`}</em>
            <div className="father no-bg-no-border">
              <div className="form-test">
                <form method="POST" id="user-post">
                  <div className="create-user-form">
                    <div>Nome:</div>
                    <input
                      type="text"
                      name="displayName"
                      id="name"
                      min="6"
                      required
                      placeholder="mínimo 4 caractere"
                      defaultValue=""
                      className="no-bg"
                    />
                  </div>
                  <div className="create-user-form">
                    <div>Email:</div>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="exemplo: test@test.com"
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
                      placeholder="mínimo 6 caractere"
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
                Criar Conta
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
        err && (<div> Dados inválidos, atente-se as regras.</div>)
      }
    </div>
  );
}

export default CreateUser;
