import React from 'react';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { BiMenuAltRight } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const NavLanding = () => {
  
    const [nav,setNav] = useState(false);
    const navigate = useNavigate();
  
          const links = [
             {
                     id: 1,
                link: 'home',
            },
               {  
               id: 2,
                   link: 'Facilities',
               },
               {
                    id: 3,
                    link: '',
               },
    
       ];

      
  
    
          return (
<div className=' h-24 max-w-screen mx-auto z-[100]'>
<div className="flex justify-between items-center h-24  max-w-screen mx-auto px-4 text-white">
    <div className="flex items-center ">   
    <h1 className='text-4xl font-bold text-black'>opion</h1>

    </div> 

     <ul className='hidden md:flex '>
                {
                    links.map(({id, link}) => (
                      <li key={id} className='p-4 capitalize hover:text-blue-500 cursor-pointer duration-300 text-xl'>
                                {link}
                          </li>
                         ))
                        
                        }
       </ul>
       <div className=' md:flex hidden'>
            <button className=' bg-blue-500 rounded-lg px-4 py-2 hover:bg-blue-600 m-4' onClick={handleLogout}>Log out</button>
           
          </div>
          <div className=' md:hidden cursor-pointer p-3' onClick={() => {setNav(true)}}>
         <BiMenuAltRight size={33} className="text-black"/>
         </div>
         </div>

         <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-full bg-gray-600/70 backdrop-blur z-40':""}>
        
        <div className={nav ?'shadow-xl fixed left-0 top-0 w-4/5 bg-black z-40 text-white h-full p-10 ease-in duration-300': 'fixed top-0 left-[-100%] p-10 duration-300 ease-in h-full z-40 ' }>
             <div className='flex items-center justify-between w-full text-white'>
                   {/* <img src="./log.png" alt="" height="" width="" className='h-40 w-40' /> */}
    {/* <img src="./public/log.png" height={100} width={100} alt="" />
            */}
                  <div onClick={() => setNav(false)} className="cursor-pointer p-3 "> <FaTimes size={30}/>
                </div>
             </div>

             <ul className='pt-10'>
            {             links.map(({id,link}) =>(
                <li key={id} className='p-4 hover:text-blue-600 duration-300 text-lg cursor-pointer'>{link}</li>
             ))
            }
             </ul>
             <div>
            <button className=' bg-red-500 rounded-lg px-4 py-2 hover:bg-red-600 m-4'>Logout</button>
                 {/* <a href='http://shrtco.de/ywZsv' target="_blank" className='bg-blue-600 w-full ml-3 rounded-md hover:bg-blue-800 px-4 py-2'>Register</a> */}
             </div>
         </div>





    </div>
    
         
    </div>
  )
}

export default NavLanding




















// import React from 'react'

// const NavLanding = () => {
//     const [nav,setNav] = useState(false);
//     const links = [
//         {
//             id: 1,
//             link: 'home',
//         },
//         {  
//             id: 2,
//             link: 'about',
//         },
//         {
//             id: 3,
//             link: 'services',
//         },
    
//     ];
//   return (

//     <div className=' h-24 max-w-screen mx-auto z-[100]'>
//         <div className="flex justify-between items-center h-24  max-w-screen mx-auto px-4 text-white">
//             <div className="flex items-center ">
//                 <h1 className='text-4xl font-bold text-white'>opion</h1>
//          </div>

//          <ul className='hidden md:flex '>
//                 {
//                     links.map(({id, link}) => (
                        
//                             <li key={id} className='p-4 capitalize hover:text-blue-500 cursor-pointer duration-300 text-xl'>
//                                 {link}
//                             </li>
//                         ))
                        
//                         }
                   
//               </ul>
//          <div className=' md:flex hidden'>
//             <button className=' bg-blue-500 rounded-lg px-4 py-2 hover:bg-blue-600 m-4'>Register</button>
//             {/* <button className='m-4 py-2 px-3 bg-transparent hover:bg-blue-600 rounded-lg '>Log In</button> */}
//          </div>
//          <div className=' md:hidden cursor-pointer p-3' onClick={() => {setNav(true)}}>
//         <BiMenuAltRight size={33} className="text-white"/>
//         </div>
//         </div>

//         <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-full bg-gray-600/70 backdrop-blur z-40':""}>
        
//         <div className={nav ?'shadow-xl fixed left-0 top-0 w-4/5 bg-black z-40 text-white h-full p-10 ease-in duration-300': 'fixed top-0 left-[-100%] p-10 duration-300 ease-in h-full z-40 ' }>
//             <div className='flex items-center justify-between w-full text-white'>
//                  {/* <img src={axes} alt="" height="" width="" className='h-40 w-40' />
//     <img src="./public/log.png" height={100} width={100} alt="" />
//            */}
//                  <div onClick={() => setNav(false)} className="cursor-pointer p-3">
//                     <FaTimes size={30}/>
//                 </div>
//             </div>
//             <ul className='pt-10'>
//             {
//             links.map(({id,link}) =>(
//                 <li key={id} className='p-4 hover:text-blue-600 duration-300 text-lg cursor-pointer'>{link}</li>
//             ))
//            }
//             </ul>
//             <div>
//             <button className=' bg-blue-500 rounded-lg px-4 py-2 hover:bg-blue-600 m-4'>Register</button>
//                 {/* <a href='http://shrtco.de/ywZsv' target="_blank" className='bg-blue-600 w-full ml-3 rounded-md hover:bg-blue-800 px-4 py-2'>Register</a> */}
//             </div>
//         </div>
//        </div>
//     </div>
//   )
// }

// export default NavLanding