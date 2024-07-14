"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeController } from "twr-theme";

export default function FramerAnimation() {
  const [state, setState] = useState([
    { id: 1, name: "name1" },
    { id: 2, name: "name2" },
    { id: 3, name: "name3" },
    { id: 4, name: "name4" },
    { id: 5, name: "name5" },
  ]);

  const handleRemove = (id) => {
    const filteredState = state.filter((item) => item.id !== id);
    setState(filteredState);
  };

  const handleAddItem = () => {
    const newItem = {
      id: state.length + 1,
      name: `name${state.length + 1}`,
    };
    setState([...state, newItem]);
  };

  return (
    <main className="flex min-h-screen flex-col items-center  p-24 bg-primary-light dark:bg-primary-dark">
      <AnimatePresence>
        {state.map((item) => (
          <motion.div
            key={item.id}
            id={`item-${item.id}`}
            className="flex justify-center items-center gap-2"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <span>id:{item.id}</span>
            <span>name:{item.name}</span>
            <button onClick={() => handleRemove(item.id)}>x</button>
          </motion.div>
        ))}
      </AnimatePresence>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleAddItem}
      >
        Add Item
      </button>
    </main>
  );
}
