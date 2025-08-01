<script>
  import Step from "./Step.svelte";

  let projects = [
    {
      name: "SilverWare",
      icon: "fa-solid fa-utensils",
      description: "SilverWare is a web application that is designed for restaurant owners to customize the layout of their store. Created with ReactJS, Django, AWS, SQLite.",
      link: "https://github.com/owendevita/Silverware"
    },
    {
      name: "The Aprendizaje",
      icon: "fa-solid fa-earth-americas", 
      description: "A language learning platform that helps users master new languages through interactive lessons and real-world practice.",
      link: "https://github.com/nickmarietta/aprendizaje"
    },
    {
      name: "LineupList",
      icon: "fa-solid fa-futbol",
      description: "A sports management application for organizing team lineups and tracking player statistics.",
      link: "https://github.com/nickmarietta/lineuplist"
    }
  ];

  let aboutSections = [
    {
      title: "an aspiring software engineer",
      description: "I have always been interested with technology in the CS field and love the process of building ideas. With the vast world of technology, I believe that continuous learning journey makes it very fun."
    },
    {
      title: "a video game enthusiast", 
      description: "Video games have always been my gateway into the world of technology. I see them as a powerful medium for creativity, storytelling, and innovation—bringing people's passions and ideas to life in an interactive way."
    },
    {
      title: "a passionate learner",
      description: "Learning new computer and spoken languages has been one of my favorite hobbies. I love the process because it shows how diverse and different the world can be in various aspects."
    }
  ];

  let skills = [
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "Svelte", level: 75 },
    { name: "Python", level: 70 },
    { name: "C++", level: 65 },
    { name: "Node.js", level: 70 },
    { name: "SQL", level: 75 },
    { name: "Git", level: 80 }
  ];
</script>

<main class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
  <!-- Hero Section -->
  <section class="container mx-auto px-4 py-20 lg:py-32">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div class="space-y-6">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold">
          Hi! I'm <span class="text-blue-400">Nicklaus</span>,<br />
          an Aspiring <span class="text-blue-400">Software Engineer</span>
        </h1>
        <p class="text-lg sm:text-xl text-gray-300">
          Senior at <span class="text-blue-400">CSUF</span> studying Computer Science. 
          My <span class="text-blue-400">favorite tech</span> includes JS (ReactJS, SvelteKit), C++, and Python.
        </p>
        <div class="flex flex-wrap gap-4">
          <a 
            href="https://www.linkedin.com/in/nicklaus-marietta/" 
            target="_blank" 
            class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Get in touch →
          </a>
          <a 
            href="https://github.com/nickmarietta" 
            target="_blank" 
            class="border border-gray-600 hover:border-blue-400 text-white px-6 py-3 rounded-lg transition-colors duration-200"
          >
            View GitHub
          </a>
        </div>
      </div>
      <div class="flex justify-center lg:justify-end">
        <div class="w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-6xl text-white">
          <i class="fa-solid fa-code"></i>
        </div>
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section class="container mx-auto px-4 py-20">
    <div class="text-center mb-16">
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        My <span class="text-blue-400">Projects</span>
      </h2>
      <p class="text-lg text-gray-300">
        A few of my projects that I have worked on.
      </p>
    </div>
    
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {#each projects as project}
        <Step project={project} />
      {/each}
    </div>
  </section>

  <!-- About Section -->
  <section class="container mx-auto px-4 py-20">
    <div class="text-center mb-16">
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        A bit <span class="text-blue-400">about</span> me
      </h2>
      <p class="text-lg text-gray-300">Want to know more?</p>
    </div>
    
    <div class="max-w-4xl mx-auto space-y-12">
      {#each aboutSections as section, index}
        <div class="flex gap-8">
          <div class="text-4xl sm:text-5xl md:text-6xl text-gray-600 font-bold">
            {(index + 1).toString().padStart(2, '0')}
          </div>
          <div class="space-y-4">
            <h3 class="text-2xl sm:text-3xl font-semibold text-blue-400">
              {section.title}
            </h3>
            <p class="text-gray-300 leading-relaxed">
              {section.description}
            </p>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- Skills Section -->
  <section class="container mx-auto px-4 py-20">
    <div class="text-center mb-16">
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        My <span class="text-blue-400">Skills</span>
      </h2>
    </div>
    
    <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      {#each skills as skill}
        <div class="space-y-2">
          <div class="flex justify-between items-center">
            <span class="font-medium">{skill.name}</span>
            <span class="text-sm text-gray-400">{skill.level}%</span>
          </div>
          <div class="w-full bg-gray-700 rounded-full h-2">
            <div 
              class="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
              style="width: {skill.level}%"
            ></div>
          </div>
        </div>
      {/each}
    </div>
  </section>
</main>
