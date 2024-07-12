import { useState } from "react";
import Navbar from "./Components/Navbar";
import NewsBorad from "./Components/NewsBorad";
import NewsItem from "./Components/NewsItem";

const App = () => {

  const [category, setCategory] = useState("general")

  return (
    <div>
      <Navbar setCategory={setCategory} />
      <NewsBorad category={category} />
      <NewsItem />
    </div>
  );
};

export default App;
