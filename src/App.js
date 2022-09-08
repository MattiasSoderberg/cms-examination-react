import React, { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import PostsListPage from "./pages/PostsListPage";

function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<PostsListPage />} />
      </Routes>
    </div>
  );
}

export default App;
