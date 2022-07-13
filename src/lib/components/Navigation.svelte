<script lang="ts">
  import { departments } from '$lib/data'

  let menuIndex: number | null = null
  
  function setMenuIndex(index:number | null) {
    menuIndex = index
  }

</script>

<div class="flex flex-col p-2 bg-slate-700 text-white">
  <div class="flex items-center justify-between">
    <h1 class="text-5xl">IMAGINETICS</h1>
  </div>

  <div class="flex items-center justify-evenly p-2">
    {#each departments as department, index}
      <div on:mouseenter={() => setMenuIndex(index)} on:mouseleave={() => setMenuIndex(null)}>
        <h5 class="dropdown-btn">{department.parent}</h5>
        <ul class={index === menuIndex ? "menuShow" : "menuHidden"}>
          {#each department.children as child}
            <li class="hover:text-white py-1"><a sveltekit:prefetch href={`/dept/${child.wcNumber}`} target="_parent">{child.name}</a></li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
</div>

<style lang="postcss">
  .menuHidden {
    @apply hidden;
  }

  .menuShow {
    @apply
      flex
      flex-col
      absolute
      bg-slate-700
      text-gray-300
      p-3 
      opacity-95
      rounded-br-lg;
  }
</style>