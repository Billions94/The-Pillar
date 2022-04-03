/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      name
      description
      price
      category
      image
      file {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        price
        category
        image
        file {
          bucket
          region
          key
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getHistory = /* GraphQL */ `
  query GetHistory($id: ID!) {
    getHistory(id: $id) {
      id
      title
      content
      image
      className {
        className
        className2
      }
      file {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const listHistorys = /* GraphQL */ `
  query ListHistorys(
    $filter: ModelHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHistorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        image
        className {
          className
          className2
        }
        file {
          bucket
          region
          key
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
