<script>
  import "../app.css";
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import NeuralCanvas from "../components/NeuralCanvas.svelte";
</script>

<NeuralCanvas />
<Header />
<div class="page">
  <slot />
  <Footer />
</div>
