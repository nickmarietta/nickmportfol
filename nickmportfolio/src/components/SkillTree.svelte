<script>
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  
  // Sample skill data - replace with your actual skills
  export let skills = [
    { id: 1, name: "JavaScript", level: 85, category: "Frontend", ring: "inner", icon: "fa-brands fa-js", type: "electric" },
    { id: 2, name: "CSS", level: 75, category: "Frontend", ring: "inner", icon: "fa-brands fa-css3-alt", type: "water" },
    { id: 3, name: "HTML", level: 90, category: "Frontend", ring: "inner", icon: "fa-brands fa-html5", type: "rock" },
    { id: 4, name: "React", level: 70, category: "Frontend", ring: "outer", icon: "fa-brands fa-react", type: "fire" },
    { id: 5, name: "Svelte", level: 65, category: "Frontend", ring: "outer", icon: "fa-solid fa-code", type: "ice" },
    { id: 6, name: "Node.js", level: 80, category: "Backend", ring: "inner", icon: "fa-brands fa-node-js", type: "grass" },
    { id: 7, name: "Express", level: 75, category: "Backend", ring: "outer", icon: "fa-solid fa-server", type: "ground" },
    { id: 8, name: "MongoDB", level: 60, category: "Database", ring: "inner", icon: "fa-solid fa-database", type: "psychic" },
    { id: 9, name: "SQL", level: 70, category: "Database", ring: "inner", icon: "fa-solid fa-table", type: "steel" },
    { id: 10, name: "Git", level: 85, category: "Tools", ring: "outer", icon: "fa-brands fa-git-alt", type: "dark" }
  ];
  
  let width = 800;
  let height = 800;
  let radius = Math.min(width, height) / 2 - 50;
  let innerRadius = radius * 0.4;
  let outerRadius = radius * 0.8;
  
  let svg;
  let isAnimating = true;
  
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

  onMount(() => {
    drawSkillTree();
    setTimeout(() => {
      isAnimating = false;
    }, 1000);
  });
  
  function drawSkillTree() {
    if (!svg) return;
    
    // Clear previous content
    svg.innerHTML = '';
    
    // Group skills by category for organization
    const categories = {};
    skills.forEach(skill => {
      if (!categories[skill.category]) {
        categories[skill.category] = [];
      }
      categories[skill.category].push(skill);
    });
    
    const categoryNames = Object.keys(categories);
    const categoryCount = categoryNames.length;
    
    // Calculate angles for each category
    const categoryAngles = {};
    categoryNames.forEach((category, i) => {
      categoryAngles[category] = {
        start: (i / categoryCount) * 2 * Math.PI,
        end: ((i + 1) / categoryCount) * 2 * Math.PI
      };
    });
    
    // Draw category segments
    categoryNames.forEach((category, i) => {
      const startAngle = categoryAngles[category].start;
      const endAngle = categoryAngles[category].end;
      
      // Draw skills in this category
      const categorySkills = categories[category];
      categorySkills.forEach((skill, index) => {
        // Calculate position for this skill
        const skillIndex = categorySkills.indexOf(skill);
        const skillCount = categorySkills.length;
        const skillAngle = startAngle + 
          (skillIndex + 0.5) * (endAngle - startAngle) / skillCount;
        
        const skillRadius = skill.ring === "inner" ? innerRadius : outerRadius;
        
        const x = width/2 + Math.cos(skillAngle) * skillRadius;
        const y = height/2 + Math.sin(skillAngle) * skillRadius;
        
        // Create a group for the skill node
        const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
        group.setAttribute("class", "skill-node");
        group.setAttribute("data-skill", skill.name);
        group.setAttribute("data-level", skill.level);
        
        // Add hexagonal background
        const hexagon = createHexagon(0, 0, 25 * (skill.level / 100 * 0.5 + 0.5));
        hexagon.setAttribute("fill", typeColors[skill.type] || typeColors.normal);
        hexagon.setAttribute("stroke", "#333");
        hexagon.setAttribute("stroke-width", "2");
        hexagon.setAttribute("class", "skill-hexagon");
        
        // Add a foreign object to contain the Font Awesome icon
        const foreignObject = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
        const iconSize = 25 * (skill.level / 100 * 0.5 + 0.5) * 1.2;
        foreignObject.setAttribute("width", iconSize);
        foreignObject.setAttribute("height", iconSize);
        foreignObject.setAttribute("x", -iconSize/2);
        foreignObject.setAttribute("y", -iconSize/2);
        
        // Create HTML for the icon
        const iconHTML = document.createElement("div");
        iconHTML.style.width = "100%";
        iconHTML.style.height = "100%";
        iconHTML.style.display = "flex";
        iconHTML.style.alignItems = "center";
        iconHTML.style.justifyContent = "center";
        iconHTML.style.color = "#ffffff";
        iconHTML.innerHTML = `<i class="${skill.icon}"></i>`;
        
        foreignObject.appendChild(iconHTML);
        
        group.appendChild(hexagon);
        group.appendChild(foreignObject);
        
        // Position the group with animation
        group.setAttribute("transform", `translate(${x}, ${y}) scale(0)`);
        setTimeout(() => {
          group.setAttribute("transform", `translate(${x}, ${y}) scale(1)`);
        }, index * 100);
        
        // Add hover effect
        group.addEventListener("mouseover", () => {
          showTooltip(skill.name, skill.level, x, y, skill.type);
          hexagon.setAttribute("fill", adjustColor(typeColors[skill.type], -20));
        });
        
        group.addEventListener("mouseout", () => {
          hideTooltip();
          hexagon.setAttribute("fill", typeColors[skill.type]);
        });
        
        svg.appendChild(group);
        
        // Add animated connection to center
        const connection = document.createElementNS("http://www.w3.org/2000/svg", "path");
        const path = createCurvedPath(width/2, height/2, x, y);
        connection.setAttribute("d", path);
        connection.setAttribute("stroke", typeColors[skill.type]);
        connection.setAttribute("stroke-width", "2");
        connection.setAttribute("fill", "none");
        connection.setAttribute("class", "skill-connection");
        connection.style.strokeDasharray = connection.getTotalLength();
        connection.style.strokeDashoffset = connection.getTotalLength();
        
        svg.insertBefore(connection, svg.firstChild);
        
        // Animate the connection
        setTimeout(() => {
          connection.style.strokeDashoffset = "0";
        }, index * 100);
      });
    });
    
    // Add center point with animation
    const centerGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
    centerGroup.setAttribute("transform", `translate(${width/2}, ${height/2}) scale(0)`);
    
    const centerHex = createHexagon(0, 0, 30);
    centerHex.setAttribute("fill", "#333");
    centerHex.setAttribute("stroke", "#666");
    centerHex.setAttribute("stroke-width", "2");
    centerHex.setAttribute("class", "center-hexagon");
    
    const centerForeignObject = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
    centerForeignObject.setAttribute("width", 30);
    centerForeignObject.setAttribute("height", 30);
    centerForeignObject.setAttribute("x", -15);
    centerForeignObject.setAttribute("y", -15);
    
    const centerIconHTML = document.createElement("div");
    centerIconHTML.style.width = "100%";
    centerIconHTML.style.height = "100%";
    centerIconHTML.style.display = "flex";
    centerIconHTML.style.alignItems = "center";
    centerIconHTML.style.justifyContent = "center";
    centerIconHTML.style.color = "#ffffff";
    centerIconHTML.innerHTML = `<i class="fa-solid fa-pokeball"></i>`;
    
    centerForeignObject.appendChild(centerIconHTML);
    centerGroup.appendChild(centerHex);
    centerGroup.appendChild(centerForeignObject);
    svg.appendChild(centerGroup);
    
    // Animate center point
    setTimeout(() => {
      centerGroup.setAttribute("transform", `translate(${width/2}, ${height/2}) scale(1)`);
    }, 500);
  }
  
  function createHexagon(x, y, size) {
    const hexagon = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const points = [];
    for (let i = 0; i < 6; i++) {
      const angle = (i * Math.PI) / 3;
      points.push([
        x + size * Math.cos(angle),
        y + size * Math.sin(angle)
      ]);
    }
    const path = `M ${points.map(p => p.join(",")).join(" L ")} Z`;
    hexagon.setAttribute("d", path);
    return hexagon;
  }
  
  function createCurvedPath(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const controlX = (x1 + x2) / 2;
    const controlY = (y1 + y2) / 2 - distance * 0.2;
    return `M ${x1} ${y1} Q ${controlX} ${controlY} ${x2} ${y2}`;
  }
  
  function adjustColor(color, amount) {
    const hex = color.replace('#', '');
    const r = Math.max(0, Math.min(255, parseInt(hex.substr(0, 2), 16) + amount));
    const g = Math.max(0, Math.min(255, parseInt(hex.substr(2, 2), 16) + amount));
    const b = Math.max(0, Math.min(255, parseInt(hex.substr(4, 2), 16) + amount));
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  }
  
  let tooltip;
  let tooltipText;
  let tooltipLevel;
  let tooltipType;
  
  function showTooltip(skillName, level, x, y, type) {
    if (!tooltip) {
      tooltip = document.createElementNS("http://www.w3.org/2000/svg", "g");
      
      const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      rect.setAttribute("rx", "5");
      rect.setAttribute("ry", "5");
      rect.setAttribute("fill", "rgba(0,0,0,0.8)");
      rect.setAttribute("stroke", "#ccc");
      rect.setAttribute("stroke-width", "1");
      rect.setAttribute("width", "150");
      rect.setAttribute("height", "70");
      
      tooltipText = document.createElementNS("http://www.w3.org/2000/svg", "text");
      tooltipText.setAttribute("fill", "white");
      tooltipText.setAttribute("font-size", "14");
      tooltipText.setAttribute("x", "10");
      tooltipText.setAttribute("y", "20");
      
      tooltipLevel = document.createElementNS("http://www.w3.org/2000/svg", "text");
      tooltipLevel.setAttribute("fill", "white");
      tooltipLevel.setAttribute("font-size", "14");
      tooltipLevel.setAttribute("x", "10");
      tooltipLevel.setAttribute("y", "40");
      
      tooltipType = document.createElementNS("http://www.w3.org/2000/svg", "text");
      tooltipType.setAttribute("fill", "white");
      tooltipType.setAttribute("font-size", "14");
      tooltipType.setAttribute("x", "10");
      tooltipType.setAttribute("y", "60");
      
      tooltip.appendChild(rect);
      tooltip.appendChild(tooltipText);
      tooltip.appendChild(tooltipLevel);
      tooltip.appendChild(tooltipType);
      
      svg.appendChild(tooltip);
    }
    
    tooltipText.textContent = skillName;
    tooltipLevel.textContent = `Level: ${level}%`;
    tooltipType.textContent = `Type: ${type.charAt(0).toUpperCase() + type.slice(1)}`;
    
    tooltip.setAttribute("transform", `translate(${x+10}, ${y-80})`);
    tooltip.style.display = "block";
  }
  
  function hideTooltip() {
    if (tooltip) {
      tooltip.style.display = "none";
    }
  }
