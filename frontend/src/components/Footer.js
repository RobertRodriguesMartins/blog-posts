import React from 'react';
import { DiGithubFull } from 'react-icons/di';
import { BsLinkedin } from 'react-icons/bs';

function Footer() {
  return (
    <section className="footer-section">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/robert-martins/"
        className="share-linkedin"
      >
        <BsLinkedin />
      </a>
      <p>
        Desenvolvido por <em>Robert Rodrigues Martins</em>
      </p>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/RobertRodriguesMartins"
      >
        <DiGithubFull />
      </a>
    </section>
  );
}

export default Footer;
