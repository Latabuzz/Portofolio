// Education and Experience Data dari CV
const educationData = [
    {
        id: 1,
        institution: 'Universitas Sam Ratulangi',
        program: 'Information Systems',
        degree: 'Bachelor',
        period: '2021 - 2025',
        gpa: '3.88 / 4.00',
        achievements: [
            'High Academic Achievement - GPA 3.88/4.00',
            'Thesis: "Identifying the Meaning of Baby Cries Using Mel Spectrogram with CNN Algorithm"',
            'Active in student organizations',
            'Completed Kampus Merdeka internship program'
        ],
        location: 'Manado, Indonesia'
    }
];

const experienceData = [
    {
        id: 1,
        company: 'Orders',
        position: 'Core Team Member - Full Stack Developer',
        period: 'Sep 2024 - Aug 2025',
        type: 'Startup',
        description: 'Part of the core team at Orders, a technology startup providing website and mobile app development, UI/UX design, and digital solution development.',
        responsibilities: [
            'Developed web and mobile applications for clients',
            'Collaborated on environmental technology projects',
            'Contributed to waste management systems',
            'Developed sustainable technology solutions',
            'Integrated IoT sensor technology for environmental monitoring'
        ],
        skills: ['Web Development', 'Mobile Development', 'UI/UX Design', 'IoT', 'Sustainability Tech'],
        location: 'Remote'
    },
    {
        id: 2,
        company: 'BEM FMIPA UNSRAT',
        position: 'Department of Interests and Talents',
        period: 'Feb 2024 - Feb 2025',
        type: 'Organization',
        description: 'Assisted in organizing academic and social events for the Faculty of Mathematics and Natural Sciences.',
        responsibilities: [
            'Organized academic and social events',
            'Fostered student engagement and collaboration',
            'Facilitated workshops and talent showcases',
            'Supported student development initiatives'
        ],
        skills: ['Event Organization', 'Leadership', 'Communication'],
        location: 'Manado, Indonesia'
    },
    {
        id: 3,
        company: 'HIMSIFOR UNSRAT',
        position: 'Department of Interests and Talents',
        period: 'Feb 2024 - 2025',
        type: 'Organization',
        description: 'Facilitated member development and organized talent showcases.',
        responsibilities: [
            'Member development and mentoring',
            'Workshop organization',
            'Talent showcase management',
            'Skills exploration support'
        ],
        skills: ['Mentoring', 'Workshop Facilitation', 'Leadership'],
        location: 'Manado, Indonesia'
    }
];

const certificationsData = [
    {
        id: 1,
        name: 'RevoU Tech Academy',
        program: 'Data & Software Batch of August 2023',
        period: 'Aug 2023 - Dec 2023',
        issuer: 'RevoU x Kampus Merdeka',
        description: 'Intensive full-stack web development and data analytics program',
        skills: ['Full-Stack Development', 'Data Analytics', 'HTML/CSS/JavaScript'],
        achievement: 'Developed "Urban Vibes Daily" news dashboard as capstone project'
    }
];

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { educationData, experienceData, certificationsData };
}
