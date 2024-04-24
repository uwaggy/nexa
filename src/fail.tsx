import { Icon } from '@iconify/react';
import logo from './assets/logo.png';
import { Link } from 'react-router-dom';
const fail = () => {
    return (
        <div className='overflow-x-hidden '>
             <div className='flex items-center space-x-4 md:gap-48 gap-10 cursor-pointer font-bold mt-2 '>
                <div className='flex'>
                <Link to={'/'}> < img className='w-9' src={logo} alt='logo' /></Link>
                <Link to={'/'}>  <p className='text-sky-700 font-roboto'>Nexus</p></Link>
                </div>
                <div className='flex gap-10'>
                    <Icon icon="material-symbols:search" width="25" />
                    <div className='border-cyan-600 border-l h-6 border-2'></div>
                    <p className='font-roboto' >Search</p>
                </div>
                <div className='md:visible invisible'>
                    <div className='flex gap-12 '>
                    <Link to={'/'}> <div className='text-slate-500'>Home</div></Link>
                        <div className='font-roboto'>Courses</div>
                        <div className='text-slate-500' >Results</div>
                        <div className='text-slate-500'>Contact</div>
                        <div className='text-slate-500'>Profile</div>
                    </div>
                </div>
            </div>
            <p className='p-2 mt-20 text-center font-mono text-red-500 font-bold text-xl'>Aww, you didn't reach your goal!</p>
            <p className='font-mono font-bold text-xl text-center'>You scored 42%</p>
            <p className='text-center font-mono font-bold text-gray-300'>Your goal: Reach 80% and above on next session</p>
            <p className='font-mono font-bold text-xl text-center mt-20'>Don't worry failure is the best teacher. Retry till you get everything correct</p>
            <div className='flex gap-6 justify-center mt-9 cursor-pointer'>
                <div className='font-bold bg-blue-400 w-14 h-8 p-2 rounded-sm text-white'>Retry</div>
           <Link to='/Number' >  <div className='bg-blue-400 font-bold w-40 h-8 p-1 rounded-sm text-white flex gap-2'>Next exercises <Icon icon="ri:arrow-right-double-line" color="white" width="22" />
                </div></Link>  
            </div>
            </div>
            )
            }
            export default fail