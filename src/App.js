
import { useState } from 'react';
import './App.css';

function App() {

const [formdata, setFormata] = useState({firstName: "", lastName: "", email: "", country: "", address: "", city: "", stateProvince: "", zipCode:"", comment: false, candidate: false, offers: "", mode: false});
console.log("form dats is ", formdata);
 function changeHandler(event){
  const {name, value, type, checked} = event.target;
  console.log("Type is here", type);
  console.log("checked is here", checked);
  setFormata(prevformdata => {
    return{
      ...prevformdata,
      [name] : type === 'checkbox' ? checked : value,
    }
  });
 }
 function submitHandler(event){
  event.preventDefault();
  console.log(formdata);
   console.log("Form Data Submitted");
 }

  return (
    <div className="">
        <form onSubmit={submitHandler} className='w-10/12 flex flex-col shadow-lg rounded-md mx-auto mt-6'>
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
                 <div
                 className='font-bold'
                 >By Mail
                 <br></br>
                      <input 
                      type='checkbox'
                      id = 'comments'
                      onChange={changeHandler}
                      name='comment'
                      value={formdata.comment}
                      checked = {formdata.comment}
                      className=''
                      />
                      <label htmlFor='comments' className='mx-3'>Comments</label>
                      <p className='mx-6'>Get Notified when someone comments on posting</p>
                 </div>
             </div> 

            <div className='w-[88%] flex flex-col mx-auto'>
                 <div
                 className='font-bold'
                 >
                 <br></br>
                      <input 
                      type='checkbox'
                      id = 'candidate'
                      onChange={changeHandler}
                      name='candidate'
                      value={formdata.candidate}
                      checked = {formdata.candidate}
                      className=''
                      />
                      <label htmlFor='candidate' className='mx-3'>Candidates</label>
                      <p className='mx-6'>Get Notified when candidate apply for job</p>
                 </div>
             </div> 
             <div className='w-[88%] flex flex-col mx-auto'>
                 <div
                 className='font-bold'
                 >
                 <br></br>
                      <input 
                      type='checkbox'
                      id = 'offer'
                      onChange={changeHandler}
                      name='offers'
                      value={formdata.offers}
                      checked = {formdata.offers}
                      className=''
                      />
                      <label htmlFor='offer' className='mx-3'>Offers</label>
                      <p className='mx-6'>Get Notified when candidate apply for job</p>
                 </div>
             </div> 
             <div className='w-[88%] flex flex-col mx-auto'>
                <h6 className='font-bold'>Push Notification</h6>
                <p>These are delivered via sms to your mobile phone </p>
                <div className='space-x-3'>
                    <input 
                    type='radio'
                    id='everi'
                    onChange={changeHandler}
                    name='mode'
                    value={"everything"}
                    checked = {formdata.mode === "everything"}
                    />
                    <label className='font-bold' htmlFor='everi'>Everything</label>
                 </div>
                 <div className='space-x-3'>
                    <input 
                    type='radio'
                    id='everi'
                    onChange={changeHandler}
                    name='mode'
                    value={"same as small"}
                    checked = {formdata.mode === "same as small"}
                    />
                    <label className='font-bold' htmlFor='everi'>Same as Small</label>
                 </div>
                 <div className='space-x-3'>
                    <input 
                    type='radio'
                    id='everi'
                    onChange={changeHandler}
                    name='mode'
                    value={'No push notification'}
                    checked = {formdata.mode === 'No push notification'}
                    />
                    <label className='font-bold' htmlFor='everi'>No push notification</label>
                 </div>
             </div>
            <button className='shadow-md border rounded-md mx-auto py-2 w-fit bg-blue-500 hover:bg-slate-600'>Submit</button>
        </form>
    </div>
  );
}
export default App;
