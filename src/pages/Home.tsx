import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Nossos Cafés</h1>
        <ProductList />
      </div>
    </>
  );
};

export default Home;
