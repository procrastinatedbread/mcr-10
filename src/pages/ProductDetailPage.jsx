import React from "react";
import { useAppContext } from "../context/AppContextProvider";
import { useParams } from "react-router-dom";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const ProductDetailPage = () => {
  const {
    state: { data },
  } = useAppContext();

  const { id: productId } = useParams();

  const product = data.find(({ id }) => "" + id === productId);

  if (!product)
    return (
      <Flex justifyContent="center" p={8}>
        <Heading color="red.500">Product Not Found!</Heading>
      </Flex>
    );

  return (
    <Flex flexDir="column" gap={4} p={4} ml={8}>
      <Heading fontSize="1.5rem">{product.name}</Heading>
      <Box w="20rem" mt={4}>
        <Image
          src={product.imageUrl}
          alt={product.name}
          w="full"
          h="full"
          objectFit="cover"
        />
      </Box>
      <Text>Price: ${product.price}</Text>
      <Text>Stock: {product.stock}</Text>
      <Text>Supplier: {product.supplier}</Text>
      <Text>Department: {product.department}</Text>
      <Text>SKU: {product.sku}</Text>
      <Text>Delivered: {product.delivered}</Text>
      <Text>Description: {product.description}</Text>
    </Flex>
  );
};

export default ProductDetailPage;
