import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos, fetchGif, fetchVectors, fetchIcons, fetchMemes, fetchEmojis } from "../api/mediaApi";
import {
  setLoading,
  setResults,
  setError,
  setPage,
} from "../redux/features/searchSlice";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTab, results, loading, error, page } = useSelector(
    (state) => state.search
  );

  useEffect(() => {

    const getData = async () => {
      try {
        dispatch(setLoading());

        let data = [];
        const perPage = 28;
        const searchQuery = query || "Nature";

        if (activeTab === "photos") {
          const res = await fetchPhotos(searchQuery, page, perPage);
          data = res.results.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description || "Untitled Photo",
            thumbnail: item.urls?.small,
            src: item.urls?.full,
            url: item.links?.html,
          }));
        }

        if (activeTab === "videos") {
          // Note: Pexels API uses 'page' param too
          const res = await fetchVideos(searchQuery, perPage);
          const resVideos = await fetchVideos(searchQuery, page, perPage);
          data = resVideos.videos.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user?.name || "Untitled Video",
            thumbnail: item.image,
            src: item.video_files?.[0]?.link,
            url: item.url,
          }));
        }

        if (activeTab === "gif") {
          // Pixabay supports 'page'
          const res = await fetchGif(searchQuery, page, perPage);

          data = res.hits.map((item) => ({
            id: item.id,
            type: "gif",
            title: item.user || "Untitled GIF",
            thumbnail: item.videos?.tiny?.thumbnail || item.userImageURL,
            src: item.videos?.tiny?.url, // Use MP4 for GIF
            url: item.pageURL,
          }));
        }

        if (activeTab === "vectors") {
          const res = await fetchVectors(searchQuery, page, perPage);
          data = res.hits.map((item) => ({
            id: item.id,
            type: "photo", // Render as photo
            title: item.tags || "Untitled Vector",
            thumbnail: item.previewURL,
            src: item.webformatURL,
            url: item.pageURL,
          }));
        }

        if (activeTab === "icons") {
          const res = await fetchIcons(searchQuery, page, perPage);
          data = res.hits.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.tags || "Untitled Icon",
            thumbnail: item.previewURL,
            src: item.webformatURL,
            url: item.pageURL,
          }));
        }

        if (activeTab === "memes") {
          const res = await fetchMemes(searchQuery, page, perPage);
          // Reddit API structure: res.data.children
          if (res.data && res.data.children) {
            // Filter for images only
            const updates = res.data.children
              .filter(child => child.data.post_hint === 'image')
              .map((child) => ({
                id: child.data.id,
                type: "photo",
                title: child.data.title || "Untitled Meme",
                thumbnail: child.data.thumbnail !== 'default' ? child.data.thumbnail : child.data.url, // Fallback if no thumb
                src: child.data.url,
                url: `https://reddit.com${child.data.permalink}`,
              }));
            data = updates;
          }
        }

        if (activeTab === "emojis") {
          const res = await fetchEmojis(searchQuery, page, perPage);
          data = res.hits.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.tags || "Untitled Emoji",
            thumbnail: item.previewURL,
            src: item.webformatURL,
            url: item.pageURL,
          }));
        }

        dispatch(setResults(data));
      } catch (err) {
        dispatch(setError(err.message || "Something went wrong"));
      }
    };

    getData();
  }, [query, activeTab, dispatch, page]);

  const handleNext = () => dispatch(setPage(page + 1));
  const handlePrev = () => dispatch(setPage(Math.max(1, page - 1)));

  return (
    <div className="relative min-h-[50vh] px-4 md:px-10 pb-10">

      {/* Loading Overlay */}
      {loading && (
        <div className="absolute inset-0 z-10 flex justify-center pt-20 bg-black/50 backdrop-blur-sm transition-all duration-300">
          <div className="loader"></div>
        </div>
      )}

      {error && <div className="text-red-500 text-center text-xl mt-10">Error: {error}</div>}

      {!error && results.length === 0 && !loading && (
        <div className="text-gray-400 text-center text-xl mt-10">No results found. Try searching for something else.</div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {results.map((item) => (
          <div key={`${item.type}-${item.id}`} className="animate-fade-in">
            <ResultCard item={item} />
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {!loading && results.length > 0 && (
        <div className="flex justify-center items-center mt-12 mb-8">
          <div className="flex items-center gap-4 bg-gray-900/80 p-2 rounded-2xl glass shadow-xl border border-white/10">
            <button
              onClick={handlePrev}
              disabled={page === 1}
              className={`
                flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 cursor-pointer
                ${page === 1
                  ? "opacity-50 cursor-not-allowed text-gray-500"
                  : "bg-gray-800 text-white hover:bg-accent-primary hover:text-white hover:shadow-lg hover:-translate-y-1"
                }
              `}
              aria-label="Previous Page"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex flex-col items-center px-4">
              <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Page</span>
              <span className="text-xl font-bold text-white font-mono">{page}</span>
            </div>

            <button
              onClick={handleNext}
              className={`
                flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 cursor-pointer
                bg-gray-800 text-white hover:bg-accent-primary hover:text-white hover:shadow-lg hover:-translate-y-1
              `}
              aria-label="Next Page"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultGrid;
