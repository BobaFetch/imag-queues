<script lang="ts">
	//TODO: fix Department type
	import { page } from '$app/stores';
	import { onDestroy, onMount } from 'svelte';
	import { api } from '$lib/api';
	import DeptTable from '$lib/components/DeptTable.svelte';
	import DailyChart from '$lib/components/DailyChart.svelte';
	import WeeklyChart from '$lib/components/WeeklyChart.svelte';
	import Spinner from '$lib/components/Spinner.svelte';
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
		setInterval(() => {
			const time = new Date(Date.now())
			getDepartmentData()
		}, 300000)
	});

</script>

<div class="flex flex-col md:grid md:grid-rows-6">
	{#if loading}
		<div class="row-span-6 flex items-center justify-center">
			<Spinner />
		</div>
	{:else}
		<!-- <div class="grid grid-rows-6"> -->
			<div class="row-span-1 my-auto">
				<h2 class="text-5xl py-3 px-2 text-center">{data.department.name}</h2>
				<div class="flex items-center justify-evenly py-2">
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
				<div class="flex flex-col lg:grid lg:grid-cols-12 gap2">
					<div class="col-span-9 gap-2 px-2">
						<div class="border border-black">
							<DeptTable deptData={data.parts} />
						</div>
					</div>
					{#if data.employeeStats}
					<!-- <div class="grid g gap-2 p-2"> -->
						<div class="col-span-3 px-2">
								<DailyChart stats={data.employeeStats} />
								<WeeklyChart goal={data.stats.dailyGoal} stats={data.stats.weeklyStats}/>
						</div>
						<!-- </div> -->
						{/if}
					</div>
			</div>
		<!-- </div> -->
		
	{/if}
</div>
