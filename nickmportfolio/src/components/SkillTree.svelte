<script>
  import { onMount } from 'svelte';
  
  // Sample skill data - replace with your actual skills
  export let skills = [
    { id: 1, name: "JavaScript", level: 85, category: "Frontend", ring: "inner" },
    { id: 2, name: "CSS", level: 75, category: "Frontend", ring: "inner" },
    { id: 3, name: "HTML", level: 90, category: "Frontend", ring: "inner" },
    { id: 4, name: "React", level: 70, category: "Frontend", ring: "outer" },
    { id: 5, name: "Svelte", level: 65, category: "Frontend", ring: "outer" },
    { id: 6, name: "Node.js", level: 80, category: "Backend", ring: "inner" },
    { id: 7, name: "Express", level: 75, category: "Backend", ring: "outer" },
    { id: 8, name: "MongoDB", level: 60, category: "Database", ring: "inner" },
    { id: 9, name: "SQL", level: 70, category: "Database", ring: "inner" },
    { id: 10, name: "Git", level: 85, category: "Tools", ring: "outer" }
  ];
  
  let width = 800;
  let height = 800;
  let radius = Math.min(width, height) / 2 - 50;
  let innerRadius = radius * 0.4;
  let outerRadius = radius * 0.8;
  
  let svg;
  
  onMount(() => {
    drawSkillTree();
  });
  
  function drawSkillTree() {
    if (!svg) return;
    
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
      
      // Draw segment background
      const backgroundPath = describeArc(width/2, height/2, radius, 
                             startAngle * 180 / Math.PI, 
                             endAngle * 180 / Math.PI);
      
      // Draw skills in this category
      const categorySkills = categories[category];
      categorySkills.forEach(skill => {
        // Calculate position for this skill
        const skillIndex = categorySkills.indexOf(skill);
        const skillCount = categorySkills.length;
        const skillAngle = startAngle + 
          (skillIndex + 0.5) * (endAngle - startAngle) / skillCount;
        
        const skillRadius = skill.ring === "inner" ? innerRadius : outerRadius;
        
        const x = width/2 + Math.cos(skillAngle) * skillRadius;
        const y = height/2 + Math.sin(skillAngle) * skillRadius;
        
        // Draw skill node
        const node = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        node.setAttribute("cx", x);
        node.setAttribute("cy", y);
        node.setAttribute("r", 20 * (skill.level / 100 * 0.5 + 0.5)); // Size based on level
        node.setAttribute("fill", getColorForCategory(category));
        node.setAttribute("stroke", "#333");
        node.setAttribute("stroke-width", "2");
        node.setAttribute("class", "skill-node");
        node.setAttribute("data-skill", skill.name);
        node.setAttribute("data-level", skill.level);
        
        // Add hover effect
        node.addEventListener("mouseover", () => {
          showTooltip(skill.name, skill.level, x, y);
        });
        
        node.addEventListener("mouseout", () => {
          hideTooltip();
        });
        
        svg.appendChild(node);
        
        // Add connection to center
        const connection = document.createElementNS("http://www.w3.org/2000/svg", "line");
        connection.setAttribute("x1", width/2);
        connection.setAttribute("y1", height/2);
        connection.setAttribute("x2", x);
        connection.setAttribute("y2", y);
        connection.setAttribute("stroke", getColorForCategory(category, 0.3));
        connection.setAttribute("stroke-width", "1");
        connection.setAttribute("class", "skill-connection");
        
        svg.insertBefore(connection, svg.firstChild); // Put lines in background
      });
    });
    
    // Add ring indicators
    drawRing(innerRadius, "#555", "1");
    drawRing(outerRadius, "#555", "1");
    
    // Add center point
    const centerPoint = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    centerPoint.setAttribute("cx", width/2);
    centerPoint.setAttribute("cy", height/2);
    centerPoint.setAttribute("r", 10);
    centerPoint.setAttribute("fill", "#333");
    svg.appendChild(centerPoint);
  }
  
  function drawRing(radius, color, strokeWidth) {
    const ring = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    ring.setAttribute("cx", width/2);
    ring.setAttribute("cy", height/2);
    ring.setAttribute("r", radius);
    ring.setAttribute("fill", "none");
    ring.setAttribute("stroke", color);
    ring.setAttribute("stroke-width", strokeWidth);
    ring.setAttribute("stroke-dasharray", "3,3");
    svg.appendChild(ring);
  }
  
  let tooltip;
  let tooltipText;
  let tooltipLevel;
  
  function showTooltip(skillName, level, x, y) {
    if (!tooltip) {
      tooltip = document.createElementNS("http://www.w3.org/2000/svg", "g");
      
      const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      rect.setAttribute("rx", "5");
      rect.setAttribute("ry", "5");
      rect.setAttribute("fill", "rgba(0,0,0,0.8)");
      rect.setAttribute("stroke", "#ccc");
      rect.setAttribute("stroke-width", "1");
      rect.setAttribute("width", "120");
      rect.setAttribute("height", "50");
      
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
      
      tooltip.appendChild(rect);
      tooltip.appendChild(tooltipText);
      tooltip.appendChild(tooltipLevel);
      
      svg.appendChild(tooltip);
    }
    
    tooltipText.textContent = skillName;
    tooltipLevel.textContent = `Level: ${level}%`;
    
    tooltip.setAttribute("transform", `translate(${x+10}, ${y-60})`);
    tooltip.style.display = "block";
  }
  
  function hideTooltip() {
    if (tooltip) {
      tooltip.style.display = "none";
    }
  }
  
  function getColorForCategory(category, opacity = 1) {
    const colors = {
      "Frontend": `rgba(65, 105, 225, ${opacity})`,
      "Backend": `rgba(46, 139, 87, ${opacity})`,
      "Database": `rgba(205, 92, 92, ${opacity})`,
      "Tools": `rgba(218, 165, 32, ${opacity})`,
      "default": `rgba(128, 128, 128, ${opacity})`
    };
    
    return colors[category] || colors.default;
  }
  
  function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  }
  
  function describeArc(x, y, radius, startAngle, endAngle) {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    
    return [
      "M", start.x, start.y, 
      "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");
  }
