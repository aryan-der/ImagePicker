import { useSelector } from "react-redux";
import ResultGrid from "../components/ResultGrid";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import OnboardingGuide from "../components/OnboardingGuide";

const Home = () => {
  const { query } = useSelector((state) => state.search);

  return (
    <div>
      <OnboardingGuide />
      <SearchBar />
      <div>
        <Tabs />
        <ResultGrid />
      </div>
    </div>
  );
};

export default Home;
