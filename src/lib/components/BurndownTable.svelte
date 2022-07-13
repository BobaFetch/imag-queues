<script>
  import { convertTime } from '$lib/utils'
  export let jobs
</script>

  <table class="w-fit mx-3">
    <thead>
      <tr class="border border-black">
        <th class="border border-black bg-red-400 p-1">Work Center</th>
      <th class="border border-black bg-red-400 p-1">Part Number</th>
      <th class="border border-black bg-red-400 p-1">Run</th>
      <th class="border border-black bg-red-400 p-1">Quantity</th>
      <th class="border border-black bg-red-400 p-1">Time In Queue</th>
      <th class="border border-black bg-red-400 p-1">Comments</th>
    </tr>
  </thead>
  <tbody>
    {#each jobs as job}
    <tr>
      <td class="border border-black p-1" >{job.wcName}</td>
      <td class="border border-black p-1" >{job.partNumber}</td>
      <td class="border border-black p-1 text-center" >{job.run}</td>
      <td class="border border-black p-1 text-center" >{parseInt(job.quantity)}</td>
      <td class="border border-black p-1 text-center" >{convertTime(job.queueDiff)}</td>
      <td class="border border-black p-1" >{job.comments}</td>
    </tr>
    {/each}
  </tbody>
</table>
