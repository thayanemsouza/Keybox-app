import React, { createContext, useState } from "react";

export const PasswordContext = createContext();

export const PasswordProvider = ({ children }) => {
  const [savedPasswords, setSavedPasswords] = useState([]);

  const addPassword = (password) => {
    setSavedPasswords((prev) => [...prev, password]);
  };

  return (
    <PasswordContext.Provider value={{ savedPasswords, addPassword }}>
      {children}
    </PasswordContext.Provider>
  );
};
