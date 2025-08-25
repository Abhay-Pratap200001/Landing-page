import React from 'react'
import Navbar from '../../LandingPage/Navbar';

const CreatProject = () => {

const roles = [ `Team Lead`, `Frontend`, `Backend`,`Testing`, `Documentation`];
  return (
    <>
    <Navbar/>
    <div className='flex items-center justify-end w-screen h-screen '>
    <div className='w-[1300px] border border-gray-300 h-[766px] b shadow-2xs mx-20  rounded-[10px]' >

      
      
      
      <div className='Mainn div'>
<div className='ProjctTitle flex flex-row items-center gap-10 ml-7 mt-6'>

<div className='flex flex-col '><h1 className=''>Project title</h1><input type="text"  className='p-3 outline-none border border-gray-300 h-[38px] w-[347px] rounded-[10px] mt-1.5'/></div>
<div className='flex flex-col '><h1>Project Type</h1><input type="text" className='p-3  outline-none border border-gray-300 h-[38px] w-[347px] rounded-[10px] mt-1.5' /></div>
<div className='flex flex-col '><h1>Start Date</h1><input type="date" className=' px-3.5 outline-none border border-gray-300 h-[38px] w-[160px] rounded-[10px] mt-1.5' /></div>
<div className='flex flex-col '><h1>End Date</h1><input type="date" className=' px-3.5  outline-none border border-gray-300 h-[38px] w-[160px] rounded-[10px] mt-1.5' /></div>

</div>

<div className='ProjectDescription flex items-center justify-center mt-6'>

<div className='flex flex-col '><h1>Project Description </h1><textarea className=" mt-1.5 h-32 w-[1240px] outline-none border border-gray-300 rounded-[10px] p-2 align-top resize-none leading-normal" placeholder="Enter project description..."></textarea></div>

</div>

<div className='p-4 border border-gray-300 rounded-md max-w-md space-y-3 mt-12 m-8'>
<h2 className='text-lg mb-4 '>Project Roles</h2><hr className='border border-gray-300 mb-5' />

{roles.map((role) => (
<div key={role} className=' flex items-center space-x-3  '> 

  <label className='w-36'>
    {role}
    </label>

  <input  type="text" placeholder='Enter Name..' className='flex-1 outline-none border border-gray-200 rounded-2xl px-3 p-1 text-[15px]  '  />
  <input type="checkbox" className='form-checkbox '/>
</div>


) )}


</div>
<div className='flex items-center justify-end gap-7 mr-24  '>
<button className=' border border-gray-300 px-4 p-1.5 rounded-full text-white bg-blue-500'>Create</button>
<button className='border border-gray-300  px-4 p-1.5 rounded-full'>Delete</button>
</div>



      </div>
      </div>
</div>  

      </>
  )
}

export default CreatProject