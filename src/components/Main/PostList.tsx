import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { MasonryInfiniteGrid } from '@egjs/react-infinitegrid'
import PostItem from './PostItem'
import { IGatsbyImageData } from 'gatsby-plugin-image'

type PostListProps = {
  posts: Queries.IndexPageQuery['allContentfulPost']['nodes']
}

const Wrapper = styled(MasonryInfiniteGrid)`
  margin-top: 40px;
`

function setInitialPosts(posts: PostListProps['posts']) {
  return posts
    .slice(0, 10)
    .map((post, index) => ({ groupKey: 0, key: index, post }))
}

export default function PostList({ posts }: PostListProps) {
  const [items, setItems] = useState(setInitialPosts(posts))

  const handleLoadPosts = (nextGroupKey: number) => {
    const nextPosts = posts
      .slice(nextGroupKey * 10, (nextGroupKey + 1) * 10)
      .map((post, index) => ({
        groupKey: nextGroupKey,
        key: nextGroupKey * 10 + index,
        post,
      }))

    setItems(prev => [...prev, ...nextPosts])
  }

  useEffect(() => setItems(setInitialPosts(posts)), [posts])

  return (
    <Wrapper
      gap={20}
      onRequestAppend={({ groupKey }) => {
        const nextGroupKey = parseInt(groupKey?.toString() ?? '0') + 1
        if (posts.length <= nextGroupKey * 10) return
        handleLoadPosts(nextGroupKey)
      }}
    >
      {items.map(
        ({
          post: { title, date, category, thumbnail, description, slug },
          groupKey,
          key,
        }) => (
          <PostItem
            title={title as string}
            date={date as string}
            category={category as string[]}
            thumbnail={thumbnail?.gatsbyImageData as IGatsbyImageData}
            description={description?.description as string}
            slug={slug as string}
            data-grid-groupkey={groupKey}
            key={key}
          />
        ),
      )}
    </Wrapper>
  )
}
