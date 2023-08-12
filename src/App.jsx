import "./App.css";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import { Flex } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import DepartmentsPage from "./pages/DepartmentsPage";
import ProductsPage from "./pages/ProductsPage";
import NewProductPage from "./pages/NewProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <Flex h="100vh">
      <Navbar />
      <Routes>
        <Route index={true} element={<DashboardPage />} />
        <Route path="/departments" element={<DepartmentsPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/new_product" element={<NewProductPage />} />
        <Route path="/product_detail/:id" element={<ProductDetailPage />} />
      </Routes>
    </Flex>
  );
}

export default App;
