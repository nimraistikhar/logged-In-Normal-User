import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { GlobalStyles } from './globalstyles';
import Submission from './components/Submission';
import Updates from './components/Updates';
import Submit from './components/Submit-art';
import Team from './components/Team';
import Contact from './components/Contact';
import Join from './components/Join';
import SubmitMusic from './components/SubmitMusic';
import Account from './components/Account';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Route exact path="/" component={Submission} />
      <Route path="/updates" component={Updates} />
      <Route path="/submit" component={Submit} />
      <Route path="/music" component={SubmitMusic} />
      <Route path="/account" component={Account} />
      <Route path="/join" component={Join} />
      <Route path="/contact" component={Contact} />
      <Route path="/team" component={Team} />
    </Router>
  );
}

export default App;
