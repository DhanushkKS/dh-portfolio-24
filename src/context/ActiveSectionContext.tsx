"use client";
import React, { createContext, useContext, useState } from "react";
import { ActiveSectionContextType, SectionName } from "@/types/types";

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export const ActiveSectionContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error("useActiveSectionContext must be used within the context");
  }
  return context;
};
