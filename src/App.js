import './App.css';
import Menu from './menu/menu';
import Personajes from './components/personajes';
import Episodios from './components/episodios';
import Citas from './components/citas';
import Footer from './components/footer';
import Home from './home/home';


function renderContent() {
  const currentURL  = window.location.pathname;
  switch (currentURL) { 
    case '/':
      return <Home />
    case '/personajes':
      return <Personajes />
    case '/citas':
      return <Citas />
    case '/episodios':
      return <Episodios />
    default:
      return <Home />
  }
}



function App() {
  return (
    <div className="App">
      <Menu/>
      <main>
        {renderContent()}
      </main>
      <Footer/>
        
      
      
    </div>
  );
}

export default App;
