import React, { useState } from 'react';
import ContactComponent from './contactComponent';
import Form from './form';


const Contact = () => {
    
    const contactList = [
        { name: 'Pedro', email: 'pedro@test.com', state: true},
        { name: 'Raul', email: 'raul@dominio.com', state: true},
    ]

    const [newContact, setNewContact] = useState(contactList)

    function changeState(contact) {
        const index = newContact.indexOf(contact)
        const tempContact = [...newContact]
        tempContact[index].state = !tempContact[index].state
        setNewContact(tempContact)
    }

    function remove(contact) {
        const index = newContact.indexOf(contact)
        const tempContact = [...newContact]
        tempContact.splice(index, 1)
        setNewContact(tempContact)
    }

    function addContact(contact) {
        const tempContact = [...newContact]
        tempContact.push(contact)
        setNewContact(tempContact)
    }

    return (
        <div>
            <h1>Contacto</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {newContact.map((contact, index)=> {
                        return(
                            <ContactComponent key={index} contact={contact} changeState={changeState} remove={remove}></ContactComponent>
                        )
                    })}  
                </tbody>
            </table>
        <Form onAddContact={addContact}></Form>
        </div>
    );
}

export default Contact;