<script>
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  
  // Sample skill data with Pokémon types
  export let skills = [
    { id: 1, name: "JavaScript", level: 85, category: "Frontend", type: "electric", icon: "fa-brands fa-js" },
    { id: 2, name: "CSS", level: 75, category: "Frontend", type: "water", icon: "fa-brands fa-css3-alt" },
    { id: 3, name: "HTML", level: 90, category: "Frontend", type: "rock", icon: "fa-brands fa-html5" },
    { id: 4, name: "React", level: 70, category: "Frontend", type: "fire", icon: "fa-brands fa-react" },
    { id: 5, name: "Svelte", level: 65, category: "Frontend", type: "ice", icon: "fa-solid fa-code" },
    { id: 6, name: "Node.js", level: 80, category: "Backend", type: "grass", icon: "fa-brands fa-node-js" },
    { id: 7, name: "Express", level: 75, category: "Backend", type: "ground", icon: "fa-solid fa-server" },
    { id: 8, name: "MongoDB", level: 60, category: "Database", type: "psychic", icon: "fa-solid fa-database" },
    { id: 9, name: "SQL", level: 70, category: "Database", type: "steel", icon: "fa-solid fa-table" },
    { id: 10, name: "Git", level: 85, category: "Tools", type: "dark", icon: "fa-brands fa-git-alt" }
  ];

  // Pokémon type colors
  const typeColors = {
    normal: '#A8A878',
    fire: '#F08030',
    water: '#6890F0',
    electric: '#F8D030',
    grass: '#78C850',
    ice: '#98D8D8',
    fighting: '#C03028',
    poison: '#A040A0',
    ground: '#E0C068',
    flying: '#A890F0',
    psychic: '#F85888',
    bug: '#A8B820',
    rock: '#B8A038',
    ghost: '#705898',
    dragon: '#7038F8',
    dark: '#705848',
    steel: '#B8B8D0',
    fairy: '#EE99AC'
  };

  let selectedCategory = 'All';
  let isOpen = false;

  $: filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  $: categories = ['All', ...new Set(skills.map(skill => skill.category))];

  function toggleDropdown() {
    isOpen = !isOpen;
  }

  function selectCategory(category) {
    selectedCategory = category;
    isOpen = false;
  }
</script>

<div class="skills-container" in:fade={{ duration: 500 }}>
  <div class="dropdown">
    <button class="dropdown-button" on:click={toggleDropdown}>
      {selectedCategory} <i class="fa-solid fa-chevron-down"></i>
    </button>
    
    {#if isOpen}
      <div class="dropdown-content" in:fly={{ y: -10, duration: 200 }}>
        {#each categories as category}
          <button 
            class="dropdown-item" 
            on:click={() => selectCategory(category)}
            class:active={category === selectedCategory}
          >
            {category}
          </button>
        {/each}
      </div>
    {/if}
  </div>

  <div class="skills-grid">
    {#each filteredSkills as skill (skill.id)}
      <div 
        class="skill-card"
        style="--type-color: {typeColors[skill.type]}"
        in:fly={{ y: 20, duration: 300, delay: skill.id * 50 }}
      >
        <div class="skill-header">
          <i class={skill.icon}></i>
          <span class="skill-type" style="background-color: {typeColors[skill.type]}">
            {skill.type}
          </span>
        </div>
        <h3 class="skill-name">{skill.name}</h3>
        <div class="skill-level">
          <div class="level-bar">
            <div class="level-fill" style="width: {skill.level}%"></div>
          </div>
          <span class="level-text">{skill.level}%</span>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .skills-container {
    padding: 20px;
    background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
    border-radius: 15px;
    box-shadow: 0 0 20px rgba(0,0,0,0.3);
  }

  .dropdown {
    position: relative;
    margin-bottom: 20px;
  }

  .dropdown-button {
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid #444;
    color: white;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.1em;
    transition: all 0.3s ease;
  }

  .dropdown-button:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  .dropdown-content {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #2a2a2a;
    border: 2px solid #444;
    border-radius: 8px;
    margin-top: 5px;
    z-index: 1000;
    overflow: hidden;
  }

  .dropdown-item {
    display: block;
    width: 100%;
    padding: 10px 20px;
    background: none;
    border: none;
    color: white;
    text-align: left;
    cursor: pointer;
    transition: background 0.2s ease;
  }

  .dropdown-item:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  .dropdown-item.active {
    background: rgba(255, 255, 255, 0.2);
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    padding: 10px;
  }

  .skill-card {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    padding: 20px;
    color: white;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 2px solid var(--type-color);
  }

  .skill-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  }

  .skill-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }

  .skill-header i {
    font-size: 2em;
    color: var(--type-color);
  }

  .skill-type {
    padding: 5px 10px;
    border-radius: 15px;
    font-size: 0.8em;
    text-transform: capitalize;
    color: white;
  }

  .skill-name {
    margin: 0 0 15px 0;
    font-size: 1.2em;
  }

  .skill-level {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .level-bar {
    flex-grow: 1;
    height: 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    overflow: hidden;
  }

  .level-fill {
    height: 100%;
    background: var(--type-color);
    border-radius: 4px;
    transition: width 0.3s ease;
  }

  .level-text {
    font-size: 0.9em;
    color: rgba(255, 255, 255, 0.7);
  }

  @media (max-width: 768px) {
    .skills-grid {
      grid-template-columns: 1fr;
    }
  }
</style>