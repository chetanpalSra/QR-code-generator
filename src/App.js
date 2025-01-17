import './App.css';
import './index.css'
import Form from './components/form';

function App() {
  return (
    <>
     <div className="container mt-3">
      <h1 className='text-center' style={{textDecoration: 'underline',backgroundColor: '#262626',color: '#f2f2f2',padding: '10px 0', textShadow: '2px 2px 4px rgba(255, 255, 255, 0.5)'}}>Build your own QR code with customization</h1>
    </div>
    <Form/>
  </>
   
  );
}

export default App;
