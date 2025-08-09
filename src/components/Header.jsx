// Simple, accessible, sticky header with anchor navigation
export default function Header() {
    return (
        <header className="header">
            <a className="brand" href="#top" aria-label="Go to top">Baris Oezcan</a>
            <nav aria-label="Primary">
                <ul className="nav">
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}
