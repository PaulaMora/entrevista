import React, { useState } from 'react';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import { Character } from './types';
import './App.css';

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  const handleCharacterClick = (character: Character) => {
    setSelectedCharacter(character);
  };

  const handleBackClick = () => {
    setSelectedCharacter(null);
  };

  return (
    <div className="App">
      <h1>Futurama Characters</h1>
      {selectedCharacter ? (
        <div className="content-container">
          <CharacterDetail character={selectedCharacter} onBackClick={handleBackClick} />
        </div>
      ) : (
        <div className="content-container">
          <CharacterList onCharacterClick={handleCharacterClick} />
        </div>
      )}
    </div>
  );
}

export default App;