</script>

<div class="skill-tree-container" in:fade={{ duration: 500 }}>
  <svg bind:this={svg} width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
    <!-- The skill tree will be drawn here -->
  </svg>
  
  <div class="legend" in:fly={{ y: 20, duration: 500, delay: 1000 }}>
    <h3>Skill Types</h3>
    <div class="legend-items">
      {#each Object.keys(typeColors) as type}
        <div class="legend-item">
          <span class="type-box" style="background-color: {typeColors[type]}"></span>
          <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .skill-tree-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
    border-radius: 15px;
    box-shadow: 0 0 20px rgba(0,0,0,0.3);
  }
  
  svg {
    max-width: 100%;
    height: auto;
  }
  
  .skill-node {
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  
  .skill-node:hover {
    transform: scale(1.1) rotate(5deg);
  }
  
  .skill-hexagon {
    transition: fill 0.3s ease;
  }
  
  .skill-connection {
    transition: stroke-dashoffset 1s ease;
  }
  
  .center-hexagon {
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }
  
  .legend {
    margin-top: 20px;
    border: 2px solid #444;
    padding: 15px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.1);
    width: 100%;
    max-width: 600px;
    color: white;
    backdrop-filter: blur(5px);
  }
  
  .legend h3 {
    margin-top: 10px;
    margin-bottom: 5px;
    color: #fff;
    text-align: center;
    font-size: 1.2em;
  }
  
  .legend-items {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  }
  
  .legend-item {
    display: flex;
    align-items: center;
    margin: 5px;
    padding: 5px 10px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
  }
  
  .type-box {
    width: 15px;
    height: 15px;
    display: inline-block;
    margin-right: 5px;
    border-radius: 3px;
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
  
  @media (max-width: 768px) {
    .skill-tree-container {
      padding: 10px;
    }
    
    .legend {
      font-size: 0.9em;
    }
  }
</style>