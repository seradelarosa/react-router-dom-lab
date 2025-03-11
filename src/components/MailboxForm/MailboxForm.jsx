import { useState } from 'react';
import Select from 'react-select';

const initialState = {
    _id: 0,
    boxSize: '',
    boxOwner: '',
};

const handleSubmit = (event) => {
    event.preventDefault();
};

const MailboxForm = (props) => {
    const [formData, setFormData] = useState(initialState);

    return (
        <main>
            <h2>New Mailbox</h2>
            <form onSubmit={handleSubmit}>

                {/* <label htmlFor="name">
                    Name your new mailbox:
                </label>
                <input /> */}

                <label>
                    Box owner:
                </label>
                <input 
                type="text"
                id="boxOwner"
                name="boxOwner"
                value={formData.boxOwner}
                />

                <label>
                    Box Size:
                </label>
                <select
                id="boxSize"
                name="boxSize"
                value={formData.boxSize}
                >
                    <option>
                        Small
                    </option>
                    <option>
                        Medium
                    </option>
                    <option>
                        Large
                    </option>
                </select>

                <button type="submit">Submit</button>

            </form>
        </main>
    );
};

export default MailboxForm;