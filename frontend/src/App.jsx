import { useEffect, useState } from "react";

function App() {
    const [message, setMessage] = useState("Loading...");

    useEffect(() => {
        fetch("http://localhost:5000/api/hello")
            .then((res) => res.json())
            .then((data) => setMessage(data.message))
            .catch(() => setMessage("⚠️ Error connecting to backend"));
    }, []);

    return (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
            <h1>Frontend + Backend Connection ✅</h1>
            <p>{message}</p>
        </div>
    );
}

export default App;
