import React from "react"
import { Routes, Route } from "react-router-dom"
import PostDetailPage from "./pages/PostDetailPage";
import PostsListPage from "./pages/PostsListPage";

import { ChakraProvider, Center, VStack, Heading } from "@chakra-ui/react"

function App() {

  return (
    <ChakraProvider>
      <Center>
        <VStack spacing="4rem" width="50%">
          <Heading as="h1" size="2xl">Mattias Söderberg</Heading>
          <Routes>
            <Route path="/" element={<PostsListPage />} />
            <Route path="/:id" element={<PostDetailPage />} />
          </Routes>
        </VStack>
      </Center>
    </ChakraProvider >
  );
}

export default App;
