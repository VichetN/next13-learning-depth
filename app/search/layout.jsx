import Search from "@/components/Search";
import React from "react";

function SearchLayout({ children }) {
  return (
    <main className="flex space-x-4 divide-x-2 p-5">
      <div>
        <h1>Search</h1>
      </div>

      <div className="flex-1 pl-5">
        <Search />
        {children}
      </div>
    </main>
  );
}

export default SearchLayout;
