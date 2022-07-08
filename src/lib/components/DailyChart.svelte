<script lang="ts">
  import { onMount } from 'svelte';
  import type { EmployeeStats } from '$lib/types';

  import Chart from 'chart.js/auto/auto.js'
  export let stats:EmployeeStats[]

  let employeeChart:HTMLCanvasElement;
  
  const data = {
    labels: stats.map((i) => i.employee.trim()),
    datasets: [
      {
        label: 'Jobs Completed',
        data: stats.map((n) => n.completedJobs),
        backgroundColor: ['#d8495f', '#32909e', '#cc3284', '#328c7b', '#904493', '#41945e', '#8633d0', '#ae7b38', '#5d73d7', '#d25935'],
        hoverOffset: 2,
        borderWidth: 0,
      }
    ]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      // cutout: '85%',
      responsive: true,
      spacing: 2,
      plugins: {
        legend: {
          postition: 'top',
          display: false,
          align: 'bottom',
          labels: {
            usePointStyle: true,
            padding: 10,
            textAlign: 'right',
            font: {
              size: 14
            },
            color: 'black'
          }
        },
        title: {
          display: true,
          text: 'Jobs Completed Per Employee',
          color: 'black'
        }
      }
    }
  };

  onMount(() => {
    const ctx = employeeChart.getContext('2d');
    let myChart = new Chart(ctx, config);
  })
</script>

<div>
  <canvas bind:this={employeeChart} class="w-fit" />
</div>