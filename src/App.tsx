import React from 'react';
import { Button } from '@mui/material';
import './App.css';
import useStyles from './styles';
import CharacterList from './CharacterList';

// Componente principal de la aplicación
const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Futurama Characters</h1>
      <CharacterList />
    </div>
  );
};

export default App;