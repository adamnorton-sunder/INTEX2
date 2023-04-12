import { Auth } from "aws-amplify";
import { createContext, useState } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  login: (username: string, password: string) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  login: async () => {}, // add a login function
});


export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (username: string, password: string) => {
    try {
      await Auth.signIn(username, password);
      setIsAuthenticated(true);
    } catch (error) {
      console.log("Error signing in:", error);
    }
  };

  const authContextValue: AuthContextType = {
    isAuthenticated,
    setIsAuthenticated,
    login,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
