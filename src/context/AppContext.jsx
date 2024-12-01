import React, {useState, useContext, useEffect} from 'react'

const AppContext = React.createContext();

export function useApp() {
    return useContext(AppContext);
}

export function AppProvider(props) {
    const [user, setUser] = useState();
    const [scrollPosition, setScrollPosition] = useState(0);
    const [ postList, setPostList ] = useState([]);
    const [ offset, setOffset ] = useState(0);
    const [selectedTags, changeSelectedTags] = useState([]);
		const [endReached, setEndReached] = useState(false);

    const setSelectedTags = (tags) => {
      setPostList([]);
      setScrollPosition(0);
      setOffset(0);
      changeSelectedTags(tags);
    }

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
        setUser,
        scrollPosition,
        setScrollPosition,
        postList,
        setPostList,
        offset,
        setOffset,
        selectedTags,
        setSelectedTags,
				endReached,
				setEndReached
    }

    return (<AppContext.Provider value={value}>{props.children}</AppContext.Provider>)
}