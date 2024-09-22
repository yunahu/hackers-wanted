import React, {useState, useContext, useEffect} from 'react'

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider(props) {
    const [user, setUser] = useState();

    useEffect(() => {
        const run = async () => {
          try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/user`, {
                method: 'GET',
                credentials: "include"
            });

            if (!response.ok) throw new Error('Unable to fetch user.');

            const userData = await response.json();
            setUser(userData.user);

          } catch (err) {
            console.error(err);
            setUser(null);
          }
          
        };

        run();
      }, []);

    const value = {
        user, 
        setUser
    }

    return (<AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>)
}