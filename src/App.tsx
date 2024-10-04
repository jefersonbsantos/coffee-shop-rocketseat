import React, { useState } from "react";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import Header from "./components/Header";
import Home from "./pages/Home";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<
    "home" | "checkout" | "success"
  >("home");

  const handleGoToCheckout = () => {
    setCurrentPage("checkout");
  };

  const handleGoToHome = () => {
    setCurrentPage("home");
  };

  const handleGoToSuccess = () => {
    setCurrentPage("success");
  };

  return (
    <div className="container bg-black mx-auto p-6">
      <Header onGoToCheckout={handleGoToCheckout} />

      {currentPage === "home" && (
        <>
          <Home />
        </>
      )}

      {currentPage === "checkout" && (
        <>
          <Checkout
            onGoToHome={handleGoToHome}
            onGoToSuccess={handleGoToSuccess}
          />
        </>
      )}

      {currentPage === "success" && (
        <>
          <Success onGoToHome={handleGoToHome} />
        </>
      )}
    </div>
  );
};

export default App;
