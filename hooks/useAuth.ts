// ResidenceHubNative/hooks/useAuth.ts
import { useState } from 'react';
import { Alert } from 'react-native';

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      if (password !== "123456") {
        throw new Error("Senha incorreta");
      }
      Alert.alert("Sucesso!", "Login realizado com sucesso!");
      setUserEmail(email);
      setIsLoggedIn(true);
      return true;
    } catch (err) {
      Alert.alert("Erro no Login", "E-mail ou senha incorretos.");
      return false;
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserEmail("");
  };

  return {
    isLoggedIn,
    userEmail,
    login,
    logout,
  };
};