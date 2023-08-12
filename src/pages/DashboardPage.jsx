import React from "react";
import { Box, HStack } from "@chakra-ui/react";
import DashboardCard from "../components/DashboardCard";
import { useAppContext } from "../context/AppContextProvider";

const DashboardPage = () => {
  const {
    state: { data },
  } = useAppContext();

  const totalStock = data.reduce((acc, { stock }) => acc + stock, 0);

  const totalDelivered = data.reduce(
    (acc, { delivered }) => acc + delivered,
    0
  );

  const lowStockItems = data.reduce(
    (acc, { stock }) => (stock <= 10 ? acc + 1 : acc),
    0
  );

  return (
    <Box p={5}>
      <HStack spacing="2rem">
        <DashboardCard
          number={totalStock}
          title="Total Stock"
          color="#04B201"
        />
        <DashboardCard
          number={totalDelivered}
          title="Total Delivered"
          color="#FFA701"
        />
        <DashboardCard
          number={lowStockItems}
          title="Low Stock Items"
          color="#FF0101"
        />
      </HStack>
    </Box>
  );
};

export default DashboardPage;
