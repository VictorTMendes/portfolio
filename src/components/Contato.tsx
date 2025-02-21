import React, { useState } from "react";
import './Contato.css'

const Contato: React.FC = () => {
    const [nome, setNome] = useState("");
    const [mensagem, setMensagem] = useState("");

    const email = "contato.victortm@gmail.com"
    const assunto = "Contato pelo portfólio"

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const body = `Olá Victor, meu nome é ${nome}. \n\n${mensagem}`;
        const mailtoLink = `mailto:${email}?assunto=${encodeURIComponent(assunto)}&body=${encodeURIComponent(body)}`

        window.location.href = mailtoLink
    };

    return(
        <section id="contato" className="area-contato">
            <h1>Fale comigo</h1>
            <form onSubmit={handleSubmit} className="form-contato">
                <div className="area-input">
                    <label>Nome:</label>
                    <input className="input-nome" type="text" value={nome} onChange={(e) => setNome(e.target.value)}required />
                </div>
                <div className="area-input">
                    <label>Mensagem:</label>
                    <textarea className="input-mensagem" value={mensagem} onChange={(e) => setMensagem (e.target.value)}required />
                </div>
                <button className="btn-enviar" type="submit">Enviar</button>
            </form>

        </section>
    )

}

export default Contato;