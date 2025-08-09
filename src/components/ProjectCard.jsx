// Small card component for showcasing a project
export default function ProjectCard({ title, description, stack, repo, demo }) {
    return (
        <article className="card">
            <h3 className="card-title">{title}</h3>
            <p className="card-text">{description}</p>
            {stack?.length ? (
                <ul className="tags" aria-label="Tech stack">
                    {stack.map((t) => <li key={t} className="tag">{t}</li>)}
                </ul>
            ) : null}
            <div className="card-actions">
                {repo && <a className="btn" href={repo} target="_blank" rel="noreferrer">Repository</a>}
                {demo && <a className="btn btn-secondary" href={demo} target="_blank" rel="noreferrer">Live Demo</a>}
            </div>
        </article>
    );
}
