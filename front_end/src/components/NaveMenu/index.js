import React from 'react';

import { Container } from './style';

export default function NaveMenu() {
  return (
    <Container>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Produtos</a></li>
        <li><a href="#">Contatos</a></li>
        <li><a href="#">Serviços</a></li>
      </ul>
      <div>
        <a href="#" className="btn-facebook"> <i class="fa fa-facebook fa-lg"></i></a>
        <a href="#" className="btn-twitter"><i class="fa fa-twitter fa-lg"></i></a>
        <a href="#" className="btn-instagram"><i class="fa fa-instagram fa-lg"></i></a>
      </div>
    </Container>
  );
}
