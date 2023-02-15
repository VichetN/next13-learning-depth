"use client";

import { darkModeAtom } from "@/recoils";
import { RecoilRoot, useRecoilValue } from "recoil";

function DarkModeConfig({ children }) {
  const darkModeValue = useRecoilValue(darkModeAtom);
  return (
    <div className={`${darkModeValue ? "dark " : ""}`}>
      <main className="bg-white transition-all duration-1000 dark:bg-gray-800 dark:text-white">
        {children}
      </main>
    </div>
  );
}

function ClientProvider({ children }) {
  return (
    <>
      <RecoilRoot>
        <DarkModeConfig>{children}</DarkModeConfig>
      </RecoilRoot>
    </>
  );
}

export default ClientProvider;
