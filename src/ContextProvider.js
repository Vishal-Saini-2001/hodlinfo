import React, { createContext, useState } from 'react';

// Create the context
const StateContext = createContext();

// Create a provider component
const StateProvider = ({ children }) => {
  // Create a useState variable that can be accessed by child components
  const [dark, setDark] = useState(true);

  // Return the provider with the state and setState function
  return (
    <StateContext.Provider value={{ dark, setDark }}>
      {children}
    </StateContext.Provider>
  );
};

export { StateContext, StateProvider };
