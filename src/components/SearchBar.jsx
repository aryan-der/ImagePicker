import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setQuery(text));
  };

  return (
    <div className="flex justify-center w-full px-4 md:px-0 mb-8 mt-6">
      <form
        onSubmit={submitHandler}
        className="w-full max-w-2xl relative"
      >
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative flex items-center bg-gray-900 rounded-2xl p-2 glass">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search high-resolution photos, videos..."
              className="w-full bg-transparent px-4 py-3 outline-none text-white placeholder-gray-500 text-lg"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              type="submit"
              className="bg-accent-primary hover:bg-accent-secondary text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-accent-primary/50 font-medium"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
