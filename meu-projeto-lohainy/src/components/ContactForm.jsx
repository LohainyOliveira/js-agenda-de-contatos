import { useState } from "react";

function ContactForm({ onAdd, onClose, initialData = {} }) {

 const [name, setName] = useState(initialData.name || "");
 const [phone, setPhone] = useState(initialData.phone || "");
 const [email, setEmail] = useState(initialData.email || "");

  function handleSubmit(event) {

    //não deixa a página ser recarregada
    event.preventDefault();    

    const newContact = {
      id: initialData.id,
      name: name,
      phone: phone,
      email: email,
    };

    //chama a função para slavar os dados
    onAdd(newContact);

    setName("");
    setPhone("");
    setEmail("");
    //Limpa os Imputs
  }

  return (
    <form className = "form-contact" onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome"
        required
      />

      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Telefone"
        required
      />

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail"
        required
      />
      
      <button type="submit">Adicionar</button>
      <button type="button" onClick={onClose}>Cancelar</button>

    </form>
  );
}
export default ContactForm;
