import { gql } from 'apollo-boost'

export const POSTS_QUERY = gql`
  query {
    posts {
      title
      body
      author {
        name
      }
      published
    }
  }
`

export const USERS_QUERY = gql`
  query {
    users {
      id
      name
      email
      posts {
        id
        title
        body
        published
      }
    }
  }
`
