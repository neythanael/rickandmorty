import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/nav.jsx'
import { Routes, Route } from  'react-router-dom' 
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail.jsx'

function App() {
  const [characters, setCharacters] = useState([])

  function onClose(id) {
    setCharacters(characters.filter(char => char.id !== id))
  };

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          characters.find((element) => element.id === data.id) === undefined
            ? setCharacters((characters) => [...characters, data])
            : alert("Personaje repetido, proba otro pelotudo");
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }
  function random() {
    let randomId = Math.floor(Math.random() * 826)
    onSearch(randomId)
  };

  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav onSearch={onSearch} random={random} />

      <Routes>
        <Route path='/home.' element={<Cards characters={characters} onClose={onClose} />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:detailId' element={<Detail />} />
      </Routes>
    </div>
  )
}
export default App
