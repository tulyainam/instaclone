import { Container } from '@chakra-ui/react'
import React from 'react'
import FeedPost from './FeedPost'

const FeedPosts = () => {
  return (
    <Container maxW={"container.sm"} px={2} py={10}>
        <FeedPost/>
        <FeedPost/>
        <FeedPost/>
        <FeedPost/>
        <FeedPost/>
    </Container>
  )
}

export default FeedPosts