/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
export const onCreateHistory = /* GraphQL */ `
  subscription OnCreateHistory {
    onCreateHistory {
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
export const onUpdateHistory = /* GraphQL */ `
  subscription OnUpdateHistory {
    onUpdateHistory {
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
export const onDeleteHistory = /* GraphQL */ `
  subscription OnDeleteHistory {
    onDeleteHistory {
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
