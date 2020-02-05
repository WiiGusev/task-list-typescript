import React from 'react';
import { useHistory } from "react-router-dom";
import { Button }from "@material-ui/core";

export const AboutPage: React.FC = () => {
  const history = useHistory();

  return (
    <>
    <h1>Страница информации</h1>
    <p>Приложение для учета выполненных задач</p>
    <Button 
      variant="contained" 
      color="primary" 
      onClick={() => history.push('/')}
    >
      К списку дел
    </Button>
    </>
  )
}