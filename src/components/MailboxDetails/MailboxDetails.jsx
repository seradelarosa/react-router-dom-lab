// need to use useParams so it grabs the id being passed through the url
import { useParams } from "react-router";

const MailboxDetails = ({mailboxes}) => {
    // destructure id from useParams
    const { id } = useParams();
    const mailbox = mailboxes.find((mailbox) => (
        // Find the mailbox by id
        mailbox._id === Number(id)
        ));

    if (!mailbox) {
        return <h2>Mailbox not found!</h2>;
    }

    return (
        <div>
            <h1>Mailbox Details</h1>
            <h3>Mailbox ID: {mailbox._id}</h3>
            <p>Owner: {mailbox.boxOwner}</p>
            <p>Size: {mailbox.boxSize}</p>
        </div>
    )
};

export default MailboxDetails;