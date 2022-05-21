<script context="module" lang="ts">
  import trpcClient from '$lib/trpcClient';
  import type { InferQueryOutput } from '$lib/trpcClient';
  import type { Load } from '@sveltejs/kit';

  export const load: Load = async ({ fetch }) => {
    const world = await trpcClient(fetch).query('hello');
    return { props: { world } };
  };
</script>

<script lang="ts">
  export let world: InferQueryOutput<'hello'>;
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<h1 class="text-lg">Hello {world}</h1>
