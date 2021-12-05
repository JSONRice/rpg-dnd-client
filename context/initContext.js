import { createContext } from 'react';

export function initializeStore(initialState = {}) {
  return createContext(
    initialState,
  );
}