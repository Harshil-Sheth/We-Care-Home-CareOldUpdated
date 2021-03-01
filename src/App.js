import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/HomePage.jsx';
import 'antd/dist/antd.css';
import BookServicePage from './views/BookServicePage/BookServicePage';
import SignInAndSignUpPage from './views/sign-in-sign-up-page/sign-in-sign-up.components';

function App() {
  return (
    <Router>
      {/* <Home /> */}
      <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/book' component={BookServicePage} />
    <Route path='/signin' component={SignInAndSignUpPage} />
      {/* <BookServicePage /> */}
      </Switch>
    </Router>
  );
}

export default App;
