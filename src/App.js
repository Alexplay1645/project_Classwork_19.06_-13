import logo from './logo.svg';
import React from 'react';
import './App.css';
import { GreatPerson } from './GreatPerson'; // задание 2
import { Myquote } from './Quete'; // задание 4
import { ThemeSwitcher } from './ThemeSwitcher'; // задание 1
import { ColorToggle } from './ColorToggle';


function App() {
  return (
    <div className="App">

      {/* 4 задания  */}
      {/* <Myquote text="Телевизор отупляет и убивает много времени.
      Выключите его, и вы сохраните несколько клеток вашего мозга. Однако
      будьте осторожны
      — отупеть можно и за компьютером Apple"></Myquote>

      <Myquote text="Будь честен с самим собой, и с людьми, всегда делай все вовремя, никогда не сдавайся,
      иди к своим целям, даже если все плохо">
      </Myquote> */}

      {/* 2 задания  */}
      <GreatPerson name="Миямото Мусаси"
        birthDate="1584 — 1645"
        photo="Musashi.jpg"
        bio="Миямото Мусаси — это легендарный японский ронин (самурай без господина), мастер фехтования и философ, известный как непревзойдённый воин и автор философско-боевой книги «Книга пяти колец».">
        </GreatPerson>

       {/* 1 задания */}
       {/* <ThemeSwitcher/> */}

       {/* 3 задания */}
       {/* <ColorToggle></ColorToggle> */}
    </div>
      );
    }





export default App;
