/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  'query GetProductsBySmellVariants($first: Int = 10, $skip: Int = 0) {\n  productSmellVariantsConnection(first: $first, skip: $skip) {\n    aggregate {\n      count\n    }\n    pageInfo {\n      hasPreviousPage\n      hasNextPage\n    }\n    edges {\n      node {\n        id\n        name\n        image {\n          url\n        }\n        product {\n          category {\n            name\n          }\n          company {\n            name\n          }\n          name\n          slug\n          productSizeVariants(orderBy: price_ASC, first: 1) {\n            price\n          }\n        }\n      }\n    }\n  }\n}\n\nquery GetNewArrivals {\n  collections(where: {name: "just in"}) {\n    name\n    productSmellVariants {\n      name\n      image {\n        url\n      }\n      product {\n        company {\n          name\n        }\n        category {\n          name\n        }\n        name\n        slug\n        productSizeVariants(orderBy: price_ASC, first: 1) {\n          price\n        }\n      }\n    }\n  }\n}':
    types.GetProductsBySmellVariantsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query GetProductsBySmellVariants($first: Int = 10, $skip: Int = 0) {\n  productSmellVariantsConnection(first: $first, skip: $skip) {\n    aggregate {\n      count\n    }\n    pageInfo {\n      hasPreviousPage\n      hasNextPage\n    }\n    edges {\n      node {\n        id\n        name\n        image {\n          url\n        }\n        product {\n          category {\n            name\n          }\n          company {\n            name\n          }\n          name\n          slug\n          productSizeVariants(orderBy: price_ASC, first: 1) {\n            price\n          }\n        }\n      }\n    }\n  }\n}\n\nquery GetNewArrivals {\n  collections(where: {name: "just in"}) {\n    name\n    productSmellVariants {\n      name\n      image {\n        url\n      }\n      product {\n        company {\n          name\n        }\n        category {\n          name\n        }\n        name\n        slug\n        productSizeVariants(orderBy: price_ASC, first: 1) {\n          price\n        }\n      }\n    }\n  }\n}'
): (typeof documents)['query GetProductsBySmellVariants($first: Int = 10, $skip: Int = 0) {\n  productSmellVariantsConnection(first: $first, skip: $skip) {\n    aggregate {\n      count\n    }\n    pageInfo {\n      hasPreviousPage\n      hasNextPage\n    }\n    edges {\n      node {\n        id\n        name\n        image {\n          url\n        }\n        product {\n          category {\n            name\n          }\n          company {\n            name\n          }\n          name\n          slug\n          productSizeVariants(orderBy: price_ASC, first: 1) {\n            price\n          }\n        }\n      }\n    }\n  }\n}\n\nquery GetNewArrivals {\n  collections(where: {name: "just in"}) {\n    name\n    productSmellVariants {\n      name\n      image {\n        url\n      }\n      product {\n        company {\n          name\n        }\n        category {\n          name\n        }\n        name\n        slug\n        productSizeVariants(orderBy: price_ASC, first: 1) {\n          price\n        }\n      }\n    }\n  }\n}'];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
