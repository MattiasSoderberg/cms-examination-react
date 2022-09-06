import React, { useEffect, useState } from "react"

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const url = process.env.REACT_APP_API_URL
    console.log(url)

    fetch(url)
      .then(res => res.json())
      .then(data => setPosts(data.posts))
  }, [])

  return (
    <div>
      <h1>Home</h1>
      {posts.length > 0 && posts.map(post => {
        return <div key={post.ID}>
          <h2>{post.title}</h2>
          <div dangerouslySetInnerHTML={ {__html: post.content} } />
        </div>
      })}
    </div>
  );
}

export default App;
