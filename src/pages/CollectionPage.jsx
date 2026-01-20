import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import ConfirmationModal from "../components/ConfirmationModal";
import {
  clearCollections,
  removedAllToast,
} from "../redux/features/collectionSlice";

const CollectionPage = () => {
  const collection = useSelector((state) => state.collection.items);
  const dispatch = useDispatch();
  const [selectedItems, setSelectedItems] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClearClick = () => {
    setIsModalOpen(true);
  };

  const confirmClear = () => {
    dispatch(clearCollections());
    dispatch(removedAllToast());
    setSelectedItems([]);
    setIsModalOpen(false);
  };

  const toggleSelection = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const downloadFile = async (url, filename) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  const handleBulkDownload = async () => {
    const itemsToDownload = collection.filter((item) =>
      selectedItems.includes(item.id)
    );

    // Download sequentially to avoid overwhelming the browser
    for (const item of itemsToDownload) {
      await downloadFile(item.src || item.url, `${item.title}.${(item.type === 'video' || item.type === 'gif') ? 'mp4' : 'jpg'}`);
      await new Promise(resolve => setTimeout(resolve, 500)); // Small delay
    }
    setSelectedItems([]);
  };

  return (
    <div className="w-full min-h-screen pb-20">
      {collection.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20 opacity-50">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mb-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
          </svg>
          <h1 className="text-3xl font-bold">No Collections Yet</h1>
          <p className="mt-2 text-gray-400">Start exploring and save your favorites!</p>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between px-6 md:px-10 py-8 sticky top-20 bg-gray-950/80 backdrop-blur-sm z-20">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              My Collection
            </h1>
            <div className="flex gap-4">
              {selectedItems.length > 0 && (
                <button
                  onClick={handleBulkDownload}
                  className="cursor-pointer px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-all shadow-lg hover:scale-105"
                >
                  Download Selected ({selectedItems.length})
                </button>
              )}
              <button
                onClick={handleClearClick}
                className="cursor-pointer px-6 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/50 rounded-xl transition-all hover:shadow-lg hover:shadow-red-500/20"
              >
                Clear All
              </button>
            </div>
          </div>

          <ConfirmationModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onConfirm={confirmClear}
            title="Clear Collection"
            message="Are you sure you want to remove all items from your collection? This action cannot be undone."
            confirmText="Yes, Clear All"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-10">
            {collection.map((item) => (
              <div key={`${item.type}-${item.id}`} className="animate-fade-in">
                <CollectionCard
                  item={item}
                  isSelected={selectedItems.includes(item.id)}
                  onToggleSelection={() => toggleSelection(item.id)}
                  onDownload={(e) => {
                    e.preventDefault();
                    downloadFile(item.src || item.url, `${item.title}.${(item.type === 'video' || item.type === 'gif') ? 'mp4' : 'jpg'}`);
                  }}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CollectionPage;
