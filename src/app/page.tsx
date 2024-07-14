"use client";
import { useEffect, useState } from "react";
import FramerAnimation from "./components/FramerAnimation";
import { getCurrentBrowserFingerPrint } from "@rajesh896/broprint.js";
import useTWVariableColor from "@/hooks/useTWVariableColor";
import { ThemeController, useTheme } from "twdy-theme";
import useColors from "../app/components/testShades/composables/colors";
import ColorPalette from "./components/ColorPalette";
import Palette from "./components/Palette";

export default function Home() {
  getCurrentBrowserFingerPrint().then((fingerprint) => {
    console.log(fingerprint, "fingerprint");
    // fingerprint is your unique browser id.
    // This is well tested

    // the result you receive here is the combination of Canvas fingerprint and audio fingerprint.
  });

  const {
    theme,
    changeTheme,
    themeList,
    toggleTheme,
    removeTheme,
    toggleDarkMode,
  } = useTheme();

  const handleChangePrimary = (e: { target: { value: any } }) => {
    changeTheme({
      name: theme?.name,
      colorVars: {
        primary: e.target.value,
        secondary: theme?.colorVars?.secondary,
      },
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-primary-light dark:bg-primary-dark">
      <div>
        <ColorPalette />
        <Palette
          variable="primary"
          value={theme?.colorVars?.primary}
          onChange={handleChangePrimary}
        />
      </div>
    </main>
  );
}
