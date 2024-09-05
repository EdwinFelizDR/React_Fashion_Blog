import './App.css';
import Article from './components/Article';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
         <Article/>
      </main>
      <Footer/>   
    </div>
  );
}

export default App;
