<script>
  export let title = "Gradient Card";
  export let desc = "Card I can import to different files.";
  export let className = "";
</script>

<div class={`text-left p-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl shadow-lg ${className}`}>

  <!-- Content goes here -->
  <div class="bg-white rounded-lg p-4 shadow-md text-black">
    <slot />
  </div>
</div>