import { Icon } from '@iconify/react';
import logo from './assets/logo.png';
import { Link } from 'react-router-dom';
import React, { useState, ChangeEvent } from 'react';

const Test = () => {
    const [userInput1, setUserInput1] = useState<string>('');
    const [userInput2, setUserInput2] = useState<string>('');
    const [userInput3, setUserInput3] = useState<string>('');
    const [userInput4, setUserInput4] = useState<string>('');
    const [userInput5, setUserInput5] = useState<string>('');
    const [userInput6, setUserInput6] = useState<string>('');
    const [userInput7, setUserInput7] = useState<string>('');
    const [userInput8, setUserInput8] = useState<string>('');
    const [userInput9, setUserInput9] = useState<string>('');
    const [userInput10, setUserInput10] = useState<string>('');
    const handleInputChange1 = (event: ChangeEvent<HTMLInputElement>) => {
        setUserInput1(event.target.value);
      };
    
      const handleInputChange2 = (event: ChangeEvent<HTMLInputElement>) => {
        setUserInput2(event.target.value);
      };
    
      const handleInputChange3 = (event: ChangeEvent<HTMLInputElement>) => {
        setUserInput3(event.target.value);
      };
    
      const handleInputChange4 = (event: ChangeEvent<HTMLInputElement>) => {
        setUserInput4(event.target.value);
      };
      const handleInputChange5 = (event: ChangeEvent<HTMLInputElement>) => {
        setUserInput5(event.target.value);
      };
      const handleInputChange6 = (event: ChangeEvent<HTMLInputElement>) => {
        setUserInput6(event.target.value);
      };
      const handleInputChange7 = (event: ChangeEvent<HTMLInputElement>) => {
        setUserInput7(event.target.value);
      };
      const handleInputChange8 = (event: ChangeEvent<HTMLInputElement>) => {
        setUserInput8(event.target.value);
      };
      const handleInputChange9 = (event: ChangeEvent<HTMLInputElement>) => {
        setUserInput9(event.target.value);
      };
      const handleInputChange10 = (event: ChangeEvent<HTMLInputElement>) => {
        setUserInput10(event.target.value);
      };
      const handleDragStart = (e) => {
        e.dataTransfer.setData('text/plain', e.target.innerText);
      };
    
      const handleDrop = (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('text/plain');
        e.target.innerText = data;
      };
    
      const handleDragOver = (e) => {
        e.preventDefault();
      };
    return (
        <div className='overflow-x-hidden '>
            <div className='flex items-center space-x-4 md:gap-48 gap-10 cursor-pointer font-bold mt-2 '>
                <div className='flex'>
                    <Link to='/'><img className='w-9' src={logo} alt='logo' /></Link>
                    <p className='text-sky-700 font-roboto'>Nexus</p>
                </div>
                <div className='flex gap-10'>
                    <Icon icon="material-symbols:search" width="25" />
                    <div className='border-cyan-600 border-l h-6 border-2'></div>
                    <p className='font-roboto' >Search</p>
                </div>
                <div className='md:invisibe visible'>
                    <div className='flex gap-12  md:visible invisible'>
                        <Link to={'/'}> <div className='text-slate-500'>Home</div></Link>  <div className='font-roboto'>Courses</div>
                        <div className='text-slate-500' >Results</div>
                        <div className='text-slate-500'>Contact</div>
                        <div className='text-slate-500'>Profile</div>
                    </div>
                </div>
            </div>
            <div className='flex font-roboto font-bold pt-14 gap-4 ml-3'>
                <p className='text-gray-400'>Courses</p>
                <Icon icon="ri:arrow-right-double-line" color="gray" width="22" />
                <p className='text-gray-600'>Mathematics</p>
                <Icon icon="ri:arrow-right-double-line" color="gray" width="22" />
                <p className='text-sky-800'>Test</p>
            </div>
            <div className='flex flex-col gap-16 mt-10'>
            <div className='flex font-bold md:gap-28 gap-16 ml-6'>
                    <div>
                        <p className='rounded-full w-6 h-6 text-center bg-blue-600 text-white '>1</p>
                    </div>
                    <div className='flex'>
                        <div>Compare the integers </div>
                    </div>
                </div>
                <div className='md:flex flex flex-col gap-6'>
                    <div>
                <div className='flex gap-2 md:ml-48 ml-20'>
                <input
        type="text"
        id="textInput"
        className="border-gray-400 border-b w-24 "
        value={userInput1}
        onChange={handleInputChange1}
      />    <Icon icon="ic:baseline-greater-than" />
                          <input
        type="text"
        id="textInput"
        className="border-gray-400 border-b w-24 "
        value={userInput2}
        onChange={handleInputChange2}
      />  </div>
     <div className='flex gap-8 md:ml-64 ml-36   mt-6'>
 <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>10</p>
      </div>  <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>-4</p>
      </div>                     </div>
                    </div>
                    <div >
                <div className='md:flex flex gap-2 md:ml-48 ml-20'>
                <input
        type="text"
        id="textInput"
        className="border-gray-400 border-b w-24 "
        value={userInput4}
        onChange={handleInputChange4}
      />      <Icon icon="ic:baseline-less-than" />
    <input
        type="text"
        id="textInput"
        className="border-gray-400 border-b w-24 "
        value={userInput3}
        onChange={handleInputChange3}
      />    </div>
     <div className='flex gap-8 md:ml-64 ml-28   mt-6'>
 <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>5</p>
      </div>  <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>40</p>
      </div>    
                       </div>
                    </div>
                    </div>

            <div>
                <div className='flex font-bold md:gap-28 gap-16 ml-6'>
                    <div>
                        <p className='rounded-full w-6 h-6 text-center bg-blue-600 text-white '>2</p>
                    </div>

                    <div className='md:flex flex flex-col'>
                        <div>Select negative numbers </div>
                        <input
        type="text"
        id="textInput"
        className="border-gray-400 border-b md:w-24 "
        value={userInput5}
        onChange={handleInputChange5}
      />  
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='flex gap-3 md:ml-64 ml-28   mt-6'>
 <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>10</p>
      </div>  <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>4</p>
      </div>  <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>-4</p>
      </div>  <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>-10</p>
      </div>                     </div>
                    <div className='flex gap-3 md:ml-64 ml-28   mt-6'>
 <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>1</p>
      </div>  <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>-5</p>
      </div>  <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>7</p>
      </div>  <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>-20</p>
      </div>                     </div>
                </div>
            </div>
            <div>
                <div className='flex font-bold md:gap-28 gap-12 ml-6'>
                    <div>
                        <p className='rounded-full w-6 h-6 text-center bg-blue-600 text-white '>3</p>
                    </div>
                    <div className='flex'>
                        <div>Write whether it is negative or positive for the integers below </div>
                    </div>
                </div>
                <div className='flex flex-col gap-3 md:ml-64 ml-28 mt-6'>
                    <div className='flex'>
                        <div className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'><p className='mt-2'>-10</p></div>
                        <input
        type="text"
        id="textInput"
        className="border-gray-400 border-b w-24 "
        value={userInput6}
        onChange={handleInputChange6}
      />                      </div>
                    <div className='flex'>
                        <div className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'><p className='mt-2'>-5</p></div>
                        <input
        type="text"
        id="textInput"
        className="border-gray-400 border-b w-24 "
        value={userInput7}
        onChange={handleInputChange7}
      />                      </div>
                    <div className='flex'>
                        <div className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'><p className='mt-2'>-8</p></div>
                        <input
        type="text"
        id="textInput"
        className="border-gray-400 border-b w-24 "
        value={userInput8}
        onChange={handleInputChange8}
      />                      </div>
                    <div className='flex'>
                        <div className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'><p className='mt-2'>10</p></div>
                        <input
        type="text"
        id="textInput"
        className="border-gray-400 border-b w-24 "
        value={userInput9}
        onChange={handleInputChange9}
      />                      </div>
                </div>
            </div>
            <div>
    <div className='flex font-bold md:gap-28 gap-16 ml-6'>
<div>
<p className='rounded-full w-6 h-6 text-center bg-blue-600 text-white '>6</p>
</div> 
<div className='flex'>
      <div>Try this</div>
     </div>
      </div>
      <div className='flex'>
      <div className='flex font-bold gap-28 p-3 md:ml-36 ml-24'>+3 - 6 =</div>  
      <input
        type="text"
        id="textInput"
        className="border-gray-400 border-b w-24 "
        value={userInput10}
        onChange={handleInputChange10}
      />  </div>
     </div>
            </div>
            <Link to="/Pass">  <div className='flex gap-4 bg-sky-500 rounded-md transform md:translate-x-96 ml-40 md:ml-32 mt-8 p-3 h-10 w-48'>
      <p className='font-bold text-white'> View your results</p>
      <Icon icon="ri:arrow-right-double-line" color="gray" width="22" />
    </div></Link>
        </div>
    )
}
export default Test