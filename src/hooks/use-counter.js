import { useState, useEffect } from "react";

const useCounter = (operation) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (operation === true || operation === "+" || operation === "plus") {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [operation]);
  return counter;
};

export default useCounter;
