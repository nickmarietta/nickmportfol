<script>
  import ProjectStep from "./ProjectStep.svelte";
  import Skills from "./Skills.svelte";

  import Icon from "@iconify/svelte";

  // Reference the EcoNauts image from static assets
  const Econauts = "/assets/EcoNauts.png";
  const Silverware = "/assets/Silverware.png";
  const RedClarity = "/assets/RedClarity.png";
  const NickPfp = "/assets/nick2ndpfp.jpg";

  let projects = [
    {
      name: "SilverWare",
      icon: Silverware,
      description: "A Web Application that is designed for restaurant owners to customize the layout of their store. Created with ReactJS, Django, AWS, SQLite.",
      link: "https://github.com/owendevita/Silverware",
      images: [
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop"
      ]
    },
    {
      name: "EcoNauts",
      icon: Econauts,
      description: "A language learning platform that helps users master new languages through interactive lessons and real-world practice.",
      link: "https://github.com/nickmarietta/GreenPlacement",
      images: [
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop"
      ]
    },
    {
      name: "RedClarity",
      icon: RedClarity,
      description: "A sports management application for organizing team lineups and tracking player statistics.",
      link: "https://github.com/nickmarietta/lineuplist",
      images: [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=400&h=300&fit=crop"
      ]
    }
  ];

  let aboutSections = [
    {
      title: "an aspiring software engineer",
      description: "i have always been interested with technology in the CS field and love the process of building ideas. With the vast world of technology, I believe that continuous learning journey makes it very fun."
    },
    {
      title: "a video game enthusiast", 
      description: "video games have always been my gateway into the world of technology. I see them as a powerful medium for creativity, storytelling, and innovation—bringing people's passions and ideas to life in an interactive way."
    },
    {
      title: "a passionate learner",
      description: "learning new computer and spoken languages has been one of my favorite hobbies. I love the process because it shows how diverse and different the world can be in various aspects."
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
    { name: "Git", level: 80 },
    { name: "Django", level: 70 },
    { name: "AWS", level: 65 },
    { name: "SQLite", level: 70 },
    { name: "HTML", level: 80 },
    { name: "CSS", level: 75 },
    { name: "Tailwind", level: 70 }
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
        <div class="w-100 h-100 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-6xl text-white">
          <img src={NickPfp} alt="Nick" class="w-full h-full object-cover rounded-full">
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
        <ProjectStep project={project} />
      {/each}
    </div>
  </section>

  <!-- About Section -->
  <section class="container mx-auto px-4 py-20">
    <div class="text-center mb-16">
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        A bit <span class="text-blue-400">about</span> me
      </h2>
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

    <div class="relative h-[600px] w-full flex items-center justify-center border border-red-500">
      <!-- Center icon -->
      <div class="absolute z-10 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
        <Icon icon="skill-icons:javascript" width="40" height="40" class="text-white" />
      </div>

      <!-- Orbiting icons -->
      <div class="absolute inset-0">
        <Skills radius={80} duration={30} className="h-16 w-16 border border-blue-500">
          <Icon icon="skill-icons:react-dark" width="32" height="32" />
        </Skills>

        <Skills radius={80} duration={30} delay={-15} className="h-16 w-16 border border-green-500">
          <Icon icon="skill-icons:svelte" width="32" height="32" />
        </Skills>

        <Skills radius={140} duration={40} reverse className="h-16 w-16 border border-yellow-500">
          <Icon icon="skill-icons:python-dark" width="32" height="32" />
        </Skills>
        
        <Skills radius={140} duration={40} delay={-20} reverse className="h-16 w-16 border border-purple-500">
          <Icon icon="skill-icons:cpp" width="32" height="32" />
        </Skills>

        <Skills radius={200} duration={50} className="h-16 w-16 border border-pink-500">
          <Icon icon="skill-icons:nodejs-dark" width="32" height="32" />
        </Skills>

        <Skills radius={200} duration={50} delay={-25} className="h-16 w-16 border border-orange-500">
          <Icon icon="skill-icons:aws-dark" width="32" height="32" />
        </Skills>
      </div>
    </div>
  </section>
</main>
