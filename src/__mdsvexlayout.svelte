<script context="module">
  import h1 from '$lib/components/cv/components/base/h1.svelte';
  import h2 from '$lib/components/cv/components/base/h2.svelte';
  import h3 from '$lib/components/cv/components/base/h3.svelte';
  import h4 from '$lib/components/cv/components/base/h4.svelte';
  import h5 from '$lib/components/cv/components/base/h5.svelte';
  import h6 from '$lib/components/cv/components/base/h6.svelte';
  import p from '$lib/components/cv/components/base/p.svelte';
  import li from '$lib/components/cv/components/base/li.svelte';
  import ul from '$lib/components/cv/components/base/ul.svelte';
  import a from '$lib/components/cv/components/base/a.svelte';
  import code from '$lib/components/cv/components/base/code.svelte';
  import em from '$lib/components/cv/components/base/em.svelte';
  import strong from '$lib/components/cv/components/base/strong.svelte';
  import hr from '$lib/components/cv/components/base/hr.svelte';

  export { h1, h2, h3, h4, h5, h6, p, li, ul, a, code, em, strong, hr };
</script>

<div class="max-w-2xl mx-auto selection:bg-primary-200">
  <slot />
</div>
