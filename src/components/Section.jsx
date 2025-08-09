// Generic section wrapper to keep spacing/typography consistent
export default function Section({ id, title, children }) {
    return (
        <section id={id} className="section" aria-labelledby={`${id}-title`}>
            <h2 id={`${id}-title`} className="section-title">{title}</h2>
            <div className="section-content">{children}</div>
        </section>
    );
}
