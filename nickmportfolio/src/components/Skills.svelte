<script>
  import { cn } from "$lib/utils";
  export let className = "";
  export let reverse = false;
  export let duration = 20;
  export let delay = 0;
  export let radius = 10;
  export let path = true;
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
    class={cn(
      "absolute flex items-center justify-center rounded-full",
      "h-16 w-16",
      className
    )}
    style="
      left: 50%;
      top: 50%;
      margin-left: -8px;
      margin-top: -8px;
      --radius: {radius}px;
      --duration: {duration}s;
      --delay: {delay}s;
      animation: orbit var(--duration) linear infinite;
      animation-delay: var(--delay);
      animation-direction: {reverse ? 'reverse' : 'normal'};
      transform-origin: center;
    "
  >
    <slot></slot>
  </div>
{/if}

<style>
  @keyframes orbit {
    0% {
      transform: rotate(0deg) translateX(var(--radius)) rotate(0deg);
    }
    100% {
      transform: rotate(360deg) translateX(var(--radius)) rotate(-360deg);
    }
  }
</style>
