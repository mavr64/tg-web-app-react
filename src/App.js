import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import {Route, Routes} from 'react-router-dom';
import Form from "./components/Form/Form";
import ProductList from "./components/ProductList/ProductList";

function App() {
    const {user, onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    })

  return (
      <div className="App">
          <Header />
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo"/>
              <p>
                  Учебный проект МиниАпп Телеграм.
              </p>
              <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  Learn React
              </a>
              <button onClick={onToggleButton}>Toggle</button>
              <span className={'username'}>{user?.username}</span>
          </header>
          <Routes>
              <Route index element={<ProductList />} />
              <Route path={'form'} element={<Form />} />
          </Routes>
      </div>
  );
}

export default App;
/*
* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
* */