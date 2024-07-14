"use client";
import { useEffect, useState } from "react";
import FramerAnimation from "./components/FramerAnimation";
import { getCurrentBrowserFingerPrint } from "@rajesh896/broprint.js";
import useTWVariableColor from "@/hooks/useTWVariableColor";
import { ThemeController } from "twdy-theme";
import useColors from "../app/components/testShades/composables/colors";

export default function Home() {
  const [state, setState] = useState([
    { id: 1, name: "name1" },
    { id: 2, name: "name2" },
    { id: 3, name: "name3" },
    { id: 4, name: "name4" },
    { id: 5, name: "name5" },
  ]);

  const [animateRemoval, setAnimateRemoval] = useState(false);

  const handleRemove = (id) => {
    setAnimateRemoval(true); // Trigger removal animation

    setTimeout(() => {
      const filteredState = state.filter((item) => item.id !== id);
      setState(filteredState);
      setAnimateRemoval(false); // Reset animation state
    }, 500); // Match the duration of the animation
  };

  const handleAddItem = () => {
    const newItem = {
      id: state.length + 1, // Generate a new ID
      name: `name${state.length + 1}`, // Example: Generate a new name
    };

    setState([...state, newItem]);
  };

  getCurrentBrowserFingerPrint().then((fingerprint) => {
    console.log(fingerprint, "fingerprint");
    // fingerprint is your unique browser id.
    // This is well tested

    // the result you receive here is the combination of Canvas fingerprint and audio fingerprint.
  });

  // const [primary, setPrimary] = useTWVariableColor({ variable: "primary" });

  // useEffect(() => {
  //   setPrimary("#9E77ED");
  // }, []);
  // const palette = useColors("#0ABF7A");
  // console.log(palette);

  const handleChange = (e) => {
    const palette = useColors(e.target.value);
    console.log(palette, "color");
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-primary-light dark:bg-primary-dark">
      <ThemeController />

      <input type="color" onChange={handleChange} />

      <div>
        {state.map((item, index) => (
          <div
            key={item.id}
            id={`item-${item.id}`}
            className={`flex justify-center items-center gap-2 ${
              animateRemoval && index === state.length - 1
                ? "animate-slideOutBottom"
                : "animate-slideInTop"
            }`}
          >
            <span>id:{item.id}</span>
            <span>name:{item.name}</span>
            <button onClick={() => handleRemove(item.id)}>x</button>
          </div>
        ))}
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleAddItem}
      >
        Add Item
      </button>

      <FramerAnimation />
    </main>
  );
}
