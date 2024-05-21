import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import React from "react";

function Navbar() {
  return <Box></Box>;
}

export function Home() {
  return (
    <Box>
      <Navbar />
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
}
