import React from "react";
import "./index.css";

function App() {
    return (
        <div className="main">
            {/* ===== Hero Section ===== */}
            <section className="hero">
                <h1 className="hero-title">Lalit M Rao</h1>
                <p className="hero-subtitle">DevOps Engineer | Cloud | Automation</p>
                <div className="hero-buttons">
                    <a href="https://hub.docker.com/u/lalitmrao04" target="_blank" rel="noreferrer">
                        <button className="btn">DockerHub</button>
                    </a>
                    <a href="http://localhost/" target="_blank" rel="noreferrer">
                        <button className="btn">Frontend (localhost)</button>
                    </a>
                    <a href="http://localhost:5000" target="_blank" rel="noreferrer">
                        <button className="btn">Backend (localhost:5000)</button>
                    </a>
                </div>
            </section>

            {/* ===== Project Section ===== */}
            <section className="project">
                <h2>My DevOps Project</h2>
                <p>
                    A complete CI/CD pipeline integrating <strong>Node.js</strong>, <strong>Docker</strong>,
                    and <strong>Jenkins</strong>.
                    Built for continuous integration, containerization, and deployment automation.
                </p>

                <div className="stack">
                    <div className="stack-item">Node.js</div>
                    <div className="stack-item">Docker</div>
                    <div className="stack-item">Jenkins</div>
                    <div className="stack-item">GitHub</div>
                </div>
                {/*<div className="stack">*/}
                {/*    <div className="stack-item">Node.js</div>*/}
                {/*    <div className="stack-item">Docker</div>*/}
                {/*    <div className="stack-item">Jenkins</div>*/}
                {/*    <div className="stack-item">GitHub</div>*/}
                {/*</div>*/}
            </section>

            {/* ===== Footer ===== */}
            <footer>
                <p>🚀 Built by Lalit M Rao — 2025</p>
            </footer>
        </div>
    );
}

export default App;
