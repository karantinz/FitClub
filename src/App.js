import './App.css';
import Reasons from './components/Reasons/Reasons';
import Hero from './components/hero/Hero';
import Plans from './components/plans/Plans';
import Programs from './components/programs/Programs';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Reasons/>
      <Plans/>
    </div>
  );
}

export default App;
