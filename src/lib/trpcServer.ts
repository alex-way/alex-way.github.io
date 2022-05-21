import type { inferAsyncReturnType } from '@trpc/server';
import * as trpc from '@trpc/server';
import transformer from 'trpc-transformer';

// optional
export const createContext = () => {
  // ...
  return {
    /** context data */
  };
};

// optional
export const responseMeta = () => {
  // ...
  return {
    // { headers: ... }
  };
};

export const router = trpc
  .router<inferAsyncReturnType<typeof createContext>>()
  // queries and mutations...
  .query('hello', {
    resolve: () => 'world'
  })
  .transformer(transformer);

export type Router = typeof router;
