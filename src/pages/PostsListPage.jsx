import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function PostsListPage() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const url = process.env.REACT_APP_API_URL

        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data.posts))
    }, [])
  
    return (
        <div>
            <h1>Blogginlägg</h1>
            {posts.length > 0 ? posts.map(post => {
                return <div key={post.ID}>
                    <Link to={`/${post.ID}`}><h2>{post.title}</h2></Link>
                    
                </div>
            })
        : <p>Laddar inlägg...</p> }
        </div>
    )
}
