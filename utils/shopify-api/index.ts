/**
 * Extends @shopify/shopify-api RequestReturn
 *
 * Initial version can be found here:
 * [node_modules/@shopify/shopify-api/lib/clients/graphql/graphql_client.d.ts](node_modules/@shopify/shopify-api/lib/clients/graphql/graphql_client.d.ts)
 */
export interface RequestReturn<T = unknown> {
  body: Response<T>;
  headers: Headers;
}

export interface Headers {
  [key: string]: string | string[];
}

export interface Response<T> {
  data: T;
  extensions: Extensions;
}

export interface Extensions {
  cost: Cost;
}

export interface Cost {
  requestedQueryCost: number;
  actualQueryCost: number;
  throttleStatus: ThrottleStatus;
}

export interface ThrottleStatus {
  maximumAvailable: number;
  currentlyAvailable: number;
  restoreRate: number;
}
