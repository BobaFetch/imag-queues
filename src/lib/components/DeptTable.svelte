<script lang="ts">
	import type { Job } from "$lib/types";
	import { convertTime } from '$lib/utils'
	
	export let deptData:Job[]
</script>

{#if deptData}
	<table class="table border border-black bg-gray-200 w-full">
		<thead class="border border-black bg-red-300">
			<tr>
				<th class="border border-black p-1">Part Number</th>
				<th class="border border-black p-1">Run</th>
				<th class="border border-black p-1 hidden md:table-cell">Time In Queue</th>
				<th class="border border-black p-1">Quantity</th>
				<th class="border border-black p-1 hidden md:table-cell">Customer</th>
				<th class="border border-black p-1">Op Schedule Date</th>
				<th class="border border-black p-1 hidden md:table-cell">Priority</th>
				<th class="border border-black p-1">Comments</th>
			</tr>
		</thead>
		<tbody>
			{#each deptData as job}
				<tr>
					<td class="border border-black p-1">{job.partNumber}</td>
					<td class="border border-black p-1 text-center">{job.run}</td>
					<td class="border border-black p-1 text-center hidden md:table-cell">{convertTime(job.queueDiff)}</td>
					<td class="border border-black p-1 text-center">{job.qty}</td>
					<td class="border border-black p-1 hidden md:table-cell">{job.customer}</td>
					<td class="border border-black p-1 text-center">{new Date(job.schedDate).toLocaleDateString()}</td>
					<td class="border border-black p-1 text-center hidden md:table-cell">{job.priority}</td>
					<td class="border border-black p-1">{job.comments ? job.comments : ''}</td>
				</tr>
			{/each}
		</tbody>
	</table>
{:else}
	<p>NO JOBS IN QUEUE</p>
{/if}
