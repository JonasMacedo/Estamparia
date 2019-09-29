import React from 'react';

import { Container } from './style';

export default function NaveMenu() {
  return (
    <Container>
      <ul>
        <li><a>Home</a></li>
        <li><a>Produtos</a></li>
        <li><a>Contatos</a></li>
        <li><a>Serviços</a></li>
      </ul>
      <div>
        <a className="btn-facebook"> <i class="fa fa-facebook fa-lg"></i></a>
        <a className="btn-twitter"><i class="fa fa-twitter fa-lg"></i></a>
        <a className="btn-instagram"><i class="fa fa-instagram fa-lg"></i></a>
      </div>
    </Container>
  );
}