</script>

<div class="skill-tree-container">
  <svg bind:this={svg} width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
    <!-- The skill tree will be drawn here -->
  </svg>
  
  <div class="legend">
    <h3>Skill Categories</h3>
    <div class="legend-items">
      {#each Object.keys(skills.reduce((acc, skill) => {
        acc[skill.category] = true;
        return acc;
      }, {})) as category}
        <div class="legend-item">
          <span class="color-box" style="background-color: {getColorForCategory(category)};"></span>
          <span>{category}</span>
        </div>
      {/each}
    </div>
    
    <h3>Skill Rings</h3>
    <div class="legend-items">
      <div class="legend-item">
        <span class="ring-indicator inner"></span>
        <span>Inner Ring: Core Skills</span>
      </div>
      <div class="legend-item">
        <span class="ring-indicator outer"></span>
        <span>Outer Ring: Specialized Skills</span>
      </div>
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
  }
  
  svg {
    max-width: 100%;
    height: auto;
  }
  
  .skill-node {
    cursor: pointer;
    transition: transform 0.2s ease;
  }
  
  .skill-node:hover {
    transform: scale(1.1);
  }
  
  .legend {
    margin-top: 20px;
    border: 1px solid #ccc;
    padding: 15px;
    border-radius: 5px;
    background-color: #f9f9f9;
    width: 100%;
    max-width: 600px;
    color: black;
  }
  
  .legend h3 {
    margin-top: 10px;
    margin-bottom: 5px;
  }
  
  .legend-items {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  
  .legend-item {
    display: flex;
    align-items: center;
    margin-right: 15px;
  }
  
  .color-box {
    width: 15px;
    height: 15px;
    display: inline-block;
    margin-right: 5px;
    border: 1px solid #333;
  }
  
  .ring-indicator {
    width: 20px;
    height: 20px;
    display: inline-block;
    margin-right: 5px;
    border-radius: 50%;
    border: 1px dashed #333;
  }
  
  .ring-indicator.inner {
    width: 10px;
    height: 10px;
  }
  
  .ring-indicator.outer {
    width: 15px;
    height: 15px;
  }
  
  @media (max-width: 768px) {
    .skill-tree-container {
      padding: 10px;
    }
  }
</style>