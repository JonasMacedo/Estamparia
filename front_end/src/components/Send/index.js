import React from 'react';

import { Container } from './style';

export default function Send() {
  return (
    <Container>
        <h3>News</h3>
        <p>Crie camisas personalizadas, receba promoções, brindes e descontos exclusivos.</p>
        <p>Tudo em seu email.</p>
        <form>
          <input type="text" placeholder="Seu nome"></input>
          <input type="text" placeholder="Seu email"></input>
          <button>Cadastrar</button>
        </form>
    </Container>
  );
}
