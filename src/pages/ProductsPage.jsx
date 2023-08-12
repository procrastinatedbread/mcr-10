import React from "react";
import { Flex } from "@chakra-ui/react";
import { useAppContext } from "../context/AppContextProvider";
import ProductsTable from "../components/ProductsTable";
import ProductFilters from "../components/ProductFilters";
import { getFilteredProducts } from "../helper";

const ProductsPage = () => {
  const {
    state: { data, filters },
  } = useAppContext();

  const filteredProducts = getFilteredProducts(data, filters);

  return (
    <Flex flexDir="column" gap={8} flexGrow={1} p={8}>
      <ProductFilters />
      <ProductsTable data={filteredProducts} />
    </Flex>
  );
};

export default ProductsPage;
