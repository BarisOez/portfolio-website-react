import { useEffect } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import projects from "./data/projects";
import "./App.css";

export default function App() {
  // Ensure the page starts at top when mounting (nice UX)
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <Header />
      <main>
        {/* About section */}
        <Section id="about" title="About me">
          <p>
            Hi, I’m <strong>Baris Oezcan</strong>, a Junior Application Developer based in Zurich, Switzerland.
            I hold an <strong>EFZ in Application Development</strong> and I am currently finalizing my{" "}
            <strong>BSc in Computing & IT</strong> (Open University, UK). I enjoy building practical solutions,
            writing clean, readable code, and learning new technologies step by step.
          </p>
        </Section>

        {/* Projects section */}
        <Section id="projects" title="Projects">
          <div className="grid">
            {projects.map((p) => (
              <ProjectCard key={p.slug} {...p} />
            ))}
          </div>
        </Section>

        {/* Contact section */}
        <Section id="contact" title="Contact">
          <ul className="contact-list" aria-label="Contact options">
            <li><a href="mailto:baris.careers@gmail.com">baris.careers@gmail.com</a></li>
            <li><a href="https://linkedin.com/in/baris-oezcan" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href="https://github.com/BarisOez" target="_blank" rel="noreferrer">GitHub</a></li>
          </ul>
        </Section>
      </main>

      <footer className="footer">
        {/* Keep footer minimal for now */}
        <small>© {new Date().getFullYear()} Baris Oezcan</small>
      </footer>
    </>
  );
}
