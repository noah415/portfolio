import React, { createContext, useContext } from 'react';

export const RevealContext = createContext<React.RefObject<HTMLDivElement | null> | null>(null);

export const useRevealRoot = () => useContext(RevealContext);
