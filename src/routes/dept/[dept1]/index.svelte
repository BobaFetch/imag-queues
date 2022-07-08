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
			<p class="text-5xl bg-slate-700 text-white w-full p-2">{data.department.name}</p>
			<div class="row-span-5">
				<div class="grid grid-cols-12 gap-2 px-2">
					<div class="col-span-10 border border-black">
						<DeptTable deptData={data.parts} />
					</div>
				</div>
			</div>
		</div>
		<div class="grid grid-cols-12 gap-2 border border-black">
			<div class='col-span-6'>
				<DailyChart stats={data.employeeStats} />
			</div>
		</div>
	{/if}
</div>
