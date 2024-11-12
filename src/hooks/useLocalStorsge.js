import { useEffect, useState } from "react";

export function useLocalStorage(key, initialData) {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    //useEffect ka use isliye kiya kyuki infinite rendering na ho.
    const existingData = JSON.parse(localStorage.getItem(key)); //localStorage se existing Data lena

    if (existingData) {
      //Agar data exist karta hai to usi data ko override krke new data save kr lena
      setData(existingData);
    } else {
      //Agar data exist nahi karta hai to new Data set kr dena
      localStorage.setItem(key, JSON.stringify(initialData));
    }
  }, []);

  const updateLocalStorage = (newData) => {
    //LocalStorage me Data save karna.

    if (typeof newData === "function") {
      localStorage.setItem(key, JSON.stringify(newData(data)));
    } else {
      localStorage.setItem(key, JSON.stringify(newData));
    }

    setData(newData);
  };
  return [data, updateLocalStorage];
}
