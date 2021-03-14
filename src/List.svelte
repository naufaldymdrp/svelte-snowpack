<script lang="ts">
  import Form from "./Form.svelte";

  import type { Form as FormType } from "./store";
  import { store } from "./store";

  let formValue: FormType[];
  $: console.log("Form value berubah, halo dari List component");
  store.subscribe((value) => {
    formValue = value;
  });
</script>

{#if formValue.length !== 0}
  <ul class="list">
    {#each formValue as formItem}
      <li class="list-item">
        {formItem.name} |
        {formItem.info}
      </li>
    {/each}
  </ul>
{/if}

<style>
  .list {
    margin: 0 25px 25px 25px;
    list-style: none;
    padding: 0;
  }

  .list-item {
    border: 1px solid black;
    margin-bottom: 5px;
  }
</style>
