import React, { useEffect, createContext, useContext, useReducer } from "react";
import { ituneReducer } from "./Reducer";

const URL = "https://itunes.apple.com/us/rss/topalbums/limit=100/json";
const Itune = createContext();

const Context = ({ children }) => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL);
      const data = await response.json();

      dispatch({
        type: "SET_SONGS",
        payload: data.feed.entry,
      });

      setCategories(data.feed.entry);
      setReleaseDates(data.feed.entry);
    };

    fetchData();
  }, []);

  const setCategories = (data) => {
    const category = data.reduce((acc, song) => {
      if (!acc.includes(song.category.attributes.label)) {
        acc.push(song.category.attributes.label);
      }
      return acc;
    }, []);

    dispatch({
      type: "SET_CATEGORIES",
      payload: category,
    });
  };

  const setReleaseDates = (data) => {
    const releasedates = data.reduce((acc, song) => {
      if (!acc.includes(song["im:releaseDate"].attributes.label)) {
        acc.push(song["im:releaseDate"].attributes.label);
      }
      return acc;
    }, []);

    dispatch({
      type: "SET_RELEASE_DATES",
      payload: releasedates.sort(),
    });
  };

  const [state, dispatch] = useReducer(ituneReducer, {
    songs: [],
    favourites: [],
    categories: [],
    releaseDates: [],
    searchQuery: "",
    filterByCategory: "",
    filterByReleaseDates: "",
  });

  return (
    <Itune.Provider value={{ state, dispatch }}>{children}</Itune.Provider>
  );
};

export const ItuneState = () => {
  return useContext(Itune);
};

export default Context;
