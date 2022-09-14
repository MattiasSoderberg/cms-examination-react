import React, { useEffect, useState } from 'react'
import { Link as ReactLink } from 'react-router-dom'

import { Heading, Link, Stack } from "@chakra-ui/react"

export default function PostsListPage() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const url = process.env.REACT_APP_API_URL

        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data.posts))
    }, [])
  
    return (
        <Stack spacing="1.5rem" width="100%">
            <Heading as="h2" size="xl">Inlägg</Heading>
            {posts.length > 0 ? posts.map(post => {
                return <div key={post.ID}>
                    <Link as={ReactLink} to={`/${post.ID}`}><h3>{post.title}</h3></Link>
                    
                </div>
            })
        : <Heading as="h3" size="sm">Laddar inlägg...</Heading> }
        </Stack>
    )
}
