import project1_img from './project_pics/1.png'
import project2_img from './project_pics/2.png'
import project3_img from './project_pics/image.png'
import project4_img from './project_pics/3.png'
import project5_img from './project_pics/5.png'
import project7_img from './project_pics/6.png'
import project6_img from './project_pics/image.png'

const mywork_data = [
    {
        w_no: 1,
        w_name: "Meeting Assistant with CrewAI Flow based Automation",
        w_img: project1_img,
        description: "",
        fullDescription: " Built a meeting assistant using CrewAI to extract action items and tasks from meeting transcripts |  Integrated Slack API to automatically push extracted tasks and updates to team channels.",
       
        skills: [],
        timeline: "12 Days",
        startDate: "30 September 2025",
        endDate: "2 October 2024",
        association: "Self Experiment Project",
        story: "This project was aimed at improving meeting productivity by automating task extraction.",
        subjects: [],
        links: {
            live: false,
            github: "https://github.com/shaheer-suhaib/Meeting-Assistant",
            demo: false
        },
        technologies: ["CrewAI", "Slack API", "Python"]
    },
    {
        w_no: 2,
        w_name: "CRM Agent-Marketing AI",
        w_img: project7_img,
        description: "",
        fullDescription: "Developed an AI powered CRM agent that automates client management and marketing workflows using structured customer data and RFM analysis |    Built LangGraph workflows for CRM automation and intelligent decision-making with human-in-the-loop validation checkpoints |   Applied RFM analysis for customer segmentation and designed AI-driven campaigns for re-engagement, referral, and loyalty programs |    Integrated with Supabase for real-time data management and used MCP for seamless tool integration.",
        skills: [],
        timeline: "10 days",
        startDate: "21 September 2025",
        endDate: "29 September 2025",
        association: "Self Experiment Project",
        story: "",
        subjects: [],
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
        description: "An analytics dashboard to visualize trends in burnout, support, and awareness",
       
        fullDescription: "Built an interactive dashboard to visualize trends in burnout, support, and awareness |    Applied data exploration and storytelling techniques to highlight key behavioral patterns.",
        skills: [],
        timeline: "2.5 days",
        startDate: "22 May 2025",
        endDate: "24 May 2025",
        association: "Self Experiment Project",
        story: "",
        subjects: [],
        links: {
            live: "https://mental-health-analysis-in-tech.streamlit.app/",
            github: "https://github.com/shaheer-suhaib/research-engineering-intern-assignment/blob/main/my_reAdme.md",
            demo: false
        },
        technologies: ["Streamlit", "Python"]
    },
    {
        w_no: 4,
        w_name: "Mission Logging and Tracking Mobile App for Pakistan Army Pilots ",
        w_img: project4_img,
        description: "A cross-platform mobile app for pilots to log and track missions with real time updates and filtering options.",
        fullDescription: "Developed a cross platform mobile application for Pakistan Army pilots to streamline mission logging and tracking operations |    Built Django REST backend with PostgreSQL for efficient mission data storage and retrieval |    Enabled real time mission tracking with filtering by pilot, location, and date for unit commanders.",
        skills: [],
        timeline: "20 days",
        startDate: "8 April 2025",
        endDate: "28 April 2025",
        association: "University + Custom Project",
        story: "",
        subjects: [],
        links: {
            live: false,
            github: "https://github.com/username/weather-app",
            demo: null
        },
        technologies: ["Django REST", "PostgreSQL", "Python" ]
    },
    {
        w_no: 5,
        w_name: "Gym Management System",
        w_img: project5_img,
        description: "",
        fullDescription: "I made a GYM Management System for the first time with my experiecne with Foreigner Client. His requirement was to design a desktoop application system that could handle his gym management system digitally. I helped him deliver his requirements by choosing JAVA with NetBeans IDE to make the desktop application. The application had features like member management, trainer management, attendance tracking, and others. I implemented a MySQL database to store all the relevant data securely.  This project enhanced my skills in Java programming and database management.", 
        skills: [],
        timeline: "15 days",
        startDate: "3 march 2024",
        endDate: "18 march 2024",
        association: "Freelance Project",
        story: "",
        subjects: [ "Object Oriented Programming", "Database", "Desktop Development",],
        links: {
            live: false,
            github: false,
            demo: false
        },
        technologies: ["React", "Node.js", "MongoDB", "Express", "Video.js", "AWS S3", "JWT"]
    },
    {
        w_no: 6,
        w_name: "Efficient Word Finder with File Ranking and Links",
        w_img: project2_img,
        description: "",
        fullDescription: "Developed a word search engine with an interactive user interface for efficient multi-file searching and ranking |   Implemented a Ternary Search Tree for optimized word lookups and file location extraction |    Built a file ranking system based on word frequency to prioritize relevant results.",
        skills: [],
        timeline: "1 month",
        startDate: "3 April 2024",
        endDate: "3 March 2024",
        association: "University Individual Project",
        story: "",
        subjects: ["Recursion", "Data Structures & Algorithms", "Object Oriented Programming", "Desktop Application Development"],
        links: {
            live: null,
            github: "https://github.com/shaheer-suhaib/Cpp-Efficient-Word-Finder-with-File-Ranking-and-Links",
            demo: "https://youtu.be/P-8Yq-NXcH0"
        },
        technologies: ["C++","Qt Framework","GUI Development" ]
    }
]
 
export default mywork_data;