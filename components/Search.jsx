"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e?.preventDefault();
    setSearch("");
    router.push(`/search/${search}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Enter search here..."
        className="py-2 px-4"
      />
      <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">
        Search
      </button>
    </form>
  );
}

export default Search;
