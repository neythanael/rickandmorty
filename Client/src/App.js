import { useState, useEffect} from 'react';
import './App.css';
import Nav from './components/Nav/Nav.jsx';
import Cards from './components/Cards/Cards.jsx';
import { Routes, Route, useLocation, useNavigate, } from 'react-router-dom';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Error from './components/Error/Error.jsx';
import Form from './components/Form/Form.jsx';
import Favorites from './components/Favorites/favorites';
import axios from 'axios';




function App() {
  const [characters, setCharacters] = useState([])

  function onClose(id) {
    setCharacters(characters.filter(char => char.id !== id))
  };

  function onSearch(id) {
    fetch(`http://localhost:3001/rickandmorty/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          characters.find((element) => element.id === data.id) === undefined
            ? setCharacters((characters) => [...characters, data])
            : alert("Personaje repetido, proba otro");
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }
  function random() {
    let randomId = Math.floor(Math.random() * 826)
    onSearch(randomId)
  };

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = 'ejemplo@gmail.com';
  const password = '1password';

  function login(userData) {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
       const { access } = data;
       setAccess(data);
       access && navigate('/home');
    });
 }

   useEffect(() => {
    !access && navigate('/');
  }, [access, navigate]);

  const location = useLocation();
  function logout(){
    setAccess(false); 
  }
  return (
    <div className='App' style={{ padding: '25px' }}>
      {location.pathname !== '/' && <Nav onSearch={onSearch} random={random} logout={logout} />}

      <Routes>
        <Route exact path='/' element={<Form login={login}/>}></Route>
        <Route exact path='/home' element={<Cards characters={characters} onClose={onClose} />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/detail/:detailId' element={<Detail />} />
        <Route exact path='*' element={<Error />} />
        <Route exact path='/favorites'element={<Favorites/>} ></Route>
      </Routes>
    </div>
  )
}
export default App
