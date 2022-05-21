import type { Router } from '$lib/trpcServer'; // 👈 only the types are imported from the server
import * as trpc from '@trpc/client';
import { browser } from '$app/env';
import transformer from 'trpc-transformer';
import type { inferProcedureInput, inferProcedureOutput } from '@trpc/server';

// export default trpc.createTRPCClient<Router>({ url: '/trpc' });

const url = browser ? '/trpc' : 'http://localhost:3000/trpc';
export default (loadFetch?: typeof fetch) =>
  trpc.createTRPCClient<Router>({
    url: loadFetch ? '/api' : url,
    transformer,
    ...(loadFetch && { fetch: loadFetch })
  });

type Query = keyof Router['_def']['queries'];
type Mutation = keyof Router['_def']['mutations'];

export type InferQueryOutput<RouteKey extends Query> = inferProcedureOutput<
  Router['_def']['queries'][RouteKey]
>;
export type InferQueryInput<RouteKey extends Query> = inferProcedureInput<
  Router['_def']['queries'][RouteKey]
>;
export type InferMutationOutput<RouteKey extends Mutation> = inferProcedureOutput<
  Router['_def']['mutations'][RouteKey]
>;
export type InferMutationInput<RouteKey extends Mutation> = inferProcedureInput<
  Router['_def']['mutations'][RouteKey]
>;
