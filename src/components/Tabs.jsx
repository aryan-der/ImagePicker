import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "videos", "gif", "vectors", "icons", "memes", "emojis"];
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div className="flex gap-4 justify-center mb-10 overflow-x-auto px-4 py-2">
      <div className="flex gap-2 p-1 glass rounded-2xl">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => dispatch(setActiveTab(tab))}
            className={`
              relative px-6 py-2 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer
              ${activeTab === tab
                ? "text-white shadow-lg"
                : "text-gray-400 hover:text-white hover:bg-white/5"
              }
            `}
          >
            {activeTab === tab && (
              <div className="absolute inset-0 bg-accent-primary rounded-xl z-[-1] animate-fade-in"></div>
            )}
            {tab.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
