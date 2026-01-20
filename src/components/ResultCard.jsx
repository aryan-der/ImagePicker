import { useDispatch } from "react-redux";
import { addCollection, addedToast } from "../redux/features/collectionSlice";

const ResultCard = ({ item }) => {
  const dispatch = useDispatch();

  const addToCollections = (e) => {
    e.preventDefault();
    dispatch(addCollection(item));
    dispatch(addedToast());
  };

  return (
    <div className="group relative h-80 w-full rounded-2xl overflow-hidden shadow-lg border border-white/5 bg-gray-900">
      <div className="block h-full w-full">
        {item.type === "photo" && (
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            src={item.src}
            alt={item.title}
            loading="lazy"
          />
        )}

        {(item.type === "video" || item.type === "gif") && (
          <video
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            autoPlay
            muted
            loop
            playsInline
            src={item.src}
          />
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <h2 className="text-white font-bold text-lg line-clamp-1 mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            {item.title}
          </h2>
          <button
            onClick={addToCollections}
            className="w-full cursor-pointer bg-accent-primary hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-xl shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 hover:scale-105 active:scale-95"
          >
            Save to Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
