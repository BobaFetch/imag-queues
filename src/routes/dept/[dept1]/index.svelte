<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { api } from '$lib/api';
	import DeptTable from '$lib/components/DeptTable.svelte';
	import DailyChart from '$lib/components/DailyChart.svelte';
	import type { Department } from '$lib/types';

	const { log } = console;

	let data:Department;
	let loading = true;

	const { dept1 } = $page.params;

	async function getDepartmentData() {
		await fetch(`${api}/dept/${dept1}`)
		  .then((res) => res.json())
			.then((json) => {
				data = json
				loading = false
			})
			.catch((err) => log(err))
	}

	onMount(() => {
		loading = true;
		getDepartmentData();
	});
</script>

<div class="">
	{#if loading}
		<h1>LOADING...</h1>
	{:else}
		<div class="grid grid-rows-6">
			<div class="row-span-1 my-auto">
				<h2 class="text-5xl py-3 px-2 text-center">{data.department.name}</h2>
				<div class="flex items-center justify-around">
					<div class="text-center">
						<h5 class="text-2xl">Daily Goal</h5>
						<h6 class="text-xl">{data.stats.dailyGoal}</h6>
					</div>
					<div class="text-center">
						<h5 class="text-2xl">Jobs Completed</h5>
						<h6 class="text-xl">{data.stats.completedJobs}</h6>
					</div>
					<div class="text-center">
						<h5 class="text-2xl">Parts Completed</h5>
						<h6 class="text-xl">{data.stats.completedParts}</h6>
					</div>
				</div>
			</div>
			<div class="row-span-5">
				<div class="grid grid-cols-12 gap-2 px-2">
					<div class="col-span-12 border border-black">
						<DeptTable deptData={data.parts} />
					</div>
				</div>
			</div>
		</div>
		<div class="grid grid-cols-12 gap-2 p-2">
			<div class='col-span-6'>
				<DailyChart stats={data.employeeStats} />
			</div>
		</div>
	{/if}
</div>
