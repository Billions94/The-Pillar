/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProductInput = {
  id?: string | null,
  name: string,
  description: string,
  price: string,
  category: string,
  image?: string | null,
  file?: S3ObjectInput | null,
};

export type S3ObjectInput = {
  bucket: string,
  region: string,
  key: string,
};

export type ModelProductConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  price?: ModelStringInput | null,
  category?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Product = {
  __typename: "Product",
  id?: string,
  name?: string,
  description?: string,
  price?: string,
  category?: string,
  image?: string | null,
  file?: S3Object,
  createdAt?: string,
  updatedAt?: string,
};

export type S3Object = {
  __typename: "S3Object",
  bucket?: string,
  region?: string,
  key?: string,
};

export type UpdateProductInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  price?: string | null,
  category?: string | null,
  image?: string | null,
  file?: S3ObjectInput | null,
};

export type DeleteProductInput = {
  id: string,
};

export type CreateHistoryInput = {
  id?: string | null,
  title: string,
  content: string,
  image?: string | null,
  className?: ClassInput | null,
  file?: S3ObjectInput | null,
};

export type ClassInput = {
  className?: string | null,
  className2?: string | null,
};

export type ModelHistoryConditionInput = {
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelHistoryConditionInput | null > | null,
  or?: Array< ModelHistoryConditionInput | null > | null,
  not?: ModelHistoryConditionInput | null,
};

export type History = {
  __typename: "History",
  id?: string,
  title?: string,
  content?: string,
  image?: string | null,
  className?: Class,
  file?: S3Object,
  createdAt?: string,
  updatedAt?: string,
};

export type Class = {
  __typename: "Class",
  className?: string | null,
  className2?: string | null,
};

export type UpdateHistoryInput = {
  id: string,
  title?: string | null,
  content?: string | null,
  image?: string | null,
  className?: ClassInput | null,
  file?: S3ObjectInput | null,
};

export type DeleteHistoryInput = {
  id: string,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  price?: ModelStringInput | null,
  category?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items?:  Array<Product | null >,
  nextToken?: string | null,
};

export type ModelHistoryFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelHistoryFilterInput | null > | null,
  or?: Array< ModelHistoryFilterInput | null > | null,
  not?: ModelHistoryFilterInput | null,
};

export type ModelHistoryConnection = {
  __typename: "ModelHistoryConnection",
  items?:  Array<History | null >,
  nextToken?: string | null,
};

export type CreateProductMutationVariables = {
  input?: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description: string,
    price: string,
    category: string,
    image?: string | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProductMutationVariables = {
  input?: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description: string,
    price: string,
    category: string,
    image?: string | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProductMutationVariables = {
  input?: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description: string,
    price: string,
    category: string,
    image?: string | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateHistoryMutationVariables = {
  input?: CreateHistoryInput,
  condition?: ModelHistoryConditionInput | null,
};

export type CreateHistoryMutation = {
  createHistory?:  {
    __typename: "History",
    id: string,
    title: string,
    content: string,
    image?: string | null,
    className?:  {
      __typename: "Class",
      className?: string | null,
      className2?: string | null,
    } | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateHistoryMutationVariables = {
  input?: UpdateHistoryInput,
  condition?: ModelHistoryConditionInput | null,
};

export type UpdateHistoryMutation = {
  updateHistory?:  {
    __typename: "History",
    id: string,
    title: string,
    content: string,
    image?: string | null,
    className?:  {
      __typename: "Class",
      className?: string | null,
      className2?: string | null,
    } | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteHistoryMutationVariables = {
  input?: DeleteHistoryInput,
  condition?: ModelHistoryConditionInput | null,
};

export type DeleteHistoryMutation = {
  deleteHistory?:  {
    __typename: "History",
    id: string,
    title: string,
    content: string,
    image?: string | null,
    className?:  {
      __typename: "Class",
      className?: string | null,
      className2?: string | null,
    } | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetProductQueryVariables = {
  id?: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description: string,
    price: string,
    category: string,
    image?: string | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      name: string,
      description: string,
      price: string,
      category: string,
      image?: string | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetHistoryQueryVariables = {
  id?: string,
};

export type GetHistoryQuery = {
  getHistory?:  {
    __typename: "History",
    id: string,
    title: string,
    content: string,
    image?: string | null,
    className?:  {
      __typename: "Class",
      className?: string | null,
      className2?: string | null,
    } | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListHistorysQueryVariables = {
  filter?: ModelHistoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListHistorysQuery = {
  listHistorys?:  {
    __typename: "ModelHistoryConnection",
    items:  Array< {
      __typename: "History",
      id: string,
      title: string,
      content: string,
      image?: string | null,
      className?:  {
        __typename: "Class",
        className?: string | null,
        className2?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description: string,
    price: string,
    category: string,
    image?: string | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description: string,
    price: string,
    category: string,
    image?: string | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description: string,
    price: string,
    category: string,
    image?: string | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateHistorySubscription = {
  onCreateHistory?:  {
    __typename: "History",
    id: string,
    title: string,
    content: string,
    image?: string | null,
    className?:  {
      __typename: "Class",
      className?: string | null,
      className2?: string | null,
    } | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateHistorySubscription = {
  onUpdateHistory?:  {
    __typename: "History",
    id: string,
    title: string,
    content: string,
    image?: string | null,
    className?:  {
      __typename: "Class",
      className?: string | null,
      className2?: string | null,
    } | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteHistorySubscription = {
  onDeleteHistory?:  {
    __typename: "History",
    id: string,
    title: string,
    content: string,
    image?: string | null,
    className?:  {
      __typename: "Class",
      className?: string | null,
      className2?: string | null,
    } | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
