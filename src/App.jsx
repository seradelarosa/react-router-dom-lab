import { useState } from 'react';
import NavBar from './components/NavBar/NavBar.jsx';
import { Route, Routes } from 'react-router';
import MailboxForm from './components/MailboxForm/MailboxForm.jsx';
import MailboxList from './components/MailboxList/MailboxList.jsx';
import { useEffect } from 'react';

const initialState = {
  _id: 0,
  // if small is default selected, why is it not being passed?
  // user must re-select small for it to update
  // setting default value to small so it passes as a default value...
  boxSize: 'small',
  boxOwner: '',
};

const App = () => {
  // initialize as empty array
  const [mailboxes, setMailboxes] = useState([]);

  const addMailbox = (formData) => {
    setMailboxes((prevMailboxes) => [
        ...prevMailboxes,
        { ...formData, _id: prevMailboxes.length + 1 }
    ]);
};

  // Log the updated mailboxes array whenever it changes
  useEffect(() => {
    console.log("Updated mailboxes:", mailboxes);
  }, [mailboxes]);

  return (
    <>
    <NavBar />
    <h1>Sera's Post Office Company Intl.</h1>
    <Routes>
      <Route path='/' element={ <h2> Welcome to the home page. Click somewhere to get started. </h2> }/>
      <Route path='/mailboxes' element={ <MailboxList mailboxes={mailboxes} /> }/>
      {/* passing the add mailbox function and initial state into the form element */}
      <Route path='new-mailbox' element={ <MailboxForm addMailbox={addMailbox} initialState={initialState} /> } />
      {/* catch-all default route */}
      <Route path="*" element={<h2>Whoops, nothing here!</h2>} />
    </Routes>
    </>
  )
};

export default App;

