import { Link } from 'react-router';

const NavBar = () => {
    return (
        <nav>
            <p>
            <Link to='/'>Home</Link>
            </p>
            <p>
            <Link to='/mailboxes'>Mailboxes</Link>
            </p>
            <p>
            <Link to='/new-mailbox'>New Mailbox</Link>
            </p>
        </nav>
    );
};

export default NavBar;
