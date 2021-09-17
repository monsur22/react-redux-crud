import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import List from './components/List';
import Add from './components/Add';
import Edit from './components/Edit';

function App() {
  return (
    <Router>
      <Header/>
        <Route path="/" component={List} exact></Route>
        <Route path="/add" component={Add} exact></Route>
        <Route path="/edit/:id" component={Edit} exact></Route>



    </Router>
  );
}

export default App;
