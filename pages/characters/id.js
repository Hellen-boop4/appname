import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function CharacterDetail() {
    const router = useRouter();
    const characterId = router.query.id;
    const [character, setCharacter] = useState(null);
  
    useEffect(() => {
      if (characterId) {
        fetchCharacterDetails();
      }
    }, [characterId]);
  
    const fetchCharacterDetails = async () => {
      try {
        const response = await fetch(`https://hp-api.onrender.com/api/characters/${characterId}`);
        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        console.error('Error fetching character details:', error);
      }
    };
  
    if (!character) {
      return <div>Loading...</div>;
    }
  
    return (
        <div className="bg-white p-4 shadow-md rounded-md">
          <h2 className="text-xl font-semibold">{character.name}</h2>
          <p>Role: {character.role}</p>
          <p>House: {character.house}</p>
          {/* Display other details as needed */}
        </div>
      );
      
  }
  
  export default CharacterDetail;
  