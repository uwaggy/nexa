import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import logo from './assets/logo.png';
import exclude from './assets/Exclude.png'
import une from './assets/une.png'
import polygon from './assets/Polygon .png'
import people from './assets/people.png'
const Home = () => {
    return (
        <div className='overflow-x-hidden  '>
            <div className='flex items-center space-x-4 md:gap-48 gap-20 cursor-pointer font-bold mt-2 '>
                <div className='flex'>
                    <img className='w-9' src={logo} alt='logo' />
                    <p className='text-sky-700 font-roboto'>Nexus</p>
                </div>
                <div className='flex gap-10'>
                    <Icon icon="material-symbols:search" width="25" />
                    <div className='border-cyan-600 border-l h-6 border-2'></div>
                    <p className='font-roboto' >Search</p>
                </div>
                <div className='md:visible invisible '>
                    <div className='flex gap-12'>
                        <div className='text-slate-500'>Home</div>
                        <Link to="/Add"> <div className='font-roboto'>Courses</div></Link>
                        <div className='text-slate-500' >Results</div>
                        <div className='text-slate-500'>Contact</div>
                        <div className='text-slate-500'>Profile</div>
                    </div>
                </div>
            </div>
            <p className='font-bold font-mono text-3xl w-96 mt-20 md:ml-7 p-1'>Learn, <span className='text-sky-900'>practice</span>, test to be a <span className='text-sky-900'>mastermind</span> in <span className='text-sky-900'>Maths</span>.</p>
            <p className='font-mono text-gray-400 text-md  ml-6'>Get ready to embark on a new fun  and enthuasiastic educative journey</p>
            <Link to="/Add">
            <button className='font-roboto w-24 h-8 bg-sky-800 mt-7 ml-7 rounded-md text-white cursor-pointer'>Get Started</button></Link>

            <p className='font-bold text-xl text-center p-6'>Master basic algebra</p>
            <p className='w-96 font-mono text-gray-400 text-md md:ml-7 p-2'>Unlock your full potential and embark on a journey of limitless learning with our diverse range of exercises and contests.</p>
            <img src={exclude} alt="exclude" />
            <img className='md:w-64 w-32 translate-x-56 transform md:translate-x-96 -translate-y-36 md:ml-96 md:-translate-y-96' src={une} alt="une" />
            <div className='transform font-mono -translate-y-80'>
                <p className='font-extrabold text-xl text-center p-6' >Compete with others</p>
                <div className='md:flex'>
                    <div><p className='w-96 font-mono text-md md:ml-12 p-1 mt-32 text-gray-400'>With our platform, you will get to put your skills to the test by joining competitions with other students and upscaling your skills</p></div>
                    <div><img className='w-96 absolute right-0' src={polygon} alt="polygon" />
                        <img className='w-52 md:ml-96 md:mt-6 transfrom md:translate-x-20 translate-x-40 translate-y-20' src={people} alt='people' /></div>
                </div></div>
            <div className='transform md:-translate-y-52 -translate-y-32'>
                <p className='font-extrabold font-mono text-xl text-center p-6' >Start your educational adventure today!</p>
                <p className='w-80 text-md font-mono transform text-center md:ml-96 '>By joining our community to educate you for free</p>
            </div>
            <div className='border-gray-400 border-b border-2 w-full '></div>
            <div >
                <div className='md:flex md:flex-row flex flex-col gap-7 md:gap-20 p-2'>
                    <div className='flex flex-col'>
                        <div className='flex'>
                            <img className='w-9' src={logo} alt='logo' />
                            <p className='text-sky-700 font-roboto font-bold'>Nexus</p>
                        </div>
                        <p className='text-sky-700 w-60 font-roboto font-bold'>Your path ro be a mastermind</p>
                    </div>
                    <div>
                        <div className='cursor-pointer flex flex-col'>
                            <p className='font-bold font-roboto '>Company</p>
                            <p className='font-roboto text-sm'>About</p>
                            <p className='font-roboto text-sm'>Courses</p>
                            <p className='font-roboto text-sm'>Press</p>
                            <p className='font-roboto text-sm'>Testimonies</p>
                            <p className='text-sm'>Partnerships</p>
                        </div>
                    </div>
                    <div>
                        <div className='cursor-pointer flex flex-col'>
                            <p className='font-bold font-roboto '>Community</p>
                            <p className='font-roboto text-sm'>Free classses</p>
                            <p className='font-roboto text-sm'>Books</p>
                            <p className='font-roboto text-sm'>Refer a friend</p>
                            <p className='font-roboto text-sm'>Memberships</p>
                        </div>
                    </div>
                    <div>
                        <div className='cursor-pointer flex flex-col'>
                            <p className='font-bold font-roboto '>Teaching</p>
                            <p className='text-sm font-roboto'>Become a teacher</p>
                            <p className='text-sm font-roboto'>Teacher Help Center</p>
                            <p className='text-sm font-roboto'>Teacher rules & requirements</p>
                        </div>
                    </div>
                    <div>
                        <div className='border-2 p-1 border-gray-500 w-24 rounded-sm mt-7'><p>English</p></div>
                    </div>
                </div>
                <div className='justify-center flex gap-20 font-bold font-roboto'>
                    <p>Terms of use</p>
                    <p>Privacy policy</p>
                    <p>Cookie Notice</p>
                </div>
                <p className='text-center font-bold font-roboto '>	&copy;2023 Nexus. All rights reserved.</p>
            </div>
        </div>

    )
}
export default Home