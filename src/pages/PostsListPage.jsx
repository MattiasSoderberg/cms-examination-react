import React, { useEffect, useState } from 'react'

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
            <h1>Home</h1>
            {posts.length > 0 && posts.map(post => {
                return <div key={post.ID}>
                    <h2>{post.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    <div>
                        <h4>Kategorier</h4>
                        {Object.entries(post.terms.category).map(cat => {
                            return <p key={cat[1].ID}>{cat[1].name}</p>
                        })}
                    </div>
                    <div>
                        <h4>Taggar</h4>
                        {Object.entries(post.tags).map(tag => {
                            return <p key={tag[1].ID}>{tag[1].name}</p>
                        })}
                    </div>
                </div>
            })}
        </div>
    )
}
