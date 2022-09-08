import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function PostDetailPage() {
    const [post, setPost] = useState({})
    const { id } = useParams()
    useEffect(() => {
        const url = process.env.REACT_APP_API_URL
        console.log(`${url}$post_${id}/`)
        fetch(`${url}${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [id])
    return (
        <div>
            {post ?
                <>
                    <h2>{post.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    <div>
                        <h4>Kategorier</h4>
                        {post.categories && Object.entries(post.categories).map(cat => {
                            return <p key={cat[1].ID}>{cat[1].name}</p>
                        })}
                    </div>
                    <div>
                        <h4>Taggar</h4>
                        {post.tags && Object.entries(post.tags).map(tag => {
                            return <p key={tag[1].ID}>{tag[1].name}</p>
                        })}
                    </div>
                </>
            : <p>Laddar...</p>}
            <Link to="/">Back</Link>
        </div>
    )
}
