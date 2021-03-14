<script lang="ts">
  import type { Form } from "./store";
  import { store } from "./store";
  export let form: Form = { name: "", info: "" };
  // $: console.log(`The value of form is ${form.name} and ${form.info}`);

  function handleSubmit() {
    if (form.name === "" || form.info === "") {
      alert("Sebelum submit, harus diisi");
      return;
    }
    console.log(`Submitted value is ${form.name} and ${form.info}`);
    store.update((n) => [...n, form]);

    // kosongkan form
    form = { name: "", info: "" };
  }
</script>

<form class="form-container" on:submit|preventDefault={handleSubmit}>
  <div class="form-group">
    <label for="name">Name</label>
    <input name="name" size="45" bind:value={form.name} />
  </div>
  <div class="form-group">
    <label for="info">Input</label>
    <input name="info" size="45" bind:value={form.info} />
  </div>
  <button type="submit"> Submit!!! </button>
</form>

<style>
  .form-container {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    box-sizing: border-box;
    margin: 25px;
    padding: 10px;
  }

  .form-group {
    border-color: black;
    margin-bottom: 25px;
    display: flex;
    justify-content: space-between;
  }
</style>
