<script context="module">
  import { api } from "$lib/api";

  let jobs;

  export async function load({fetch}) {
    const res = await fetch(`${api}/burndown`)

    return {
      props: {
        jobs: res.ok && (await res.json())
      }
    }
  }

</script>

<script>
  import BurndownTable from "$lib/components/BurndownTable.svelte";

  export let jobs 
</script>

<div class="flex flex-col justify-center items-center">
  <h1 class="text-5xl">BURNDOWN</h1>
  <BurndownTable jobs={jobs} />
</div>