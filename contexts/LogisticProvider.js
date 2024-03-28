"use client"
import React from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";

const LogisticContext = createContext()


export const LogisticProvider = ({ children }) => {
    const [sideBarVisible, setSideBarVisible]= useState(false)


    return (
      <LogisticContext.Provider
        value={{
          sideBarVisible,
          setSideBarVisible,
        }}
      >
        {children}
      </LogisticContext.Provider>
    );
}

export const useLogisticContext = () => {
    if (!LogisticContext) return
    return useContext(LogisticContext)
}