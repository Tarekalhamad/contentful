import { gql } from "apollo-boost";

export const layoutQuery = gql`
  query ($id: String!) {
    layout: layout(id: $id) {
      header {
        title
        logo {
          url
          title
        }
      }
      heroImage {
        title
        backgroundImage {
          title
          url
        }
      }
      course {
        title
        slug
        lessonsCollection {
          items {
            title
            slug
          }
        }
        image {
          url
          title
        }
      }
      title
      slug
      sys {
        id
        spaceId
      }
    }
  }
`;
