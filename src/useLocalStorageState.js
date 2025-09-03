import { useState, useEffect } from "react";

export function useLocalStorageState(initialState) {
  const [watched, setWatched] = useState(function () {
    const storage = localStorage.getItem("watched");
    return storage ? JSON.parse(storage) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem("watched", JSON.stringify(watched));
    },
    [watched]
  );

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteWatched(id) {
    setWatched(watched.filter((movie) => movie.imdbId !== id));
  }

  return { watched, handleAddWatched, handleDeleteWatched };
}
