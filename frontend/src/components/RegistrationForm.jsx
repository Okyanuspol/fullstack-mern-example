import { useState } from "react";

export default function Registration() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    function onSubmit(e) {
        e.preventDefault();

        fetch('http://localhost:3000/register', {
            method: 'POST', // HTTP-Methode
            headers: {
              'Content-Type': 'application/json' // Header, der den Inhaltstyp angibt
            },
            body: JSON.stringify({ // Daten, die im Anfrage-Body gesendet werden
              email: email,
              password: password
            })
        })
        .then(res => {
            if (!res.ok) {
                throw new Error("registration failed");
            }
            setMessage("Bitte checke deine Inbox und bestätige dein E-Mail.");
        })
        .catch(error => setMessage("Bitte kontrolliere deine Daten"));

    }

    return (
        <section>
            <h1>Neu hier?</h1>
            <p>{message}</p>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="email">E-Mail-Adresse</label>
                    <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Passwort</label>
                    <input type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button>Registrieren</button>
            </form>
        </section>
    )
}