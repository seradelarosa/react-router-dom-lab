import { useState } from 'react';
import NavBar from './components/NavBar/NavBar.jsx';
import { Route, Routes } from 'react-router';
import MailboxForm from './components/MailboxForm/MailboxForm.jsx';

const initialState = {
  _id: 0,
  boxSize: '',
  boxOwner: '',
};

const App = () => {
  // initialize as empty array
  const [mailboxes, setMailboxes] = useState([]);

  const addMailbox = (formData) => {
    setMailboxes((prevMailboxes) => {
      const newMailbox = { ...formData, _id: prevMailboxes.length + 1 };
      return [...prevMailboxes, newMailbox];
    });
  };

  return (
    <>
    <NavBar />
    <h1>Sera's Post Office Company Intl.</h1>
    <Routes>
      <Route path='/' element={ <h2> Welcome to the home page. Click somewhere to get started. </h2> }/>
      <Route path='/mailboxes' />
      {/* passing the add mailbox function and initial state into the form element */}
      <Route path='new-mailbox' element={ <MailboxForm addMailbox={addMailbox} initialState={initialState} /> } />
      {/* catch-all default route */}
      <Route path="*" element={<h2>Whoops, nothing here!</h2>} />
    </Routes>
    </>
  )
};

export default App;

