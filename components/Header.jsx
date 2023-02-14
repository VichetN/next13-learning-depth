'use client'
import { darkModeAtom } from "@/recoils";
import Link from "next/link";
import { useRecoilState } from "recoil";

function Header() {
  const [darkMode, setDarkMode] = useRecoilState(darkModeAtom)
  return (
    <header className="p-5 bg-blue-500">
      <Link href="/" className="px-2 py-1 bg-white text-blue-500 rounded-lg">
        Home
      </Link>
      <button onClick={()=> setDarkMode(prev => !prev)}>
          {darkMode ? "Light" : "Dark"}
      </button>
    </header>
  );
}

export default Header;
