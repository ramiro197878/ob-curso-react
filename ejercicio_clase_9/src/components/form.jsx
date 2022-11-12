import React, { useRef } from 'react';

const Form = ({ onAddContact }) => {
    
    const name = useRef('')
    const email = useRef('')

    function addContact(e) {
        e.preventDefault();

        const newContact = { name: name.current.value, email: email.current.value, state: true}

        onAddContact(newContact)
        name.current.value = ''
        email.current.value = ''
    }
    
    return (
        <form>
            <h2>New Contact</h2>
            <input ref={name} name="name" placeholder="New contact" />
            <input ref={email} name="email" placeholder="Email" />
            <button onClick={addContact} type="submit">
                Add
            </button>
        </form>
    );
}

export default Form;
