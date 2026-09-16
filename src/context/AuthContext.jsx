import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState([]);

  // ჩატვირთვისას შევამოწმოთ localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem('kera_user');
    const savedFavs = localStorage.getItem('kera_favorites');
    if (savedUser) setUser(JSON.parse(savedUser));
    if (savedFavs) setFavorites(JSON.parse(savedFavs));
  }, []);

  // რეგისტრაცია
  const registerUser = (userData) => {
    const users = JSON.parse(localStorage.getItem('kera_registered_users') || '[]');
    const existing = users.find(u => u.email === userData.email);
    
    if (existing) {
      throw new Error('USER_EXISTS');
    }

    users.push(userData);
    localStorage.setItem('kera_registered_users', JSON.stringify(users));
    
    // ავტომატური შესვლა
    setUser(userData);
    localStorage.setItem('kera_user', JSON.stringify(userData));
  };

  // შესვლა (Login)
  const loginUser = (email, password) => {
    const users = JSON.parse(localStorage.getItem('kera_registered_users') || '[]');
    const found = users.find(u => u.email === email && u.password === password);

    if (!found) {
      throw new Error('INVALID_CREDENTIALS');
    }

    setUser(found);
    localStorage.setItem('kera_user', JSON.stringify(found));
  };

  // გამოსვლა (Logout)
  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem('kera_user');
  };

  // რჩეულებში დამატება / ამოღება
  const toggleFavorite = (projectId) => {
    setFavorites(prev => {
      const updated = prev.includes(projectId)
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId];
      localStorage.setItem('kera_favorites', JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <AuthContext.Provider value={{ user, favorites, registerUser, loginUser, logoutUser, toggleFavorite }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);