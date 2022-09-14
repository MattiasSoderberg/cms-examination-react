import React, { useEffect, useState } from 'react'
import { Link as ReactLink, useParams } from 'react-router-dom'

import { Heading, Link, Text, Stack, HStack, Box } from "@chakra-ui/react"

export default function PostDetailPage() {
    const [post, setPost] = useState(null)
    const { id } = useParams()
    useEffect(() => {
        const url = process.env.REACT_APP_API_URL
        console.log(`${url}$post_${id}/`)
        fetch(`${url}${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [id])

    return (
        <Stack spacing="2rem">
            {post ?
                <>
                    <Heading as="h2" size="xl">{post.title}</Heading>
                    <Box className="HtmlContent" dangerouslySetInnerHTML={{ __html: post.content }} />
                    <HStack spacing="5rem">
                        <HStack>
                            <Heading as="h3" size="sm">Kategorier</Heading>
                            {post.categories && Object.entries(post.categories).map(cat => {
                                return <Text key={cat[1].ID}>{cat[1].name}</Text>
                            })}
                        </HStack>
                        <HStack>
                            <Heading as="h3" size="sm">Taggar</Heading>
                            {post.tags && Object.entries(post.tags).map(tag => {
                                return <Text key={tag[1].ID}>{tag[1].name}</Text>
                            })}
                        </HStack>
                    </HStack>
                    <Link as={ReactLink} to="/">Tillbaka</Link>
                </>
                : <Heading as="h3" size="sm">Laddar...</Heading>}
        </Stack>
    )
}
