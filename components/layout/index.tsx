"use client";

// Core
import { ReactNode } from "react";

// Local components
import { Footer } from "./footer";
import { Header } from "./header";

interface ILayout {
  children: ReactNode;
}

export const Layout = ({ children }: ILayout) => {
  return (
    <div className="w-full md:max-w-5/6 m-auto">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
