"use client";

import {
  ThemeProvider as NextThemesProvider,
  useTheme,
  type ThemeProviderProps,
} from "next-themes";
import { useEffect } from "react";

function SystemThemeSync() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    try {
      window.localStorage.removeItem("theme");
    } catch {
      // Ignore storage access errors in restricted browser contexts
    }
    if (theme !== "system") {
      setTheme("system");
    }
  }, [theme, setTheme]);

  return null;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <SystemThemeSync />
      {children}
    </NextThemesProvider>
  );
}
