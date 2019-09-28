import React from 'react';

import { Container } from './style';

export default function Header() {
  return (
    <Container>
      <h1>
        <a href="#" title="Logo">NetInfo - Loja de Informatica</a>
      </h1>
      <form>
        <input type="text" placeholder="Buscar por..."></input>
        <button>Buscar</button>
      </form>
      
    </Container>
  );
}
