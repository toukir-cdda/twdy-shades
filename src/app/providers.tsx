"use client";
import React from "react";
import { ThemeProvider } from "twdy-theme";

const Providers = ({ children }: any) => {
  return (
    <ThemeProvider
      themeLoader={<div>looooooooooooooooooooooging............</div>}
    >
      {children}
    </ThemeProvider>
  );
};

export default Providers;
