// Projects Management Script
class ProjectsManager {
    constructor() {
        this.projects = projectsData || [];
        this.currentFilter = 'All';
        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.renderProjects();
            this.setupEventListeners();
        });
    }

    renderProjects() {
        const projectsContainer = document.getElementById('projectsContainer');
        if (!projectsContainer) {
            console.error('Projects container not found');
            return;
        }

        // Clear existing projects
        projectsContainer.innerHTML = '';

        // Filter projects
        const filteredProjects = this.currentFilter === 'All' 
            ? this.projects 
            : this.projects.filter(p => p.category === this.currentFilter);

        // Render filtered projects
        filteredProjects.forEach((project, index) => {
            const projectCard = this.createProjectCard(project, index);
            projectsContainer.appendChild(projectCard);
        });

        // Fade in animation
        const fadeElements = projectsContainer.querySelectorAll('.project-card');
        fadeElements.forEach(el => {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });
            observer.observe(el);
        });
    }

    createProjectCard(project, index) {
        const card = document.createElement('div');
        card.className = 'bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md card-hover fade-in project-card';
        card.style.animationDelay = `${index * 100}ms`;

        const statusColor = {
            'Completed': 'green',
            'Active': 'blue',
            'In Development': 'purple'
        };

        const color = statusColor[project.status] || 'gray';

        card.innerHTML = `
            <div class="h-48 overflow-hidden relative">
                <img src="${project.image}" alt="${project.name}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" loading="lazy">
                <div class="absolute top-4 right-4 flex gap-2">
                    <span class="text-xs px-3 py-1 bg-${color}-100 text-${color}-600 dark:bg-${color}-900 dark:text-${color}-300 rounded-full font-medium">${project.category}</span>
                    <span class="text-xs px-3 py-1 bg-${color}-100 text-${color}-600 dark:bg-${color}-900 dark:text-${color}-300 rounded-full font-medium">${project.status}</span>
                </div>
            </div>
            <div class="p-6">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="text-xl font-bold">${project.name}</h3>
                </div>
                <p class="text-gray-600 dark:text-gray-300 mb-4 text-sm">${project.shortDescription}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.technologies.map(tech => `
                        <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full">${tech}</span>
                    `).join('')}
                </div>
                <div class="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <span class="text-xs text-gray-500 dark:text-gray-400">${project.dates}</span>
                    <button class="project-details-btn text-blue-500 hover:text-blue-600 font-medium text-sm" data-project-id="${project.id}">
                        View Details
                        <i class="fas fa-arrow-right ml-1"></i>
                    </button>
                </div>
            </div>
        `;

        return card;
    }

    setupEventListeners() {
        // Filter buttons
        const filterButtons = document.querySelectorAll('.project-filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.currentFilter = btn.dataset.filter;
                this.renderProjects();
            });
        });

        // Project details buttons
        document.addEventListener('click', (e) => {
            if (e.target.closest('.project-details-btn')) {
                const projectId = parseInt(e.target.closest('.project-details-btn').dataset.projectId);
                this.showProjectModal(projectId);
            }
        });
    }

    showProjectModal(projectId) {
        const project = this.projects.find(p => p.id === projectId);
        if (!project) return;

        // Create modal
        let modal = document.getElementById('projectModal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'projectModal';
            modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 hidden flex items-center justify-center p-4';
            modal.innerHTML = `<div class="bg-white dark:bg-gray-900 rounded-xl max-w-2xl w-full max-h-96 overflow-y-auto"></div>`;
            document.body.appendChild(modal);
        }

        const modalContent = modal.querySelector('div');
        modalContent.innerHTML = `
            <div class="relative">
                <button class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 z-10" onclick="document.getElementById('projectModal').classList.add('hidden')">
                    <i class="fas fa-times text-2xl"></i>
                </button>
                
                <div class="h-64 overflow-hidden">
                    <img src="${project.image}" alt="${project.name}" class="w-full h-full object-cover">
                </div>
                
                <div class="p-8">
                    <div class="flex items-center gap-2 mb-4">
                        <h2 class="text-3xl font-bold">${project.name}</h2>
                        <span class="text-xs px-3 py-1 bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 rounded-full">${project.status}</span>
                    </div>
                    
                    <p class="text-gray-600 dark:text-gray-300 mb-6">${project.fullDescription}</p>
                    
                    <div class="grid grid-cols-2 gap-4 mb-6">
                        <div>
                            <h5 class="font-bold text-sm text-gray-500 dark:text-gray-400 uppercase">Timeline</h5>
                            <p class="text-lg font-semibold">${project.dates}</p>
                            <p class="text-sm text-gray-600 dark:text-gray-300">${project.duration}</p>
                        </div>
                        <div>
                            <h5 class="font-bold text-sm text-gray-500 dark:text-gray-400 uppercase">Role</h5>
                            <p class="text-lg font-semibold">${project.role}</p>
                        </div>
                    </div>

                    <div class="mb-6">
                        <h5 class="font-bold text-sm text-gray-500 dark:text-gray-400 uppercase mb-2">Key Highlights</h5>
                        <ul class="grid grid-cols-2 gap-2">
                            ${project.highlights.map(item => `
                                <li class="flex items-start text-sm">
                                    <i class="fas fa-check text-green-500 mr-2 mt-1"></i>
                                    <span>${item}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>

                    <div class="mb-6">
                        <h5 class="font-bold text-sm text-gray-500 dark:text-gray-400 uppercase mb-2">Impact</h5>
                        <ul class="grid grid-cols-1 gap-2">
                            ${project.impact.map(item => `
                                <li class="flex items-start text-sm">
                                    <i class="fas fa-star text-yellow-500 mr-2 mt-1"></i>
                                    <span>${item}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                    
                    <div class="flex flex-wrap gap-2 mb-6">
                        ${project.technologies.map(tech => `
                            <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">${tech}</span>
                        `).join('')}
                    </div>
                    
                    <div class="flex gap-4 flex-wrap">
                        ${project.links.github ? `
                            <a href="${project.links.github}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition">
                                <i class="fab fa-github mr-2"></i> GitHub
                            </a>
                        ` : ''}
                        ${project.links.live ? `
                            <a href="${project.links.live}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                                <i class="fas fa-globe mr-2"></i> Live Site
                            </a>
                        ` : ''}
                        ${project.links.demo ? `
                            <a href="${project.links.demo}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition">
                                <i class="fas fa-play mr-2"></i> Demo
                            </a>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;

        modal.classList.remove('hidden');

        // Close modal on click outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        });
    }

    getProjectsByCategory() {
        const categories = new Set(this.projects.map(p => p.category));
        return Array.from(categories);
    }
}

// Initialize on load
const projectsManager = new ProjectsManager();
