import { useEffect, useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCounter = window.localStorage.getItem("counter");
      if (savedCounter !== null) {
        setCounter(parseInt(savedCounter));
      }
    }
  }, []);

  const addToCounter = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
    window.localStorage.setItem("counter", newCounter);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <button 
        onClick={addToCounter}
        >
        <p>I am a button! Number of times I have been clicked: <span id="counter">{counter}</span> </p>
      </button>

    </main>
  );
}
