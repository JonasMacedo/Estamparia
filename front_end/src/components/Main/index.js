import React from 'react';

import { Container } from './style';

export default function Main() {
  return (
    <Container>
      <article>
        <h2>Testo</h2>
        <img alt="loja"/>
        <p>
          Ao contrário da crença popular, o Lorem Ipsum não é simplesmente texto aleatório. 
          Tem raízes numa peça de literatura clássica em Latim, de 45 AC, tornando-o com 
          mais de 2000 anos. Richard McClintock, um professor de Latim no Colégio 
          Hampden-Sydney, na Virgínia, procurou uma das palavras em Latim mais 
          obscuras (consectetur) numa passagem Lorem Ipsum, e atravessando as cidades do 
          mundo na literatura clássica, descobriu a sua origem. Lorem Ipsum vem das secções 
          1.10.32 e 1.10.33 do "de Finibus Bonorum et Malorum" (Os Extremos do Bem e do Mal), 
          por Cícero, escrito a 45AC. Este livro é um tratado na teoria da ética, muito popular 
          durante a Renascença. A primeira linha de Lorem Ipsum, "Lorem ipsum dolor sit amet..." 
          aparece de uma linha na secção 1.10.32.
        </p>
      </article>
        <aside>
          <h2>Onde estamos</h2>
          <p>Av. Rocha Pombo - Bairro Pacaembu nº 555, Cascavel-PR</p>
          <iframe/>
          <h2>Contatos</h2>
          <ul>
            <li><i class="fa fa-phone fa-lg"></i> (45)99781-4033</li>
            <li><i class="fa fa-phone fa-lg"></i> (45)99799-2584</li>
            <li><i class="fa fa-envelope fa-lg"></i> teste@fake.com</li>
          </ul>
        </aside>
    </Container>
  );
}
