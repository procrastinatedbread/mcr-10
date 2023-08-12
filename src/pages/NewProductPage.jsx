import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useAppContext } from "../context/AppContextProvider";
import { useNavigate } from "react-router-dom";

const initialState = {
  department: "",
  name: "",
  description: "",
  price: 0,
  stock: 0,
  sku: "",
  supplier: "",
  delivered: 0,
  imageUrl: "",
};

const NewProductPage = () => {
  const [productDetails, setProductDetails] = useState(initialState);
  const { dispatch } = useAppContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_PRODUCT",
      payload: {
        product: {
          ...productDetails,
          price: +productDetails.price,
          stock: +productDetails.stock,
          id: uuidv4(),
        },
      },
    });
    navigate("/products");
  };

  const handleInputs = (e) => {
    setProductDetails((productDetails) => ({
      ...productDetails,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Flex flexDir="column" gap={8} flexGrow={1} p={4} overflowY="auto">
      <Heading fontSize="1.5rem">Add New Product</Heading>

      <form onSubmit={handleSubmit}>
        <Flex flexDir="column" gap={4} w="50%" fontSize="0.8rem">
          <FormControl isRequired>
            <FormLabel>Department: </FormLabel>
            <Select
              w="full"
              name="department"
              placeholder="Select Department"
              value={productDetails.department}
              onChange={handleInputs}
            >
              <option value="Kitchen">Kitchen</option>
              <option value="Clothing">Clothing</option>
              <option value="Toys">Toys</option>
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input type="text" name="name" onChange={handleInputs} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Description</FormLabel>
            <Textarea
              name="description"
              value={productDetails.description}
              onChange={handleInputs}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Price</FormLabel>
            <Input
              type="number"
              min={0}
              name="price"
              value={productDetails.price}
              onChange={handleInputs}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Stock</FormLabel>
            <Input
              type="number"
              min={0}
              name="stock"
              value={productDetails.stock}
              onChange={handleInputs}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>SKU</FormLabel>
            <Input
              type="text"
              name="sku"
              value={productDetails.sku}
              onChange={handleInputs}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Supplier</FormLabel>
            <Input
              type="text"
              name="supplier"
              value={productDetails.supplier}
              onChange={handleInputs}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Delivered</FormLabel>
            <Input
              type="number"
              min={0}
              name="delivered"
              value={productDetails.delivered}
              onChange={handleInputs}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Image URL</FormLabel>
            <Input
              type="text"
              name="imageUrl"
              value={productDetails.imageUrl}
              onChange={handleInputs}
            />
          </FormControl>
          <Button type="submit" colorScheme="blue" alignSelf="start">
            Add Product
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};

export default NewProductPage;
