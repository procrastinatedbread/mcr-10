import React from "react";
import { Button, Checkbox, Flex, Heading, Select } from "@chakra-ui/react";
import { useAppContext } from "../context/AppContextProvider";
import { useNavigate } from "react-router-dom";

const ProductFilters = () => {
  const {
    state: { filters },
    dispatch,
  } = useAppContext();
  const navigate = useNavigate();

  const handleDepartmentFilter = (e) => {
    dispatch({
      type: "FILTER_BY_DEPARTMENT",
      payload: { department: e.target.value },
    });
  };

  const handleLowStockItems = () => {
    dispatch({ type: "TOGGLE_LOW_STOCK_ITEMS" });
  };

  const handleSortBy = (e) => {
    dispatch({ type: "SORT_BY", payload: { sortBy: e.target.value } });
  };

  const handleAddNewProduct = () => {
    navigate("/new_product");
  };

  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Heading fontSize="1.5rem">Products</Heading>
      <Select
        w="fit-content"
        value={filters.department}
        onChange={handleDepartmentFilter}
      >
        <option value="all">All Departments</option>
        <option value="Kitchen">Kitchen</option>
        <option value="Clothing">Clothing</option>
        <option value="Toys">Toys</option>
      </Select>
      <Checkbox
        isChecked={filters.lowStockItems}
        onChange={handleLowStockItems}
      >
        Low Stock Items
      </Checkbox>
      <Select w="fit-content" value={filters.sortBy} onChange={handleSortBy}>
        <option value="name">Name</option>
        <option value="price">Price</option>
        <option value="stock">Stock</option>
      </Select>
      <Button colorScheme="blue" onClick={handleAddNewProduct}>
        New
      </Button>
    </Flex>
  );
};

export default ProductFilters;
