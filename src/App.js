import React, { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import PostDetailPage from "./pages/PostDetailPage";
import PostsListPage from "./pages/PostsListPage";

function App() {
  
  return (
    <div>
      <h1>Mattias Söderberg</h1>
      <Routes>
        <Route path="/" element={<PostsListPage />} />
        <Route path="/:id" element={<PostDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
