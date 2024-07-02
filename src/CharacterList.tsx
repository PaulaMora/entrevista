import React, { useEffect, useState } from 'react';
import { getCharacters } from './api';
import { Character } from './types';

interface CharacterListProps {
  onCharacterClick: (character: Character) => void;
}

const CharacterList: React.FC<CharacterListProps> = ({ onCharacterClick }) => {
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
    <div className="character-list">
      {characters.map((character) => (
        <div
          key={character.id}
          className="character-card"
          onClick={() => onCharacterClick(character)}
        >
          <img src={character.images.main} alt={`${character.name.first} ${character.name.last}`} />
          <h2>{`${character.name.first} ${character.name.last}`}</h2>
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
