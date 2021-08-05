import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { BooksList } from './views/books-list';
import { SingleBook } from './views/single-book';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/book/:id" exact component={(props) => <SingleBook {...props} />} />
        <Route path="/" exact component={(props) => <BooksList {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;
