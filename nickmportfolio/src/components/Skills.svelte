<script>
  import { cn } from "$lib/utils";
  import { onMount, onDestroy } from "svelte";
  
  export let className = "";
  export let reverse = false;
  export let duration = 20;
  export let delay = 0;
  export let radius = 10;
  export let path = true;
  export let url = "";
  
  let element;
  let animationId;
  let startTime;
  
  function handleClick() {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }
  
  onMount(() => {
    startTime = Date.now() + (delay * 1000);
    
    function animate() {
      const now = Date.now();
      const elapsed = (now - startTime) / 1000;
      const progress = (elapsed % duration) / duration;
      
      const angle = reverse ? -360 * progress : 360 * progress;
      const radians = (angle * Math.PI) / 180;
      
      const x = Math.cos(radians) * radius;
      const y = Math.sin(radians) * radius;
      
      if (element) {
        element.style.transform = `translate(${x}px, ${y}px)`;
      }
      
      animationId = requestAnimationFrame(animate);
    }
    
    animate();
  });
  
  onDestroy(() => {
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
  });
</script>

{#if path}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    class="pointer-events-none absolute inset-0 h-full w-full"
  >
    <circle
      class="stroke-gray-600/20 stroke-1"
      cx="50%"
      cy="50%"
      r={radius}
      fill="none"
      stroke-dasharray="4 4"
    />
  </svg>
  <div
    bind:this={element}
    class={cn(
      "absolute flex items-center justify-center rounded-full transition-transform duration-100",
      "h-16 w-16",
      url ? "cursor-pointer hover:scale-110 transition-transform" : "",
      className
    )}
    style="
      left: calc(50% - 32px);
      top: calc(50% - 32px);
    "
    on:click={handleClick}
    role={url ? "button" : undefined}
    tabindex={url ? "0" : undefined}
    on:keydown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleClick();
      }
    }}
  >
    <slot></slot>
  </div>
{/if}
