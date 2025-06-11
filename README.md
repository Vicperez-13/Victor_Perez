# Personal Website

This is a personal website built using React.js and Vite.js. The website features a dark mode with an Aztec raven vibe and a light mode with a Cinnamoroll vibe from Sanrio. 

## Features

- **Dark and Light Mode**: Switch between two themes for a personalized experience.
- **About Page**: Contains information about activities, origin, and education.
- **Social Links**: Quick access to social media profiles including LinkedIn, GitHub, Instagram, and email.
- **Work Experience**: A dedicated section to showcase work experience.

## Project Structure

```
personal-website
├── public
│   └── favicon.ico
├── src
│   ├── components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── About.jsx
│   │   ├── Socials.jsx
│   │   └── WorkExperience.jsx
│   ├── styles
│   │   ├── _variables.css
│   │   ├── _mixins.css
│   │   ├── header.css
│   │   ├── footer.css
│   │   ├── about.css
│   │   ├── socials.css
│   │   └── work-experience.css
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## Installation Instructions

1. Open your terminal and navigate to your project directory.
2. Run `npm init -y` to create a package.json file if you haven't already.
3. Install Vite and React by running:
   ```
   npm install vite react react-dom
   ```
4. Create the necessary directory structure as outlined above.
5. Create the files as specified in the project tree.
6. Add the following scripts to your package.json:
   ```json
   "scripts": {
     "dev": "vite",
     "build": "vite build",
     "serve": "vite preview"
   }
   ```
7. Run `npm run dev` to start the development server.
8. Open your browser and navigate to `http://localhost:3000` to see your personal website in action.

## License

This project is open-source and available under the MIT License.