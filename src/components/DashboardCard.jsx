import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const DashboardCard = ({ number, title, color }) => {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      gap={2}
      bg="gray.200"
      p={2}
      w="10rem"
      borderRadius="lg"
    >
      <Heading color={color}>{number}</Heading>
      <Text>{title}</Text>
    </Flex>
  );
};

export default DashboardCard;
