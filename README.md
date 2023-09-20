# Shopify API Types

## Informations

The types definitions of this package are generated using [`@quasarwork/shopify-api-types-codegen`](https://github.com/quasarwork/shopify-api-types-codegen).

⚠️ Currently only Shopify Admin API is implemented.

## Installation

```
# You can use your preferred Node package manager
yarn add @quasarwork/shopify-api-types -D
```

## Usage

### Basics

You can import whatever Shopify resource (object), query or mutation that is available within their different APIs.

For example if you want the `Product` object from the Shopify Admin API:

```typescript
import type { Product } from "@quasarwork/shopify-api-types/admin/2023-07";
```

You can specify any version that is being currently [supported by Shopify](https://shopify.dev/docs/api).

The package also supports aliases for `latest`, `release_candidate` and `unstable`:

```typescript
import type { Product } from "@quasarwork/shopify-api-types/admin/latest";
```

### [`@shopify/shopify-api`](https://github.com/Shopify/shopify-api-js) utils

Some utils types have been manually added to improve DX when using the graphql client from `@shopify/shopify-api`.

Let's say you want to do a `productCreate` GraphQL mutation on the Shopify Admin API with the graphql client provided, you could do as below to get a fully typed experience:

```typescript
// ...

import type {
  Mutation,
  Product,
} from "@quasarwork/shopify-api-types/api/admin/2023-07";
import type { RequestReturn } from "@quasarwork/shopify-api-types/utils/shopify-api";

// ...

const graphqlClient = new shopify.clients.Graphql({
  session,
  apiVersion: ApiVersion.January23,
});

const response: RequestReturn<Pick<Mutation, "productCreate">> =
  await graphqlClient.query({
    data: {
      query: `
        mutation productCreate($input: ProductInput!) {
          productCreate(input: $input) {
            product {
              id
              legacyResourceId
            }
            userErrors {
              field
              message
            }
          }
        }
      `,
      variables: {
        /* ... */
      },
    },
  });
```
