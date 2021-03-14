<script lang="typescript">
  import Form from "./Form.svelte";
  import List from "./List.svelte";
  import type { Form as FormType } from "./store";
  import { store } from "./store";
  let status = false;

  function handleSubmit() {
    console.log("from App.svelte");
  }

  let formValue: FormType[];
  $: console.log(formValue);

  // munculkan store nya
  let _ = store.subscribe((value) => {
    formValue = value;
  });
</script>

<div class="App">
  <div class="container">
    <Form on:submit={handleSubmit} />
    <List />
  </div>
</div>

<style>
  .container {
    position: absolute;
    left: 25%;
    right: 25%;
    top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid black;
  }
</style>
