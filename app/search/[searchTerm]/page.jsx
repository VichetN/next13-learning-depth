import Link from "next/link";
import React from "react";

const search = async (searchTerm) => {
  // engine=google&
  const res = await fetch(
    `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.SERPAPI_API}`
  );
  return await res.json();
};

// Static metadata
// export const metadata = {
//   title: 'Neymar',
// };
export async function generateMetadata(props) {
  console.log(props);
  // For /products/123, params.id is "123"
  // For /products/123?foo=bar, searchParams.get("foo") is "bar"
  // The return value is the metadata object
  return { title: "test", description: "Long text goes here." };
}

async function SearchResult({ params: { searchTerm } }) {
  const result = await search(searchTerm);
  return (
    <div>
      <p className="text-gray-500 text-sm">You searched for: {searchTerm}</p>

      <ol className="space-y-5 p-5">
        {result?.organic_results?.map((load) => (
          <li key={load?.position} className="list-decimal">
            <Link target="_blank" href={load?.link}>
              <p className="font-bold hover:text-gray-700/50">{load?.title}</p>
            </Link>
            <p>{load?.snippet}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default SearchResult;
