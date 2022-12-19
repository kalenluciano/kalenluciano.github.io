import axios from 'axios'
import { useState } from 'react'

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
        // await axios.get('https://script.google.com/macros/s/AKfycbxAqwIggGlCKp2QSa-BfG1JYESCOP0vCinFx5BAdhD1mQ-isfAlagfcpCkZ2aA91CJG-w/exec', formState)
        setFormState(initialState)
    }
    
    return (
        <section id="contact">
            <h1>Contact</h1>
            <form onSubmit={handleSubmit} >
                <label htmlFor='name' >Name:</label>
                <input type='text' name='name' value={formState.name} onChange={handleChange} />
                <label htmlFor='email' >Email:</label>
                <input type='text' name='email' value={formState.email} onChange={handleChange} />
                <label htmlFor='message' >Message:</label>
                <textarea row="6" cols="20" name='message' value={formState.message} onChange={handleChange} />
                <button type='submit' >Submit</button>
            </form>
        </section>
    )
}

export default Contact
