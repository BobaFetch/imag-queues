<script lang="ts">
	import UpdateModal from '$lib/components/UpdateModal.svelte';

	interface PartPurchaseOrder {
		partNumber: string;
		run: string;
		purchaseOrder: string;
		item: number;
		workCenter: string;
	}
	// TODO: create a store for partList
	let partList: PartPurchaseOrder[];
	let searching: boolean = true;
	let updateModalOpen: boolean = false;
</script>

{#if searching}
	<h1 class="text-4xl font-bold"></h1>
{:else if partList.length > 0}
	<!-- display the list of open jobs for part number -->
	<!-- more tables -->
	<table>
		<thead>
			<tr>
				<th>Part Number</th>
				<th>Run</th>
				<th>Sales Order</th>
				<th>Line Item</th>
				<th>Current Work Center</th>
			</tr>
		</thead>
		<tbody>
			{#each partList as partPurchaseOrder}
				<tr>
					<td>
						<a href={`#`}>
							{partPurchaseOrder.partNumber}
						</a>
					</td>
					<td>{partPurchaseOrder.run}</td>
					<td>{partPurchaseOrder.purchaseOrder}</td>
					<td>{partPurchaseOrder.item}</td>
					<td>{partPurchaseOrder.workCenter ? partPurchaseOrder.workCenter : ''}</td>
				</tr>
			{/each}
		</tbody>
	</table>
{/if}

<UpdateModal title="" bind:open={updateModalOpen} />
