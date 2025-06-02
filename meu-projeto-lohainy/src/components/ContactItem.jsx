import "./ContactItem.css";

function ContactItem({id,name, phone, email, onDelete, onEdit}){
    return (

    <div className="contact-card">  
        <h3>{name}</h3>
        <p>Telefone ☎️: {phone}</p>
        <p>Email ✉: {email}</p>
       
        <div className="btns"> 
            <button onClick={()=>onDelete(id)}>Deletar</button>    
            <button onClick={onEdit}>Editar</button>
        </div>
    </div>
    );
}
export default ContactItem;