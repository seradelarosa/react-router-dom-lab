import { useState } from 'react';
import NavBar from './components/NavBar/NavBar.jsx';

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);


  return (
    <>
    <NavBar />
    <h1>Sera's Post Office Company Intl.</h1>
    </>
  )
};

export default App;

