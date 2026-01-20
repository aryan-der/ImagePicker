import { removeCollection, removedToast } from "../redux/features/collectionSlice";
import { useDispatch } from "react-redux";

const CollectionCard = ({ item, isSelected, onToggleSelection, onDownload }) => {

  const dispatch = useDispatch();

  const removeCollections = (e) => {
    e.preventDefault();
    dispatch(removeCollection(item));
    dispatch(removedToast());
  }

  return (
    <div className={`group relative h-80 w-full rounded-2xl overflow-hidden shadow-lg border transition-all duration-300 ${isSelected ? 'border-accent-primary ring-2 ring-accent-primary scale-[1.02]' : 'border-white/5 bg-gray-900'}`}>

      {/* Selection Checkbox */}
      <div className="absolute top-3 left-3 z-20">
        <input
          type="checkbox"
          checked={isSelected || false}
          onChange={onToggleSelection}
          className="w-5 h-5 rounded border-gray-300 text-accent-primary focus:ring-accent-primary cursor-pointer"
        />
      </div>

      <div className="block h-full w-full">
        {item.type == "photo" ? (
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            src={item.src}
            alt=""
          />
        ) : (
          ""
        )}
        {(item.type === "video" || item.type === "gif") ? (
          <video
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            autoPlay
            muted
            loop
            playsInline
            src={item.src}
            alt=""
          />
        ) : (
          ""
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <h2 className="text-white font-bold text-lg line-clamp-1 mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            {item.title}
          </h2>
          <div className="flex gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
            <button
              onClick={onDownload}
              className="cursor-pointer flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-3 rounded-xl shadow-lg hover:scale-105 active:scale-95 text-sm flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download
            </button>
            <button
              onClick={removeCollections}
              className="cursor-pointer flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-3 rounded-xl shadow-lg hover:scale-105 active:scale-95 text-sm"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;