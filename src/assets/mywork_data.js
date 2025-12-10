import project1_img from './project_pics/1.png'
import project2_img from './project_pics/2.png'
import project3_img from './project_pics/3.png'
import project4_img from './project_pics/4.png'
import project5_img from './project_pics/5.png'
import project6_img from './project_pics/image.png'

const mywork_data = [
    {
        w_no: 1,
        w_name: "Meeting Assistant with CrewAI Flow based Automation",
        w_img: project1_img,
        description: "A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration.",
       
        fullDescription: " Built a meeting assistant using CrewAI to extract action items and tasks from meeting transcripts |  Integrated Slack API to automatically push extracted tasks and updates to team channels.",
       
        skills: ["CrewAI", "Slack API", "Python"],
        timeline: "3 months",
        startDate: "January 2024",
        endDate: "March 2024",
        association: "Self Experiment Project",
        story: "This project started as a capstone requirement for my final year. I wanted to create something that would showcase both frontend and backend skills while solving a real-world problem. The journey involved learning payment integration, implementing secure authentication, and optimizing database queries for better performance. The most challenging part was handling concurrent orders and ensuring data consistency.",
        subjects: [],
        links: {
            live: "https://example-ecommerce.com",
            github: "https://github.com/shaheer-suhaib/Meeting-Assistant",
            demo: "https://demo.example-ecommerce.com"
        },
        technologies: ["CrewAI", "Slack API", "Python"]
    },
    {
        w_no: 2,
        w_name: "CRM Agent-Marketing AI",
        w_img: project2_img,
        description: "A collaborative task management application with real-time updates, team collaboration features, and project tracking.",
        fullDescription: "Developed an AI-powered CRM agent that automates client management and marketing workflows using structured customer data and RFM analysis |    Built LangGraph workflows for CRM automation and intelligent decision-making with human-in-the-loop validation checkpoints |   Applied RFM analysis for customer segmentation and designed AI-driven campaigns for re-engagement, referral, and loyalty programs |    Integrated with Supabase for real-time data management and used MCP for seamless tool integration.",
        skills: [],
        timeline: "10 days",
        startDate: "21 September 2025",
        endDate: "29 September 2025",
        association: "Self Experiment Project",
        story: "During my internship at Tech Corp, I was tasked with building a task management tool for internal use. This project taught me a lot about real-time web applications and state management. Working with WebSockets was initially challenging, but it became one of my favorite technologies. The project was well-received by the team and is now used company-wide.",
        subjects: ["Object-Oriented Programming", "Software Engineering", "Database Systems", "Network Programming"],
        links: {
            live: null,
            github: "https://github.com/shaheer-suhaib/SMART-CRM-AGENT",
            demo: null
        },
        technologies: [ "LangChain","LangGraph", "Supabase"," Model Context Protocol (MCP)", "Gemini", "Python"  ]
    },
    {
        w_no: 3,
        w_name: "Mental Health Insights in the Tech Industry Using Interactive Data Visualizationd",
        w_img: project3_img,
        description: "An analytics dashboard for social media management with multi-platform integration and detailed insights.",
       
        fullDescription: "Built an interactive dashboard to visualize trends in burnout, support, and awareness |    Applied data exploration and storytelling techniques to highlight key behavioral patterns.",
        skills: [],
        timeline: "4 days",
        startDate: "22 May 2025",
        endDate: "25 May 2025",
        association: "Self Experiment Project",
        story: "I built this project to help content creators and social media managers better understand their audience. The idea came from my own experience managing social media accounts. Learning to work with various APIs and handling OAuth authentication was a great learning experience. The data visualization aspect was particularly interesting as I got to explore different charting libraries.",
        subjects: ["Data Structures & Algorithms", "API Design", "Data Visualization", "Web Development"],
        links: {
            live: "https://mental-health-analysis-in-tech.streamlit.app/",
            github: "https://github.com/shaheer-suhaib/research-engineering-intern-assignment/blob/main/my_reAdme.md",
            demo: "https://demo.example-dashboard.com"
        },
        technologies: ["Streamlit", "Python"]
    },
    {
        w_no: 4,
        w_name: "Mission Logging and Tracking Mobile App for Pakistan Army Pilots ",
        w_img: project4_img,
        description: "A beautiful weather application with location-based forecasts, weather maps, and detailed meteorological data.",
        fullDescription: "Developed a cross-platform mobile application for Pakistan Army pilots to streamline mission logging and tracking operations |    Built Django REST backend with PostgreSQL for efficient mission data storage and retrieval |    Enabled real time mission tracking with filtering by pilot, location, and date for unit commanders.",
        skills: ["React", "JavaScript", "Weather APIs", "Geolocation", "Responsive Design", "PWA"],
        timeline: "20 days",
        startDate: "8 April 2025",
        endDate: "28 April 2024",
        association: "University + Custom Project",
        story: "This was a fun project for my web development course. I wanted to create something that was both functional and beautiful. The challenge was working with external APIs and handling different data formats. I also made it a Progressive Web App so users could install it on their devices. The project received high marks and positive feedback from my professor.",
        subjects: ["Web Development", "API Integration", "User Interface Design"],
        links: {
            live: "https://example-weather.com",
            github: "https://github.com/username/weather-app",
            demo: null
        },
        technologies: ["Django REST", "PostgreSQL", "Python" ]
    },
    {
        w_no: 5,
        w_name: "Learning Management System",
        w_img: project5_img,
        description: "A comprehensive LMS platform for online education with video streaming, quizzes, assignments, and progress tracking.",
        fullDescription: "This Learning Management System was built to facilitate online education. It includes features like video course streaming, interactive quizzes, assignment submissions, discussion forums, progress tracking, and certificates. The platform supports both students and instructors with separate dashboards and role-based access control.",
        skills: ["React", "Node.js", "MongoDB", "Express", "Video Streaming", "File Upload", "Role-Based Access"],
        timeline: "4 months",
        startDate: "October 2023",
        endDate: "January 2024",
        association: "University Project - Software Engineering Course",
        story: "This was a group project for my Software Engineering course. I was responsible for the frontend development and video streaming implementation. Working in a team taught me valuable collaboration skills and version control best practices. The most complex part was implementing the video streaming with proper buffering and quality selection. We presented this project at the university tech fair and won second place.",
        subjects: ["Software Engineering", "Object-Oriented Programming", "Database Systems", "Web Development", "System Design"],
        links: {
            live: "https://example-lms.com",
            github: "https://github.com/username/lms-platform",
            demo: "https://youtu.be/lg6E4EHDJTM"
        },
        technologies: ["React", "Node.js", "MongoDB", "Express", "Video.js", "AWS S3", "JWT"]
    },
    {
        w_no: 6,
        w_name: "Efficient Word Finder with File Ranking and Links",
        w_img: project6_img,
        description: "A modern, responsive portfolio website showcasing projects, skills, and professional experience with smooth animations.",
        fullDescription: "Developed a word search engine with an interactive user interface for efficient multi-file searching and ranking |   Implemented a Ternary Search Tree for optimized word lookups and file location extraction |    Built a file ranking system based on word frequency to prioritize relevant results.",
        skills: [],
        timeline: "1 month",
        startDate: "3 April 2024",
        endDate: "3 March 2024",
        association: "Personal Project",
        story: "I built this portfolio to showcase my work and attract potential employers or clients. The design process involved multiple iterations to get the animations and user experience just right. Learning Framer Motion was a game-changer for creating smooth, professional animations. The project helped me understand the importance of performance optimization and accessibility in web development.",
        subjects: [" Data Structures & Algorithms", "Object Oriented Programming", "Desktop Application Development"],
        links: {
            live: null,
            github: "https://github.com/shaheer-suhaib/Cpp-Efficient-Word-Finder-with-File-Ranking-and-Links",
            demo: "https://youtu.be/P-8Yq-NXcH0"
        },
        technologies: ["C++"]
    }
]
 
export default mywork_data;