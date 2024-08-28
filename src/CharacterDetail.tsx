import React, { useState } from 'react';
import { Character } from './types';
import './CharacterDetail.css';

interface CharacterDetailProps {
  character: Character;
  onBackClick: () => void;
}

function CharacterDetail({ character, onBackClick }: CharacterDetailProps) {
  const [showFullSayings, setShowFullSayings] = useState(false);

  const toggleSayings = () => {
    setShowFullSayings(!showFullSayings);
  };

  return (
    <div className="character-detail">
      <img src={character.images.main} alt={`${character.name.first} ${character.name.middle} ${character.name.last}`} />
      <div className="character-detail-content">
        <h2>{`${character.name.first} ${character.name.last}`}</h2>
        <p>
          <strong>Occupation:</strong>
          {character.occupation}
        </p>
        <p>
          <strong>Species:</strong>
          {character.species}
        </p>
        <p>
          <strong>Age:</strong>
          {character.age}
        </p>
        <p>
          <strong>Gender:</strong>
          {character.gender}
        </p>
        <div>
          <h3>Sayings:</h3>
          <ul className={`character-sayings ${showFullSayings ? 'expanded' : 'collapsed'}`}>
            {character.sayings.map((saying) => (
              <li key={saying}>{saying}</li>
            ))}
          </ul>

          {character.sayings.length > 1 && (
            <button type="button" onClick={toggleSayings}>
              {showFullSayings ? 'Ver menos' : 'Ver más'}
            </button>
          )}
        </div>
        <button type="button" className="close" onClick={onBackClick}>Cerrar</button>
      </div>
    </div>
  );
}

export default CharacterDetail;
