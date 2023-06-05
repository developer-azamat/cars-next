import { ChangeEvent, FormEvent, useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center mx-auto w-screen max-w-3xl "
    >
      <input
        type="text"
        aria-label="Search"
        onChange={handleChange}
        className="border border-gray-300 text-blue-500 rounded-l py-2 px-4 w-full focus:outline-none focus:border-blue-500 "
        value={query}
      />
      <button
        type="submit"
        className="bg-red-600 text-white py-2 px-6 rounded-r hover:bg-blue-600 focus:outline-none "
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
