import { Flex, Link as ChakraLink } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    { id: 1, title: "Dashboard", linkTo: "/" },
    { id: 2, title: "Departments", linkTo: "/departments" },
    { id: 3, title: "Products", linkTo: "/products" },
  ];

  return (
    <Flex flexDir="column" gap={20} p={10} bg="#202020" color="white">
      {links.map((link) => {
        return (
          <ChakraLink
            key={link.id}
            as={NavLink}
            to={link.linkTo}
            color="#929292"
            _activeLink={{
              color: "white",
            }}
            _hover={{
              color: "white",
              textDecoration: "none",
            }}
          >
            {link.title}
          </ChakraLink>
        );
      })}
    </Flex>
  );
};

export default Navbar;
