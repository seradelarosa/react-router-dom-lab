import { useState } from 'react';
import Select from 'react-select';
//for redirect
import { useNavigate } from "react-router-dom";

const MailboxForm = ( props ) => {
    console.log(props);
    const initialState = props.initialState;
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        console.log(formData);
        // prevent page refresh
        event.preventDefault();
        // pass formData into the addMailbox function
        props.addMailbox(formData);
        // reset form to initial state so user can submit another mailbox
        setFormData(initialState);

        navigate("/mailboxes");
    };
    
    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value });
      }; 

    return (
        <main>
            <h2>New Mailbox</h2>
            <form onSubmit={handleSubmit}>

                <label>
                    Box owner:
                </label>
                <input 
                type="text"
                id="boxOwner"
                name="boxOwner"
                value={formData.boxOwner}
                onChange={handleChange}
                />

                <label>
                    Box Size:
                </label>
                <select
                id="boxSize"
                name="boxSize"
                value={formData.boxSize}
                onChange={handleChange}
                >
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>

                <button type="submit">Submit</button>

            </form>
        </main>
    );
};

export default MailboxForm;