import { Link } from 'react-router-dom';

// mailboxes needs to be destructured from props wowwww
const MailboxList = ({ mailboxes }) => {
    console.log(mailboxes);
    return (
        <>
            <h1>Mailboxes</h1>
            <ul>
                {/* map through mailboxes */}
                {mailboxes.map((mailbox) => {
                    return ( 
                        <li key={mailbox._id}>
                            <Link to={`/mailboxes/${mailbox._id}`}>
                            <h3>Mailbox {mailbox._id}</h3>
                            </Link>
                            {/* <p>Mailbox owner: {mailbox.boxOwner}</p>
                            <p>Mailbox size: {mailbox.boxSize}</p> */}
                        </li>
                    );
                })}
            </ul>
            
            {/* make each item a clickable link to its details page */}
        </>
    );
};

export default MailboxList;