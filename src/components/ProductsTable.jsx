import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Image,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ProductsTable = ({ data }) => {
  return (
    <TableContainer overflowY="auto">
      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th>Image</Th>
            <Th>Name</Th>
            <Th>Description</Th>
            <Th>Price</Th>
            <Th>Stock</Th>
            <Th>Supplier</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((product) => {
            return (
              <Tr key={product.id}>
                <Td>
                  <Box w="100px" h="100px">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      w="full"
                      h="full"
                      objectFit="cover"
                    />
                  </Box>
                </Td>
                <Td>
                  <ChakraLink as={Link} to={`/product_detail/${product.id}`}>
                    <Text color="blue">{product.name}</Text>
                  </ChakraLink>
                </Td>
                <Td>{product.description}</Td>
                <Td>${product.price}</Td>
                <Td>{product.stock}</Td>
                <Td>{product.supplier}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ProductsTable;
