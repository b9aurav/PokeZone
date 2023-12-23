"use client"
import React, { createContext, useState, useEffect } from 'react';

type PokeContextType = {
  data: any;
};

export const PokeContext = createContext<PokeContextType>({ data: null });

export const PokeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('An error occurred while fetching the data:', error);
      });
  }, []);

  return (
    <PokeContext.Provider value={{ data }}>
      {children}
    </PokeContext.Provider>
  );
};