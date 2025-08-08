<script>
    export let project;
    
    let currentImageIndex = 0;
    let isHovered = false;
    let autoPlayInterval;
    
    // Auto-play functionality
    function startAutoPlay() {
        if (project.images && project.images.length > 1) {
            autoPlayInterval = setInterval(() => {
                currentImageIndex = (currentImageIndex + 1) % project.images.length;
            }, 3000);
        }
    }
    
    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
        }
    }
    
    function nextImage() {
        if (project.images && project.images.length > 1) {
            currentImageIndex = (currentImageIndex + 1) % project.images.length;
        }
    }
    
    function prevImage() {
        if (project.images && project.images.length > 1) {
            currentImageIndex = currentImageIndex === 0 ? project.images.length - 1 : currentImageIndex - 1;
        }
    }
    
    function goToImage(index) {
        currentImageIndex = index;
    }
    
    // Handle navigation clicks
    function handleNavClick(event) {
        event.stopPropagation();
    }
    
    // Check if icon is an image file (ends with common image extensions) or an imported image object
    function isImageIcon(icon) {
        if (!icon) return false;
        // If it's a string, check if it ends with image extensions or starts with /assets/ (static assets)
        if (typeof icon === 'string') {
            return icon.endsWith('.png') || icon.endsWith('.jpg') || icon.endsWith('.jpeg') || icon.endsWith('.svg') || icon.endsWith('.gif') || icon.startsWith('/assets/');
        }
        // If it's an object (imported image), it's an image
        return typeof icon === 'object';
    }
</script>

<div 
    class="bg-slate-800 rounded-lg overflow-hidden hover:bg-slate-700 transition-all duration-300 border border-slate-700 hover:border-blue-400 shadow-lg hover:shadow-xl group"
    role="region"
    aria-label="Project card for {project.name}"
    on:mouseenter={() => { isHovered = true; startAutoPlay(); }}
    on:mouseleave={() => { isHovered = false; stopAutoPlay(); }}
>
    <!-- Image Carousel -->
    {#if project.images && project.images.length > 0}
        <div class="relative h-48 overflow-hidden">
            <!-- Images -->
            <div class="relative h-full">
                {#each project.images as image, index}
                    <div 
                        class="absolute inset-0 transition-opacity duration-500 {index === currentImageIndex ? 'opacity-100' : 'opacity-0'}"
                    >
                        <img 
                            src={image} 
                            alt="{project.name} - Image {index + 1}"
                            class="w-full h-full object-cover"
                        />
                    </div>
                {/each}
            </div>
            
            <!-- Navigation Arrows -->
            {#if project.images.length > 1}
                <button 
                    class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
                    on:click={(event) => { handleNavClick(event); prevImage(); }}
                >
                    <i class="fa-solid fa-chevron-left"></i>
                </button>
                
                <button 
                    class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
                    on:click={(event) => { handleNavClick(event); nextImage(); }}
                >
                    <i class="fa-solid fa-chevron-right"></i>
                </button>
                
                <!-- Dots Indicator -->
                <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {#each project.images as _, index}
                        <button 
                            class="w-2 h-2 rounded-full transition-all duration-200 {index === currentImageIndex ? 'bg-white' : 'bg-white/50'}"
                            on:click={(event) => { handleNavClick(event); goToImage(index); }}
                        ></button>
                    {/each}
                </div>
            {/if}
            
            <!-- Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
    {/if}
    
    <!-- Content -->
    <div class="p-6">
        <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-xl overflow-hidden">
                {#if isImageIcon(project.icon)}
                    <img 
                        src={project.icon} 
                        alt="{project.name} icon" 
                        class="w-full h-full object-cover"
                    />
                {:else}
                    <i class={project.icon}></i>
                {/if}
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
                class="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium"
            >
                View Project →
            </a>
        </div>
    </div>
</div>

<style>
    /* Ensure smooth transitions */
    .transition-opacity {
        transition: opacity 0.5s ease-in-out;
    }
    
    /* Hover effects for navigation */
    .group:hover .opacity-0 {
        opacity: 1;
    }
</style>