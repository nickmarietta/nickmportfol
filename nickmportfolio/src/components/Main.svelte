<script>
  import ProjectStep from "./ProjectStep.svelte";
  import Skills from "./Skills.svelte";

  import Icon from "@iconify/svelte";
  import ExperienceCard from "../lib/components/ExperienceCard.svelte";

  // Reference the Econauts image from static assets
  const Econauts = "/assets/EcoNauts.png";
  const Silverware = "/assets/Silverware.png";
  const RedClarity = "/assets/RedClarity.png";
  const NickPfp = "/assets/nick2ndpfp.jpg";

  // Data-driven: allow external JSON (through page load) to supply projects
  export let projects = [];
  // Local fallback data for MVP compatibility
  const localProjects = [
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
      description: "An environmental placement platform connecting students with green internships and sustainability-focused organizations.",
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

  // Publicly exposed data-driven array; prefers loaded data if provided
  $: displayProjects = (projects && projects.length) ? projects : localProjects;

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

  // Experiences data (wired from JSON when provided)
  export let experiences = [];
  $: displayExperiences = (experiences && experiences.length) ? experiences : [];
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
    </div>
    
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {#each displayProjects as project}
        <ProjectStep project={project} />
      {/each}
    </div>
  </section>

  {#if displayExperiences?.length}
  <!-- Experiences Section -->
  <section class="container mx-auto px-4 py-20">
    <div class="text-center mb-16">
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Experience</h2>
    </div>
    <div class="flex flex-col gap-4">
      {#each displayExperiences as exp}
        <ExperienceCard item={exp} />
      {/each}
    </div>
  </section>
  {/if}

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

    <div class="relative h-[600px] w-full flex items-center justify-center">
      <!-- Center icon -->
      <div class="absolute z-10 flex h-20 w-20 items-center justify-center rounded-full">
        <Icon icon="skill-icons:codemeta" width="40" height="40" class="text-white" />
      </div>

      <!-- Frontend Technologies (Inner Ring) -->
      <Skills radius={80} duration={25} className="h-16 w-16" url="https://react.dev/">
        <Icon icon="skill-icons:react-dark" width="32" height="32" />
      </Skills>

      <Skills radius={80} duration={25} delay={-5} className="h-16 w-16" url="https://svelte.dev/">
        <Icon icon="skill-icons:svelte" width="32" height="32" />
      </Skills>

      <Skills radius={80} duration={25} delay={-10} className="h-16 w-16" url="https://www.typescriptlang.org/">
        <Icon icon="skill-icons:typescript" width="32" height="32" />
      </Skills>

      <Skills radius={80} duration={25} delay={-15} className="h-16 w-16" url="https://developer.mozilla.org/en-US/docs/Web/HTML">
        <Icon icon="skill-icons:html5" width="32" height="32" />
      </Skills>

      <Skills radius={80} duration={25} delay={-20} className="h-16 w-16" url="https://developer.mozilla.org/en-US/docs/Web/CSS">
        <Icon icon="skill-icons:css3" width="32" height="32" />
      </Skills>

      <!-- Backend Technologies (Middle Ring) -->
      <Skills radius={160} duration={35} reverse className="h-16 w-16" url="https://www.python.org/">
        <Icon icon="skill-icons:python-dark" width="32" height="32" />
      </Skills>

      <Skills radius={160} duration={35} delay={-5} reverse className="h-16 w-16" url="https://isocpp.org/">
        <Icon icon="skill-icons:cpp" width="32" height="32" />
      </Skills>

      <Skills radius={160} duration={35} delay={-10} reverse className="h-16 w-16" url="https://www.oracle.com/java/">
        <Icon icon="skill-icons:java" width="32" height="32" />
      </Skills>

      <Skills radius={160} duration={35} delay={-15} reverse className="h-16 w-16" url="https://nodejs.org/">
        <Icon icon="skill-icons:nodejs-dark" width="32" height="32" />
      </Skills>

      <Skills radius={160} duration={35} delay={-20} reverse className="h-16 w-16" url="https://flask.palletsprojects.com/">
        <Icon icon="skill-icons:flask" width="32" height="32" />
      </Skills>

      <Skills radius={160} duration={35} delay={-25} reverse className="h-16 w-16" url="https://www.mysql.com/">
        <Icon icon="skill-icons:mysql-dark" width="32" height="32" />
      </Skills>

      <Skills radius={160} duration={35} delay={-30} reverse className="h-16 w-16" url="https://www.postgresql.org/">
        <Icon icon="skill-icons:postgresql-dark" width="32" height="32" />
      </Skills>

      <!-- Developer Tools (Outer Ring) -->
      <Skills radius={240} duration={45} className="h-16 w-16" url="https://git-scm.com/">
        <Icon icon="skill-icons:git" width="32" height="32" />
      </Skills>

      <Skills radius={240} duration={45} delay={-7.5} className="h-16 w-16" url="https://aws.amazon.com/">
        <Icon icon="skill-icons:aws-dark" width="32" height="32" />
      </Skills>

      <Skills radius={240} duration={45} delay={-15} className="h-16 w-16" url="https://firebase.google.com/">
        <Icon icon="skill-icons:firebase" width="32" height="32" />
      </Skills>

      <Skills radius={240} duration={45} delay={-22.5} className="h-16 w-16" url="https://cloud.google.com/">
        <Icon icon="skill-icons:googlecloud" width="32" height="32" />
      </Skills>

      <Skills radius={240} duration={45} delay={-30} className="h-16 w-16" url="https://www.mongodb.com/">
        <Icon icon="skill-icons:mongodb" width="32" height="32" />
      </Skills>

      <Skills radius={240} duration={45} delay={-37.5} className="h-16 w-16" url="https://www.docker.com/">
        <Icon icon="skill-icons:docker" width="32" height="32" />
      </Skills>
    </div>

    <!-- Skills Legend -->
    <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      <div class="space-y-4">
        <h3 class="text-xl font-semibold text-blue-400">Frontend</h3>
        <div class="flex flex-wrap justify-center gap-2 text-sm text-gray-300">
          <span>React</span> • <span>Svelte</span> • <span>TypeScript</span> • <span>HTML/CSS</span>
        </div>
      </div>
      
      <div class="space-y-4">
        <h3 class="text-xl font-semibold text-blue-400">Backend</h3>
        <div class="flex flex-wrap justify-center gap-2 text-sm text-gray-300">
          <span>Python</span> • <span>C++</span> • <span>Java</span> • <span>Node.js</span> • <span>Flask</span> • <span>SQL</span>
        </div>
      </div>
      
      <div class="space-y-4">
        <h3 class="text-xl font-semibold text-blue-400">Developer Tools</h3>
        <div class="flex flex-wrap justify-center gap-2 text-sm text-gray-300">
          <span>Git</span> • <span>AWS</span> • <span>Firebase</span> • <span>GCP</span> • <span>MongoDB</span> • <span>Docker</span>
        </div>
      </div>
    </div>
  </section>
</main>
