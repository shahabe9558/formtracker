
import { useState } from 'react';
import './App.css';

function App() {

const [formdata, setFormata] = useState({firstName: "", lastName: ""});
console.log("form dats is ", formdata);
 function changeHandler(event){
  const {name, value} = event.target;
  setFormata(prevformdata => {
    return{
      ...prevformdata,
      [name] : value

    }
  });
 }

  return (
    <div className="">
        <form className='w-10/12 flex flex-col border shadow-md mx-auto'>
             <div className='w-[88%] flex flex-col mx-auto'>
                <label className='font-bold' htmlFor='firstName' >First Name</label>
                  <input
                  onChange={changeHandler}
                  type='text'
                  placeholder='First Name'
                  name='firstName'
                  id='firstName'
                  value={formdata.firstName}
                  className='border rounded-md border-black px-2'
                  />
             </div> 
             <div className='w-[88%] flex flex-col mx-auto'>
                <label className='font-bold' htmlFor='lastName' >Last Name</label>
                  <input
                  onChange={changeHandler}
                  type='text'
                  placeholder='last Name'
                  name='lastName'
                  value={formdata.lastName}
                  id='lastName'
                  className='border rounded-md border-black px-2'
                  />
             </div> 
        </form>
    </div>
  );
}

export default App;
