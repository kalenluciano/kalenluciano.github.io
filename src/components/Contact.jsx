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
    const [submitState, toggleSubmitState] = useState(false)

    const handleChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('https://script.google.com/macros/s/AKfycby7IkvVXUwIZ3ekyQsicO1rc17qxXKigpQYDzfKXdz9Xni3KxtChUKUCVUEIy9R6m2T9g/exec', JSON.stringify(formState))
        setFormState(initialState)
        toggleSubmitState(true)
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
            {submitState && <h2>Thanks for reaching out! I will get back to you shortly.</h2>}
        </section>
    )
}

export default Contact
