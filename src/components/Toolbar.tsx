import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar} from '@material-ui/core';

export const ToolBar: React.FC = () => (                
  <AppBar className="toolbar" position="static">
    <Toolbar>
      <h1>Список задач</h1>
      <ul className="nav-list">
        <li className="nav-list__item">
          <NavLink to="/">Список задач</NavLink>
        </li>
        <li className="nav-list__item">
          <NavLink to="/about">Информация</NavLink>
        </li>
      </ul>
    </Toolbar>
  </AppBar>
)