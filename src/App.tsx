import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Container } from '@material-ui/core';
import { ToolBar } from './components/Toolbar';
import { TodoPage } from './pages/TodosPage';
import { AboutPage } from './pages/AboutPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ToolBar/>
      <Container>
        <Switch>
          <Route component={TodoPage} path='/' exact/>
          <Route component={AboutPage} path='/about' />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
