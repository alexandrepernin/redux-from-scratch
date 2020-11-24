import './App.css';
import { Counter } from './components/Counter'
import { Header } from './components/Header';

const App = ({ store }) =>  {
  
  return (
    <div className="App">
      <Header/>
      <Counter
      value={store.getState()}
      onIncrement={() =>
        store.dispatch({
          type: 'INCREMENT'
        })
      }
      onDecrement={() =>
        store.dispatch({
          type: 'DECREMENT'
        })
      }
    />
    </div>
  );
}

export default App;
