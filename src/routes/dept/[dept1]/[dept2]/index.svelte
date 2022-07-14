<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte'
  import { api } from '$lib/api';
  
  import DeptTable from '$lib/components/DeptTable.svelte';
  import DailyChart from '$lib/components/DailyChart.svelte';
  import WeeklyChart from '$lib/components/WeeklyChart.svelte';
  import Spinner from '$lib/components/Spinner.svelte';

  import type { Department } from '$lib/types';

  const { log } = console;

  let d1:Department;
  let d2:Department;
  let loading = true;

  const {dept1, dept2} = $page.params;

  async function getDepartmentData() {
    await Promise.all([
      fetch(`${api}/dept/${dept1}`)
        .then((res) => res.json())
        .then((json) => d1 = json)
        .catch((err) => log(err)),
      fetch(`${api}/dept/${dept2}`)
        .then((res) => res.json())
        .then((json) => d2 = json)
        .catch((err) => log(err))
      ])
      .finally(() => loading = false)
  }

  onMount(() => {
    loading = true
    getDepartmentData()
  })
</script>

<div class="flex flex-col md:grid md:grid-rows-6">
	{#if loading}
		<div class="row-span-6 flex items-center justify-center">
			<Spinner />
		</div>
  {:else}
  <!-- heading/statistics -->
    <div class="row-span-1 my-auto">
      <h2 class="text-5xl py-3 px-2 text-center">{d1.department.name} | {d2.department.name}</h2>
      <div class="flex items-center justify-evenly py-2">
        <div class="text-center">
          <h5 class="text-2xl">Daily Goal</h5>
          <h6 class="text-xl">{d1.stats.dailyGoal + d2.stats.dailyGoal}</h6>
        </div>
        <div class="text-center">
          <div class="text-2xl">Jobs Completed</div>
          <div class="text-xl">{d1.stats.completedJobs + d2.stats.completedJobs}</div>
        </div>
        <div class="text-center">
          <div class="text-2xl">Parts Completed</div>
          <div class="text-xl">{d1.stats.completedParts + d2.stats.completedParts}</div>
        </div>
      </div>
    </div>
    <!-- tables -->
    <div class="row-span-3">
      <div class="flex flex-col lg:grid lg:grid-cols-12 gap-2">
        <div class="col-span-6">
          <DeptTable deptData={d1.parts} />
        </div>
        <div class="col-span-6">
          <DeptTable deptData={d2.parts} />
        </div>
      </div>
    </div>

    <!-- charts -->
    <div class="row-span-2">
      <div class="flex flex-col lg:grid lg:grid-cols-12 gap-2">
        <div class="col-span-6">
          <DailyChart stats={[...d1.employeeStats, ...d2.employeeStats]} />
        </div>
        <div class="col-span-6">
          <!-- <WeeklyChart goal={d1.stats.dailyGoal + d2.stats.dailyGoal} stats={null} /> -->
        </div>
      </div>
    </div>
	{/if}
</div>