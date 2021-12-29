import Header from "../components/Header";
import Products from "../components/Products";

const Home = ({ logged }) => {
  return (
    <div>
      <Header logged={logged} />
      <Products />
    </div>
  );
};

export default Home;
