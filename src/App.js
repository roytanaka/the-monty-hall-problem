import { Route } from 'react-router';
import Home from './container/Home/Home';
import LetsMakeADeal from './container/LetsMakeADeal/LetsMakeADeal';
function App() {
  return (
    <main>
      <Route path="/" exact component={Home} />
      <Route path="/lets-make-a-deal" component={LetsMakeADeal} />
    </main>
  );
}

export default App;
