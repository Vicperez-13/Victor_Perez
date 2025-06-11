import React from "react";
import "../styles/projects.css";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with React to showcase my work, resume, and contact information.",
    image: "https://picsum.photos/id/1011/400/300",
    link: "https://github.com/yourusername/portfolio",
  },
  {
    title: "Recipe Finder",
    description:
      "A web app that lets users search for recipes by ingredients, using the Edamam API.",
    image: "https://picsum.photos/id/1012/400/300",
    link: "https://github.com/yourusername/recipe-finder",
  },
  {
    title: "Task Tracker",
    description:
      "A simple and intuitive task management tool with drag-and-drop and dark mode support.",
    image: "https://picsum.photos/id/1013/400/300",
    link: "https://github.com/yourusername/task-tracker",
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive dashboard that displays current weather and forecasts for any city.",
    image: "https://picsum.photos/id/1014/400/300",
    link: "https://github.com/yourusername/weather-dashboard",
  },
  {
    title: "Blog Platform",
    description:
      "A full-stack blog platform with user authentication, comments, and Markdown support.",
    image: "https://picsum.photos/id/1015/400/300",
    link: "https://github.com/yourusername/blog-platform",
  },
  {
    title: "E-Commerce Store",
    description:
      "An online store with shopping cart, payment integration, and product management.",
    image: "https://picsum.photos/id/1016/400/300",
    link: "https://github.com/yourusername/ecommerce-store",
  },
  {
    title: "Chat Application",
    description:
      "A real-time chat app using WebSockets, supporting multiple rooms and emojis.",
    image: "https://picsum.photos/id/1018/400/300",
    link: "https://github.com/yourusername/chat-app",
  },
  {
    title: "Fitness Tracker",
    description:
      "Track workouts, set goals, and visualize progress with charts and stats.",
    image: "https://picsum.photos/id/1020/400/300",
    link: "https://github.com/yourusername/fitness-tracker",
  },
  {
    title: "Photo Gallery",
    description:
      "A responsive gallery to upload, view, and organize photos with tags.",
    image: "https://picsum.photos/id/1021/400/300",
    link: "https://github.com/yourusername/photo-gallery",
  },
];

const Projects = () => (
  <div className="projects-container">
    {projects.map((project, idx) => (
      <a
        key={idx}
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card"
      >
        <div className="project-image">
          <img src={project.image} alt={project.title} />
        </div>
        <div className="project-content">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <span className="project-link">{project.link}</span>
        </div>
      </a>
    ))}
  </div>
);

export default Projects;
