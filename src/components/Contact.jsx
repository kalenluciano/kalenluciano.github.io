import axios from 'axios'
import { useState } from 'react'
import "../styles/Contact.css"

const Contact = () => {
    const initialState = {
        name: "",
        email: "",
        message: ""
    }

    const [formState, setFormState] = useState(initialState)

    const handleChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // fetch('https://script.google.com/macros/s/AKfycbxAqwIggGlCKp2QSa-BfG1JYESCOP0vCinFx5BAdhD1mQ-isfAlagfcpCkZ2aA91CJG-w/exec', {redirect: 'follow', method: 'POST', body: JSON.stringify(formState)}).then(res => res.json()).then(json=>{console.log(json)})
        await axios.get('https://script.google.com/macros/s/AKfycbxAqwIggGlCKp2QSa-BfG1JYESCOP0vCinFx5BAdhD1mQ-isfAlagfcpCkZ2aA91CJG-w/exec')
        // await axios.post('https://script.google.com/macros/s/AKfycbzClrFj5SP0sY_G--4-4s3YQDZlpXrs1vlbm4Z-SclYWsWKCGKhN3LQK525YJKziQxuYg/exec', formState)
        setFormState(initialState)
    }
    
    return (
        <section id="contact">
            <h1>Contact</h1>
            <form onSubmit={handleSubmit} >
                <input type='text' name='name' value={formState.name} onChange={handleChange} placeholder="Name"/>
                <input type='text' name='email' value={formState.email} onChange={handleChange} placeholder="Email" />
                <textarea row="6" cols="20" name='message' value={formState.message} onChange={handleChange} placeholder="Message" />
                <button type='submit' >Submit</button>
            </form>
        </section>
    )
}

export default Contact
