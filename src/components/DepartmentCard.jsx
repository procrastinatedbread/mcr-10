import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

const DepartmentCard = ({ title }) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      gap={2}
      bg="gray.200"
      p={2}
      w="15rem"
      h="8rem"
      borderRadius="lg"
    >
      <Heading fontSize="1.5rem">{title}</Heading>
    </Flex>
  );
};

export default DepartmentCard;
