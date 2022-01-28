import { useContext, useState, useEffect } from 'react';
import { DocsContext } from '../../context/docs/DocsState';
import logo from '../../images/logo.png';
import { AuthContext } from '../../context/auth/AuthState';
import { Link } from 'react-router-dom';

const Header = () => {
  const { singleDoc, updateDocument } = useContext(DocsContext);
  const { user } = useContext(AuthContext);

  const [title, setTitle] = useState(singleDoc?.title);

  useEffect(() => {
    updateDocument(title, singleDoc.id);
    //eslint-disable-next-line
  }, [title, singleDoc.id]);

  return (
    <header className='flex justify-between items-center p-3 pb-1 border-b-2'>
      <Link to='/'>
        <img src={logo} alt='logo' className='h-10' />
      </Link>
      <div className='flex-grow px-2'>
        <div className='flex space-x-5'>
          <input
            type='text'
            className='text-lg font-semibold ml-1 hover:border'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='hidden md:!flex items-center space-x-1 text-gray-600 text-md ml-3 gap-5 h-8'>
          <p>File</p>
          <p>Edit</p>
          <p>Insert</p>
          <p>View</p>
          <p>Format</p>
          <p>Tools</p>
        </div>
      </div>
      <div className='flex items-center'>
        <img
          src={user?.photo}
          alt='account'
          className='h-9 rounded-full cursor-pointer transition duration-150 transform hover:scale-110'
        />
      </div>
    </header>
  );
};

export default Header;
