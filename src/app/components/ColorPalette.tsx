import React, { useState } from "react";
import useColors from "../components/testShades/composables/colors";

const colors = {
  "25": "#FAF7F5",
  "50": "#F7F4F0",
  "100": "#EDE4DD",
  "200": "#D4BFB2",
  "300": "#B89688",
  "400": "#855148",
  "500": "#501b1b",
  "600": "#471616",
  "700": "#3B0F0F",
  "800": "#300A0A",
  "900": "#240505",
  "950": "#170202",
};

const ColorPalette = () => {
  const [state, setState] = useState({});
  const handleCopy = (color) => {
    navigator.clipboard
      .writeText(color)
      .then(() => {
        alert(`Copied ${color} to clipboard`);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const handleChange = (e) => {
    const palette = useColors(e.target.value);
    setState(palette);
  };

  console.log(state);

  return (
    <div>
      <input type="color" onChange={handleChange} />
      <div className="flex flex-wrap">
        {Object.keys(state).length > 0 ? (
          Object.entries(state?.colors).map(([shade, color]) => (
            <div
              key={shade}
              className="w-24 h-24 m-2 flex flex-col items-center justify-center"
              style={{ backgroundColor: color }}
            >
              <span
                className={`text-xs ${
                  parseInt(shade) <= 500 ? "text-gray-900" : "text-white"
                }`}
              >
                {shade}
              </span>

              <span
                className={`text-xs ${
                  parseInt(shade) <= 500 ? "text-gray-900" : "text-white"
                }`}
              >
                {color}
              </span>
              <button
                className={`mt-1 p-1 bg-gray-200 bg-opacity-50 text-xs rounded ${
                  parseInt(shade) <= 500 ? "text-gray-900" : "text-white"
                }`}
                onClick={() => handleCopy(color)}
              >
                Copy
              </button>
            </div>
          ))
        ) : (
          <div>please select color for shade</div>
        )}
      </div>
    </div>
  );
};

export default ColorPalette;
