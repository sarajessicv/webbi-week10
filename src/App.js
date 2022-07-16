import './App.css';
import MyContainer from './components/MyContainer.js'
import About from './components/About.js'
import Header from './components/Header.js'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useTranslation } from 'react-i18next';

function App() {

  const { t, i18n } = useTranslation();
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/" element={<> <p>{t("This is the front page")}</p> <MyContainer></MyContainer> </> } />
          <Route path="/about" element={<About />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
