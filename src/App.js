
import { useState } from 'react';
import './App.css';

function App() {

const [formdata, setFormata] = useState({firstName: "", lastName: "", email: "", country: "", address: "", city: "", stateProvince: "", zipCode:""});
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
             <div className='w-[88%] flex flex-col mx-auto'>
                <label className='font-bold' htmlFor='email' >Email Address</label>
                  <input
                  onChange={changeHandler}
                  type='email'
                  placeholder='Email'
                  name='email'
                  value={formdata.email}
                  id='email'
                  className='border rounded-md border-black px-2'
                  />
             </div> 
             <div className='w-[88%] flex flex-col mx-auto'>
                <label className='font-bold' htmlFor='country' >Country</label>
                 <select
                 id='country'
                 name='country'
                 onChange={changeHandler}
                 value={formdata.country}
                 className='border rounded-md border-black px-2'
                 >
                    <option>INDIA</option>
                    <option>Other</option>
                 </select>
             </div> 

             <div className='w-[88%] flex flex-col mx-auto'>
                <label className='font-bold' htmlFor='address' >Street Address</label>
                  <textarea
                  onChange={changeHandler}
                  placeholder='Enter Address'
                  name='address'
                  value={formdata.address}
                  id='address'
                  className='border rounded-md border-black px-2'
                  />
             </div> 
             <div className='w-[88%] flex flex-col mx-auto'>
                <label className='font-bold' htmlFor='city' >City</label>
                  <input
                  onChange={changeHandler}
                  type='text'
                  placeholder='City'
                  name='city'
                  value={formdata.city}
                  id='city'
                  className='border rounded-md border-black px-2'
                  />
             </div> 
             <div className='w-[88%] flex flex-col mx-auto'>
                <label className='font-bold' htmlFor='statep' >State / Province</label>
                  <input
                  onChange={changeHandler}
                  type='text'
                  placeholder='State Province'
                  name='stateProvince'
                  value={formdata.stateProvince}
                  id='statep'
                  className='border rounded-md border-black px-2'
                  />
             </div> 
             <div className='w-[88%] flex flex-col mx-auto'>
                <label className='font-bold' htmlFor='zipCode' >Zip / Postal Code</label>
                  <input
                  onChange={changeHandler}
                  type='number'
                  placeholder='Zip Code'
                  name='zipCode'
                  value={formdata.zipCode}
                  id='zipCode'
                  className='border rounded-md border-black px-2'
                  />
             </div> 
             <div className='w-[88%] flex flex-col mx-auto'>
              hii
             </div> 
        </form>
    </div>
  );
}

export default App;
