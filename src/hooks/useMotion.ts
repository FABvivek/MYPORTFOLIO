"use client";
import { createContext, useContext } from "react";

interface MotionContextType {
  motionEnabled: boolean;
  toggleMotion: () => void;
}

export const MotionContext = createContext<MotionContextType>({
  motionEnabled: true,
  toggleMotion: () => {},
});

export function useMotion() {
  return useContext(MotionContext);
}
