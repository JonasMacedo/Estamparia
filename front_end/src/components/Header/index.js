import React from 'react';

import {MdSearch} from 'react-icons/md';

import MenuNave from '../NaveMenu/index';
import Conteudo from '../Main/index';
import Footer from '../Footer/index';
import Send from '../Send/index';

import { Container } from './style';

export default function Header() {
  return (
    <>
      <Container>
        <h1>
          <a title="Logo">EstampasBrasil - Loja de Estamparias</a>
        </h1>
        <form>
          <input type="text" placeholder="Buscar por..."></input>
          <button> <MdSearch/> </button>
        </form>
      </Container>
      <MenuNave/>
      <Conteudo/>
      <Send/>
      <Footer/>
    </>
  );
}
