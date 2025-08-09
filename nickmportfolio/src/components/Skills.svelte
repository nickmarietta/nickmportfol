<script>
  import { cn } from "$lib/utils";
  export let className = "";
  export let reverse = false;
  export let duration = 20;
  export let delay = 0;
  export let radius = 10
  export let path = true;
</script>

{#if path}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    class="pointer-events-none absolute inset-0 h-full w-full"
  >
    <circle
      class="stroke-black/10 stroke-1 dark:stroke-white/10"
      cx="50%"
      cy="50%"
      r={radius}
      fill="none"
      stroke-dasharray="4 4"
    />
  </svg>
    <div
    style:--delay={delay}
    style:--duration={duration}
    style:--radius={radius}
    class={cn(
        "absolute flex h-[100px] w-[100px] transform-gpu animate-orbit items-center justify-center rounded-full border bg-black/10 [animation-delay:calc(var(--delay)*1000ms)] dark:bg-white/10",
        { "[animation-direction:reverse]": reverse },
        className
    )}
    >
    <slot></slot>
    </div>
{/if}
