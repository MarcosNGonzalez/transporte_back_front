import '../styles/ContactosPage.css';
import {useState} from 'react';
import axios from 'axios';










const ContactosPage = (props) => {

    const initialForm = {
        nombre: '',
        email:'',
        telefono:'',
        mensaje:'',
    }

    const[sending, setSending] = useState(false);
    const[msg, setMsg] = useState('');
    const[formData, setFormData] = useState(initialForm);


    const handleChange = e => { 
        const{ name, value} = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => { 
        e.preventDefault();
        setMsg('');
        setSending(true)

        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);

        if (response.data.error === false) { 
            setFormData(initialForm)
        }
    }






    return (

        <main className="holder contactos">
        <div>
            <h2>Contacto rapido</h2>

            <form action="/contacto" method="post" onSubmit={handleSubmit} className="formulario">

                <p>
                    <label for="Nombre"> Nombre:</label>
                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>
                </p>
                <p>
                    <label for="Email"> Email:</label>
                    <input type="text" name="email" value={formData.email} onChange={handleChange}/>
                </p>
                <p>
                    <label for="Telefono"> Telefono:</label>
                    <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}/>
                </p>
                <p>
                    <label for="Mensaje"> Mensaje:</label>
                    <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                </p>
                <p>
                    <input type="submit" value="Enviar"/>
                </p>


            </form>

            {sending ? <p>Enviando....</p> : null}
            {msg ? <p>{msg}</p> : null}





            <div className="datos">
                <h2>Otras vias de comunicacion</h2>
                <p>Utilizando cualquiera de los siguientes medios:
                </p>
                <ul>
                    <li>Wsp: +54 1152467954 </li>
                    <li>Email: Contacto@transportesrulo.com.ar </li>
                    <li>Facebook: @transportesXrulo </li>
                    <li>Instragram: @transportesXrulo </li>
                    <li>Twitter: @transportesXrulo </li>

                </ul>


            </div>



        </div>




    </main>
        
    );
}


export default ContactosPage;