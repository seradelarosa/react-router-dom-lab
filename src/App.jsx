import { useState } from 'react';
import NavBar from './components/NavBar/NavBar.jsx';
import { Route, Routes } from 'react-router';
import MailboxForm from './components/MailboxForm/MailboxForm.jsx';

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);


  return (
    <>
    <NavBar />
    <h1>Sera's Post Office Company Intl.</h1>
    <Routes>
      <Route path='/' element={ <h2> Welcome to the home page. Click somewhere to get started. </h2> }/>
      <Route path='new-mailbox' element={ <MailboxForm /> } />
      {/* catch-all default route */}
      <Route path="*" element={<h2>Whoops, nothing here!</h2>} />
    </Routes>
    </>
  )
};

export default App;

