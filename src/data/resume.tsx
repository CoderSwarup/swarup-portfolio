import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Swarup Bhise",
  initials: "CS",
  url: "https://dillion.io",
  location: "Maharastra, I",
  locationLink: "https://www.google.com/maps/place/Maharashtra",
  description: "Software Engineer. I love building things.",
  summary:
    "I have always been fascinated by the endless possibilities of the internet and the ways it can be leveraged to make our lives better. As a Full Stack MERN Developer, I specialize in building efficient and scalable web applications  I also have experience in DevOps, focusing on CI/CD pipelines, containerization with Docker, and cloud platforms like AWS.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
    "Threejs",
    "AWS",
    "CI/CD",
    "React Native",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "contact.swarupbhise@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/CoderSwarup/",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/swarup-bhise-a981932aa/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/SwarupBhise",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Tappn",
      href: "https://tappn.ai/",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/tappn.png",
      start: "Septmber 2025",
      end: "",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
  ],
  education: [
    {
      school: "University of Mumbai",
      href: "https://mu.ac.in/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/mumbaiuc.png",
      start: "2022",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Petsu",
      href: "https://petsu.in/",
      dates: "May 2025 - Dec 2025",
      active: true,
      description: `
Freelace Project 

From instant online vet consultations to expert grooming services at home or trusted salons near you, we bring pet parents everything they need in one place. Shop for everyday pet essentials, food, and supplies with quick doorstep delivery across India. Our platform connects you with licensed vets, professional groomers, and quality products so your furry friend gets the best care without hassle. Trusted by pet parents nationwide, Petsu is your one-stop solution for health, grooming, and happiness for your pets—all in one reliable platform.

#### 🔖 Website : https://petsu.in/

### 🏗️ The Architecture:
- 🖥️ Frontend: React (Vite) + NextJs
- ⚙️ Backend: Node.js (TypeScript) + Docker
- 🔄 CI/CD: GitHub Actions + VPS Deployment

 `,
      technologies: ["NodeJS", "ReactJS", "NextJS", "Docker", "CICD"],
      links: [
        {
          type: "Website",
          href: "https://petsu.in/",
          icon: <Icons.globe className="h-4 w-4" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dc4li3m0r/image/upload/v1767264143/PETSU_qaavfe.png",
      video: "",
    },
    {
      title: "Aws Deployment",
      href: "https://tradescribe.in/",
      dates: "Aug 2025",
      active: true,
      description: `
successfully deployed full-stack app on AWS with zero-downtime CI/CD! 💪

#### 🔖 Website : https://tradescribe.in/

### 🏗️ The Architecture:
- 🖥️ Frontend: React (Vite) + Nginx on ALB + ASG
- ⚙️ Backend: Node.js (TypeScript) + PM2 on Internal ALB + ASG
- 🔄 CI/CD: GitHub Actions + AWS CodeDeploy
- 🔐 Config: Systems Manager Parameter Store

### 😤 The Challenges That Almost Defeated Me:

1. CodeDeploy File Conflicts 💥 
2. Environment Variable Nightmare 🔥 
3. Auto Scaling Group Chaos 🌀 

 `,
      technologies: [
        "Aws",
        "GithubActions",
        "CICD",
        "LoadBalacing",
        "Aws Secret Manager",
        "EC2",
      ],
      links: [
        {
          type: "Website",
          href: "https://tradescribe.in/",
          icon: <Icons.globe className="h-4 w-4" />,
        },
      ],
      image:
        "https://media.licdn.com/dms/image/v2/D4D22AQFu3WVGZMdVzA/feedshare-shrink_2048_1536/B4DZi8FZasH4Ao-/0/1755502189076?e=1769040000&v=beta&t=cqA2RHp-jq76buNlHFRNdYrt-ug-J9SgOrel5e52ggI",
      video: "",
    },
    {
      title: "Personal Portfolio Website",
      href: "https://coder-swarup.vercel.app/",
      dates: "Feb 2025 - April 2025",
      active: true,
      description: `

🚀  Built a my personal portfolio website, a comprehensive showcase of my skills, projects, and experiences as a versatile developer. Built to highlight my expertise in Full Stack MERN development, DevOps, and 3D web applications, this portfolio is designed to leave a lasting impression.
### Features ✨
- **Dynamic Portfolio Sections**: Interactive and visually appealing sections for introduction, career highlights, skills, and projects.
- **Responsive Design**: Fully optimized for seamless viewing across devices.
- **3D Web Integration**: Incorporating immersive experiences using Three.js and modern web technologies.
- **Project Showcases**: Demonstrates real-world applications I've developed, including:
  - Full-stack web applications using MERN stack.
  - DevOps pipelines and infrastructure solutions.
  - 3D models and interactive experiences.
 `,
      technologies: [
        "NodeJS",
        "MongoDB",
        "ReactJs",
        "TelegramApi",
        "ThreeJs",
        "Spline",
      ],
      links: [
        {
          type: "Website",
          href: "https://coder-swarup.vercel.app/",
          icon: <Icons.globe className="h-4 w-4" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dc4li3m0r/video/upload/v1767264351/VIDoutput_ujomu6.mp4",
    },
    {
      title: "Job Scrapper",
      href: "https://github.com/CoderSwarup/Job_Scrapper",
      dates: "Mar 2025",
      active: true,
      description: `

🚀  Built a scalable job scraper for top tech firms using Node.js, MongoDB, Redis, and Docker. Features live scraping, deduplication, API with filters, and queue-based bulk processing via BullMQ.

### Key Features 

- 🔍 Web Scraper: Fetches live job postings from company websites.
- 💾 Database Integration: Stores job data with deduplication and updates existing entries when timestamps change.
- 🛠️ API Development: Serves job data with filtering, sorting, and pagination.
- 📈 Queue Management: Handles bulk job processing using Redis and BullMQ.
- 🐳 Containerization: Redis is deployed using Docker for easy scalability.



 `,
      technologies: ["NodeJS", "MongoDB", "Redis"],
      links: [
        {
          type: "Github",
          href: "https://github.com/CoderSwarup/Job_Scrapper",
          icon: <Icons.github className="h-4 w-4" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dc4li3m0r/video/upload/v1746469327/job_scrapper/1746469324492-418725958-08f8c550-6319-49ed-99bc-c03dbd63f0bb_oqv30o.mp4",
    },
    {
      title: "3D Game",
      href: "https://r3fgame.netlify.app/",
      dates: "Dec 2024",
      active: true,
      description: `
🚀 Creating a Simple Game with React Three Fiber and Rapier for Physics 🚀
Hey folks! 👋

I recently worked on an exciting project where I built a simple game using React Three Fiber and Rapier for physics simulation. 💻🎮


✨ Features:
- 👉 Physics Simulation: Using Rapier, the game objects are subject to realistic physics, including gravity and collision detection.
 
- 👉 Smooth Mobile Interaction: Added support for pinch zoom on mobile to enhance the gameplay experience.
.

 `,
      technologies: ["Three Js", "React Js", "R3F", "R3 Rapier"],
      links: [
        {
          type: "Website",
          href: "https://r3fgame.netlify.app/",
          icon: <Icons.globe className="h-4 w-4" />,
        },
        {
          type: "Github",
          href: "https://github.com/CoderSwarup/ThreeJS_Projects/tree/main/5_Game",
          icon: <Icons.github className="h-4 w-4" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dc4li3m0r/video/upload/v1746467506/3d_game/1746467504846-1732651676263_lf4r0n.mp4",
    },
    {
      title: "Media Flow",
      href: "https://github.com/CoderSwarup/media-flow",
      dates: "Nov 2024 - Dec 2024",
      active: true,
      description: `
🚀 MediaFlow, an all-in-one solution for video transcoding and AI-powered image and video editing. With MediaFlow, you can:

- 🔄 Seamlessly Transcode Videos into multiple formats, including HSL, with cloud storage integration.
- ✂️ Smart Video Cropper to automatically resize and crop videos based on content.
- 🖼️ AI Image & Video Editing: Background removal, background replacement, and more!
- 🎥 Caption Generator for easy video accessibility.
- ☁️ Cloud Integration: Automatically store processed files to AWS S3 and deliver them faster than ever.

 `,
      technologies: [
        "AWS",
        "Docker",
        "NextJS",
        "Linux",
        "FFmpeg",
        "Redis",
        "Cloudnary",
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/CoderSwarup/media-flow",
          icon: <Icons.github className="h-4 w-4" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dc4li3m0r/image/upload/v1746383886/media_flow/1746383881485-1_IMG_1_xlggml.png",
      video: "",
    },
    {
      title: "Discord Clone",
      href: "https://github.com/CoderSwarup/discord-clone",
      dates: "Oct 2024 - Nov 2024",
      active: true,
      description: `
🚀  Discord Clone. This application is packed with features that cater to real-time communication and community management. Here are some highlights:

#### Key Features of My Next.js Discord Clone

1. ✨ Real-time Messaging with Socket.io for seamless communication.
2. 📎 Message Attachments using UploadThing to send files easily.
3. ✏️ Edit & Delete Messages in real-time for a cleaner chat experience.
4. 🎤 Audio & Video Call Channels for dynamic conversations using LiveKit.
5. 👥 1:1 Conversations and video calls between members.
 `,
      technologies: [
        "Supabse",
        "NextJs",
        "Prisma",
        "Docker",
        "CICD",
        "Socketio",
        "LiveKit",
        "Redis",
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/CoderSwarup/discord-clone",
          icon: <Icons.github className="h-4 w-4" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dc4li3m0r/image/upload/v1746468161/discord%20clone/1746468161368-1730580274917_m2bhuh.jpg",
      video: "",
    },
    {
      title: "Create csapp",
      href: "https://www.npmjs.com/package/create_csapp",
      dates: "Oct 2024 - Oct 2024",
      active: true,
      description: `
🚀  Create-CSApp: A CLI Tool for Full-Stack Project Setup! 🎉

After weeks of development, I’m thrilled to release create_csapp a powerful CLI tool that makes it super easy to scaffold and manage full-stack applications with React, Node.js, and other popular technologies!

### 🔧 What does Create-CSApp offer?

1. Seamlessly scaffold React frontends and Node.js backends.
2. Simplifies the setup of TailwindCSS, Axios, Redux, Socket.IO, Redis, Kafka, Prisma, and more for front-end and backend projects.
3. Instantly create a project structure that’s production-ready.

📦 Available on npm:
npx create_csapp
 `,
      technologies: [
        "ReactJS",
        "NodeJs",
        "PostgresSQL",
        "TailwindCSS",
        "Kafka",
        "Redis",
        "AWS",
        "Docker",
        "NginX",
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/CoderSwarup/create-csapp",
          icon: <Icons.github className="h-4 w-4" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dc4li3m0r/image/upload/v1746383045/csapp_cli/1746383041669-1728421353116_esgtx8.jpg",
      video: "",
    },
    {
      title: "Launch Pad",
      href: "https://github.com/CoderSwarup/LaunchPad",
      dates: "July 2024 - Aug 2024",
      active: true,
      description: `
 LaunchPad, a powerful platform where you can effortlessly host static websites, including HTML, CSS, JavaScript, and even complex React or Next JS apps! 🌐

### 🔧 Tech Stack Highlights:
1. Backend: Node.js, Express.js, PostgreSQL
2. Frontend: React
3. Infrastructure: AWS S3, ECS, ECR, Docker, Kafka, Redis, ClickHouse
4. Additional Features: Reverse Proxy, Advanced Validation for Static & Dynamic Hosting `,
      technologies: [
        "ReactJS",
        "NodeJs",
        "PostgresSQL",
        "TailwindCSS",
        "Kafka",
        "Redis",
        "AWS",
        "Docker",
        "NginX",
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/CoderSwarup/LaunchPad",
          icon: <Icons.github className="h-4 w-4" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dc4li3m0r/video/upload/v1746382776/launch_pad/1746382769386-video_2_ou8bnw.mp4",
    },
    {
      title: "Talk Live",
      href: "https://talk-live.vercel.app/",
      dates: "Jan 2024 - July 2024",
      active: true,
      description: `
Talk Live is a seamless chat application built using the MERN and GraphQL , packed with a variety of powerful features:

### Key Features of Talk Live

1. ✨ Real-time Messaging with Socket.io.
2. 📎 Message Attachments Files.
3. ✏️  real-time  chat experience.
4. 🎤 Audio & Video Call Using WebRTC.
5. 👥 1:1 Conversations and video calls between members.`,
      technologies: [
        "ReactJS",
        "NodeJs",
        "MongoDB",
        "TailwindCSS",
        "Stripe",
        "Socket.io",
        "GraphQL",
        "WebRTC",
      ],
      links: [
        {
          type: "Website",
          href: "https://talk-live.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/CoderSwarup/realtime_chat_app",
          icon: <Icons.github className="h-4 w-4" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dc4li3m0r/video/upload/v1746382308/talk_live/1746382301216-video_1_tzjfti.mp4",
    },
  ],
  hackathons: [
    {
      title: "Level Supermind Hackerthon",
      dates: "Jan 15, 2025",
      location: "Remote",
      description: "",
      image:
        "https://media.licdn.com/dms/image/v2/D560BAQHOIvIWU-gkwQ/company-logo_200_200/company-logo_200_200/0/1735300359934?e=1769040000&v=beta&t=XLp4vm0nhMo7ouu-w9z1xGNeuFaH4FP7amf1NxeU1_M",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/CoderSwarup/level-supermind-hackerthon",
        },
      ],
    },
    {
      title: "ReImagine Hackerthon",
      dates: "July 15, 2024",
      location: "Remote",
      description: "",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTirsb8uzmnsoQjCPzaxEIP1XRxv5Nr8ii3TA&s",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "http://github.com/CoderSwarup/The_SuperemesReimagineRound1",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/CoderSwarup/The_SuperemesReimagineRound2",
        },
      ],
    },
    {
      title: "CodeWar",
      dates: "Jan 11, 20223",
      location: "D.B.J College, Chiplun",
      description: "",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Cbtt18RH90XrSe8YM5wvPFqm3_IbRpzDFg&s",
      links: [],
    },
  ],
} as const;
