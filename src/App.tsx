import React, { useState } from 'react';
import './App.css';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import { Character } from './types';

const App: React.FC = () => {
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
        <CharacterDetail character={selectedCharacter} onBackClick={handleBackClick} />
      ) : (
        <CharacterList onCharacterClick={handleCharacterClick} />
      )}
    </div>
  );
};

export default App;
