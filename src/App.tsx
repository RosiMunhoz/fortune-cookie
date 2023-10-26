import { useState } from 'react';
import cookie from './assets/biscoito.png';
import breakTCookie from './assets/biscoitoab.png';

import Button from './components/Button';
import Phrase from './components/Phrase';

import Container from './components/layouts/Container';

function App() {

  const [textPhrase, setTextPhrase] = useState('...');
  const [imgCookie, setImgCookie] = useState(cookie);

  function breakCookie(){
    const numberRandom = Math.floor(Math.random() * phrases.length)

    setImgCookie(breakTCookie);
    setTextPhrase(phrases[numberRandom]);
  }

  function clearCookie(){
    setTextPhrase('...');
    setImgCookie(cookie);
  }

  const phrases = [
    'Inspire-se nos bons e aprenda com sua sabedoria e virtude.',
    'Equilibrar o bom-senso com conhecimento é a chave para a sabedoria.',
    'O riso, uma linguaguem universal, aproxima almas e corações.',
    'Liberte-se das preocupações e abrace a felicidade em cada momento.',
    'Busque o óbvio, imagine o improvável e alcance o inalcançável.',
    'Siga os bons e aprenda com eles.',
    'Acredite em milagres, mas não dependa deles.',
    'Tenha fé em milagres, mas trabalhe arduamente para alcançar seus objetivos.',
    'Deixe de lado as preocupações e seja feliz.',
    'O riso é a menor distância entre duas pessoas.',
    'A maior barreira para o sucesso é o medo do fracasso.',
    'O bom-senso vale mais do que muito conhecimento.'
  ];

  return (
    <Container>
      <img src={imgCookie} className="w-72 h-72"/>
      <Button name='OPEN COOKIE' action={breakCookie}/>
      {textPhrase !== '...' && <Button name='CLEAR COOKIE' action={clearCookie}/>}
      <Phrase phrase={textPhrase}/>
    </Container>
  )
}

export default App;
