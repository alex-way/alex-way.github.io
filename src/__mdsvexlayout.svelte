<script context="module">
  import h1 from '$lib/components/cv/h1.svelte';
  import h2 from '$lib/components/cv/h2.svelte';
  import h3 from '$lib/components/cv/h3.svelte';
  import h4 from '$lib/components/cv/h4.svelte';
  import h5 from '$lib/components/cv/h5.svelte';
  import h6 from '$lib/components/cv/h6.svelte';
  import p from '$lib/components/cv/p.svelte';
  import li from '$lib/components/cv/li.svelte';
  import ul from '$lib/components/cv/ul.svelte';
  import a from '$lib/components/cv/a.svelte';
  import code from '$lib/components/cv/code.svelte';
  import em from '$lib/components/cv/em.svelte';
  import strong from '$lib/components/cv/strong.svelte';
  import hr from '$lib/components/cv/hr.svelte';
  import td from '$lib/components/cv/td.svelte';
  import table from '$lib/components/cv/table.svelte';

  export { h1, h2, h3, h4, h5, h6, p, li, ul, a, code, em, strong, hr, td, table };
</script>

<div class="max-w-2xl mx-auto selection:bg-primary-200 py-4">
  <slot />
</div>
