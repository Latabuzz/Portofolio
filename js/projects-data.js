// Project Data dari CV
const projectsData = [
    {
        id: 1,
        name: 'TouLeos',
        shortDescription: 'Shopping assistant app for traditional markets. Helps seniors navigate crowded environments with ease.',
        fullDescription: 'An innovative solution to address the challenges people often face when shopping in traditional markets. Through this shopping assistant app, TouLeos aims to make the shopping process easier, especially for seniors who may have physical limitations and difficulty navigating crowded environments. Features include real-time price comparison, product locating, and accessibility-focused UI.',
        dates: 'June 2023 - Sep 2023',
        duration: '3 months',
        technologies: ['React', 'Laravel', 'Flutter', 'MySQL'],
        category: 'Mobile/Web',
        role: 'Full Stack Developer',
        status: 'Completed',
        image: 'image/Logo web Tou Leos.png',
        impact: [
            'Helped seniors navigate traditional markets with 60% faster product finding',
            'Real-time price comparison across vendors',
            'Mobile-first accessibility design'
        ],
        highlights: [
            'Cross-platform development (Mobile + Web)',
            'Real-time location tracking',
            'Vendor price synchronization',
            'Senior-friendly UI/UX'
        ],
        links: {
            github: 'https://github.com/Latabuzz/touleos',
            live: null,
            demo: null
        }
    },
    {
        id: 2,
        name: 'Kapoya Portal',
        shortDescription: 'Village information and public service portal showcasing community profiles, news, galleries, and statistics.',
        fullDescription: 'Public information and service portal built with Node.js to display village profiles, news, galleries, location maps, and statistics. This project aims to improve community transparency and provide residents with easy access to village information and announcements. The portal serves as a digital hub for Kapoya Village, enabling better communication between village administration and residents.',
        dates: 'June 2025 - June 2025',
        duration: 'Ongoing',
        technologies: ['Node.js', 'Express.js', 'MongoDB', 'React', 'Google Maps API'],
        category: 'Web Application',
        role: 'Full Stack Developer',
        status: 'Active',
        image: 'image/webDesa.jpg',
        impact: [
            '500+ monthly active users',
            '50+ news articles managed',
            'Reduced information lookup time by 60%',
            'Community engagement increased 3x'
        ],
        highlights: [
            'Real-time news publishing system',
            'Integrated Google Maps with geolocation',
            'Image gallery management',
            'Community statistics dashboard',
            'Responsive mobile design'
        ],
        links: {
            github: 'https://github.com/Latabuzz/kapoya-portal',
            live: 'https://kapoya-village.id',
            demo: null
        }
    },
    {
        id: 3,
        name: 'EcoMeter',
        shortDescription: 'Blockchain-based IoT biogas distribution system with real-time monitoring and token-based rewards.',
        fullDescription: 'Developed a decentralized finance (DeFi) application for transparent and sustainable biogas distribution management using blockchain technology and IoT integration. EcoMeter enables real-time monitoring of biogas production, token-based reward systems, and community-driven environmental impact tracking. This innovative project combines sustainability focus with cutting-edge Web3 technologies.',
        dates: 'Oct 2025 - Oct 2025',
        duration: 'Development',
        technologies: ['Blockchain', 'Smart Contracts', 'IoT', 'Python', 'React', 'Web3.js'],
        category: 'Advanced/Web3',
        role: 'Full Stack Developer & Blockchain Engineer',
        status: 'In Development',
        image: 'image/ecometer.jpeg',
        impact: [
            'Transparent biogas distribution tracking',
            'Real-time IoT sensor integration',
            'Token-based incentive system',
            'Environmental impact quantification'
        ],
        highlights: [
            'Smart contract development',
            'IoT sensor data aggregation',
            'DeFi token economics',
            'Real-time monitoring dashboard',
            'Community reward mechanism'
        ],
        links: {
            github: 'https://github.com/Latabuzz/ecometer',
            live: 'https://eco-meter-website-r5tw.vercel.app/',
            demo: 'https://ecometer-demo.vercel.app'
        }
    },
    {
        id: 4,
        name: 'KarWanua',
        shortDescription: 'GHG emission calculator for waste management using IPCC 2006 Guidelines and IGES Calculator methodology.',
        fullDescription: 'Full-stack web application built with Next.js 15 and TypeScript. A comprehensive web application for calculating greenhouse gas (GHG) emissions from various municipal waste management methods, using validated scientific methodologies (IPCC 2006 Guidelines & IGES Calculator v8). This project demonstrates commitment to sustainability and environmental impact calculation with high accuracy.',
        dates: 'Oct 2025 - Oct 2025',
        duration: 'Active Development',
        technologies: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'Python', 'TailwindCSS'],
        category: 'Web Application',
        role: 'Full Stack Developer',
        status: 'In Development',
        image: 'image/karwanua.png',
        impact: [
            '95% accuracy in GHG calculation validation',
            'Supports 3 waste management methodologies',
            'Real-time emissions reporting',
            '1000+ users in beta testing'
        ],
        highlights: [
            'IPCC 2006 Guidelines integration',
            'Multiple waste management methodology support',
            'Real-time calculation engine',
            'Detailed emissions reporting',
            'Environmental data visualization',
            'Export to PDF/CSV'
        ],
        links: {
            github: 'https://github.com/Latabuzz/karwanua',
            live: 'https://ghg-emission-calculator-eight.vercel.app/',
            demo: 'https://karwanua.vercel.app'
        }
    }
];

// Additional projects or future work
const upcomingProjects = [
    {
        name: 'AI-Powered Analytics Platform',
        description: 'Machine learning dashboard for data-driven decision making',
        status: 'Planned'
    },
    {
        name: 'Mobile IoT Controller',
        description: 'Mobile app for controlling IoT devices with real-time updates',
        status: 'Research Phase'
    }
];

// Export for use in scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { projectsData, upcomingProjects };
}
