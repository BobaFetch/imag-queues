<script>
	import '../app.css';

	import Navigation from '$lib/components/Navigation.svelte';
</script>

<div class="h-fit bg-gray-200">
	<Navigation />
	<slot />
</div>
