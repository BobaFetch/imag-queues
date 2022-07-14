<script lang="ts">
  import { onMount } from 'svelte'
  import type { WeeklyStats } from '$lib/types';
  
  import Chart from 'chart.js/auto/auto'
  
  export let stats: WeeklyStats[]
  export let goal: number

  let weeklyChart:HTMLCanvasElement;

  const data = {
    labels: stats.map((d) => new Date(d.completionDate).toLocaleDateString() + 1),
    datasets: [
      {
        label: 'Jobs Completed',
        data: stats.map((n) => n.completedJobs),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      {
        label: 'Goal',
        data: stats.map((i) => goal),
        borderColor: 'rgb(255, 125, 125)'
      }
    ]
  }

  const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
          position: 'top',
        },
        title: {
          display: true,
          text: 'Weekly Stats',
          color: 'black',
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100
        }
      }
    }
  }

  onMount(() => {
    const ctx = weeklyChart.getContext('2d');
    let myChart = new Chart(ctx, config);
  })
</script>

<div>
  <canvas bind:this={weeklyChart} class="w-fit" />
</div>