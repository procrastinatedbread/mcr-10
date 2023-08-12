import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import DepartmentCard from "../components/DepartmentCard";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContextProvider";

const DepartmentsPage = () => {
  const departments = ["Kitchen", "Clothing", "Toys"];
  const { dispatch } = useAppContext();

  const handleFilters = (department) => {
    dispatch({
      type: "FILTER_BY_DEPARTMENT",
      payload: { department: department },
    });
  };

  return (
    <Box p={5}>
      <HStack spacing="2rem">
        {departments.map((department, i) => (
          <Link
            key={i}
            to="/products"
            onClick={() => handleFilters(department)}
          >
            <DepartmentCard title={department} />
          </Link>
        ))}
      </HStack>
    </Box>
  );
};

export default DepartmentsPage;
