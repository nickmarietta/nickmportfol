<script>
  export let data;
  const { projects, experiences } = data ?? {};
  import Main from "../components/Main.svelte";
</script>

<Main {projects} {experiences} />
