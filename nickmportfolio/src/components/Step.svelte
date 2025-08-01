<script>
    export let project;
</script>

<div class="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors duration-200 border border-slate-700 hover:border-blue-400">
    <div class="flex items-center gap-4 mb-4">
        <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-xl">
            <i class={project.icon}></i>
        </div>
        <h3 class="text-xl font-semibold text-white">{project.name}</h3>
    </div>
    
    <p class="text-gray-300 mb-6 leading-relaxed">
        {project.description}
    </p>
    
    <div class="flex justify-between items-center">
        <a 
            href={project.link} 
            target="_blank" 
            class="text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center gap-2"
        >
            View Project →
        </a>
    </div>
</div>