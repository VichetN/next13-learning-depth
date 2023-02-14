"use client";

import { darkModeAtom } from "@/recoils";
import { RecoilRoot, useRecoilValue } from "recoil";

function DarkModeConfig({ children }) {
    const darkModeValue = useRecoilValue(darkModeAtom)
  return <div className={`${darkModeValue ? "dark":""}`}>{children}</div>;
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
