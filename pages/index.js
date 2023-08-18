import React, { useState, useEffect } from 'react';
import Link from 'next/link';

function Home() {
  const [characters, setCharacters] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters')
      .then(response => response.json())
      .then(data => setCharacters(data));
  }, []);

  const filteredCharacters = characters.filter(
    character =>
      character.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      character.house.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search by name or house"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="p-4 pr-12 rounded-md border shadow-sm focus:ring focus:ring-blue-300 w-full bg-white text-black" /* Adjusted text color */
        />
        {searchQuery && (
          <button
            className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
            onClick={() => setSearchQuery('')}
          >
            {/* Your SVG code for the clear button */}
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredCharacters.length === 0 ? (
          <p className="col-span-2 text-center text-red-500">
            No results found.
          </p>
        ) : (
          filteredCharacters.map(character => (
            <Link key={character.name} href={`/characters/${character.name}`}>
              <div className="bg-black p-4 shadow-md rounded-md cursor-pointer hover:bg-red-100 transition">
                <h2 className="text-xl font-semibold text-white">{character.name}</h2> {/* Adjusted text color */}
                <p className="text-gray-600">Date of Birth: {character.dateOfBirth}</p>
                {/* Display wand details */}
                {character.wand && (
                  <p className="mt-2 text-sm text-gray-500">
                    Wand: {character.wand.wood}, {character.wand.core}, {character.wand.length}
                  </p>
                )}
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;