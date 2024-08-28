import React, { useEffect, useState } from 'react';
import { getCharacters } from './api';
import { Character } from './types';
import './CharacterList.css';

interface CharacterListProps {
  onCharacterClick: (character: Character) => void;
}

function CharacterList({ onCharacterClick }: CharacterListProps) {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const data = await getCharacters();
        setCharacters(data);
      } catch (err) {
        setError('Failed to fetch characters.');
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="character-list-container">
      <div className="character-list">
        {characters.map((character) => (
          <div key={character.id} className="character-container">
            <div
              className="character-card"
              onClick={() => onCharacterClick(character)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') onCharacterClick(character);
              }}
              role="button"
              tabIndex={0}
            >
              <img src={character.images.main} alt={`${character.name.first} ${character.name.last}`} />
            </div>
            <h2>{`${character.name.first} ${character.name.last}`}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CharacterList;
