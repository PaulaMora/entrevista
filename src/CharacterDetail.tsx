import React from 'react';
import { Character } from './types';

interface CharacterDetailProps {
  character: Character;
  onBackClick: () => void;
}

const CharacterDetail: React.FC<CharacterDetailProps> = ({ character, onBackClick }) => {
  return (
    <div className="character-detail">
      <button onClick={onBackClick}>Back</button>
      <img src={character.images.main} alt={`${character.name.first} ${character.name.last}`} />
      <h2>{`${character.name.first} ${character.name.last}`}</h2>
      <p><strong>Occupation:</strong> {character.occupation}</p>
      <p><strong>Species:</strong> {character.species}</p>
      <p><strong>Age:</strong> {character.age}</p>
      <p><strong>Gender:</strong> {character.gender}</p>
      <div>
        <h3>Sayings:</h3>
        <ul>
          {character.sayings.map((saying, index) => (
            <li key={index}>{saying}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CharacterDetail;
