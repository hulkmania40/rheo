import './App.css';
import MovieName from './components/MovieName';
import Screen from './components/Screen';
import MovieWrapper from './components/MovieWrapper';


function App() {
  return (
    <div className='App'>
      <MovieName />
      <MovieWrapper/>
      <Screen />
    </div>
  );
}

export default App;
