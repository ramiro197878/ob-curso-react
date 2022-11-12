import React from 'react';

const ContactComponent = ({ contact, changeState, remove }) => {
    return (
            <tr>
                <td>{ contact.name }</td>
                <td>{ contact.email }</td>
                <td>
                    <button
                    style={{ backgroundColor: contact.state ? 'green' : 'red' }}
                    onClick={() => {
                        changeState(contact)
                    }}
                    >
                        { contact.state ? 'Connected' : 'Disconnected' }
                    </button>
                </td>
                <td>
                    <button
                    style={{ backgroundColor: 'red' }}
                    onClick={() => {
                        remove(contact)
                    }}
                    >
                        Delete
                    </button>
                </td>
            </tr>
    );
}

export default ContactComponent;
