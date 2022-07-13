<script>
  //TODO
  //temp
  const data = [
    {
      "wcName": "Assembly",
      wcNumber: "2200"
    }
  ]
</script>

<div class="flex flex-col p-2 bg-slate-700 text-white">
  <div class="flex items-center justify-between">
    <h1 class="text-5xl">IMAGINETICS</h1>
  </div>

  <div>
    <ul>
      {#each data as dept}
        <li><a href={`/dept/${dept.wcNumber}`}>{dept.wcName}</a></li>
      {/each}
    </ul>
  </div>
</div>
