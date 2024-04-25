import { Icon } from '@iconify/react';
import logo from './assets/logo.png';
import { Link } from 'react-router-dom';
import React, { useState, ChangeEvent } from 'react';

const Practice = () => {
    const [userInput1, setUserInput1] = useState<string>('');
    const [userInput2, setUserInput2] = useState<string>('');
    const [userInput3, setUserInput3] = useState<string>('');
    const [userInput4, setUserInput4] = useState<string>('');
    const [userInput5, setUserInput5] = useState<string>('');
    const [userInput6, setUserInput6] = useState<string>('');
    const [userInput7, setUserInput7] = useState<string>('');
    const [userInput8, setUserInput8] = useState<string>('');
    const [userInput9, setUserInput9] = useState<string>('');

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
      const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement;  e.dataTransfer.setData('text/plain', target.innerText);
      };
      
      // const handleDrop = (e) => {
      //   e.preventDefault();
      //   const data = e.dataTransfer.getData('text/plain');
      //   e.target.innerText = data;
      // };
    
      // const handleDragOver = (e) => {
      //   e.preventDefault();
      // };
    
    return (
        <div className='overflow-x-hidden '>
            <div className='flex items-center space-x-4 md:gap-48 gap-10 cursor-pointer font-bold mt-2 '>
                <div className='flex'>
                    <Link to='/'><img className='w-9' src={logo} alt='logo' /></Link>
                    <Link to={'/'}>  <p className='text-sky-700 font-roboto'>Nexus</p></Link>
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
                <p className='text-sky-800'>Practice</p>
            </div>
            <div className='md:flex p-1'>
                <div>
                    <p className='rounded-full w-6 h-6 text-center mt-5 ml-4 bg-blue-600 text-white '>1</p>
                </div>
                <div className='text-white font-roboto bg-blue-700  md:w-96 rounded-xl w-11/12	ml-4 p-4 md:ml-20 mt-4'>
                    <p className='text-white text-center font-bold'>Positive Integers</p>
                    <p className='text-white'>+1   +4 </p>
                    <p className='text-white'>+2   +5 </p>
                    <p className='text-white'>+3   +6 </p>
                    <p>Positive integers have (+) sign.</p>
                </div>
                <div className='text-white font-roboto bg-blue-700  md:w-96 rounded-xl p-4 md:ml-20 mt-4 w-11/12 ml-4'>
                    <p className='text-white text-center font-bold'>Negative Integers</p>
                    <p className='text-white'>-1   -4 </p>
                    <p className='text-white'>-2   -5 </p>
                    <p className='text-white'>-3   -6 </p>
                    <p>Positive integers have (-) sign.</p>
                </div>
            </div>
            <div className='flex flex-col gap-5 mt-9'>
                <div>
                    <div className='flex font-bold md:gap-28 gap-16 ml-6'>
                        <div>
                            <p className='rounded-full w-6 h-6 text-center bg-blue-600 text-white '>2</p>
                        </div>
                        <div className='flex flex-col'>
                            <div>Select negative integers </div>
                            <input
        type="text"
        id="textInput"
        className="border-gray-400 border-b w-44 "
        value={userInput1}
        onChange={handleInputChange1}
      />
                        </div>
                    </div>
                    <div className='flex gap-3 md:ml-64 ml-28 mt-6'>
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
        <p className='mt-2'>-8</p>
      </div>  <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>20</p>
      </div>  <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>3</p>
      </div>                      </div>
                    <div className='flex gap-3 md:ml-64 ml-28 mt-6'>
<div
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
        <p className='mt-2'>9</p>
      </div>  <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>-7</p>
      </div>  <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>-40</p>
      </div>                      </div>
                </div>
                <div>
                    <div className='flex font-bold md:gap-28 gap-16 ml-6'>
                        <div>
                            <p className='rounded-full w-6 h-6 text-center bg-blue-600 text-white '>3</p>
                        </div>
                        <div className='flex flex-col'>
                            <div>Select positive integers </div>
                            <input
        type="text"
        id="textInput"
        className="border-gray-400 border-b w-44 "
        value={userInput2}
        onChange={handleInputChange2}
      />
                        </div>
                    </div>
                    <div className='flex gap-3 md:ml-64 ml-28 mt-6'>
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
        <p className='mt-2'>2</p>
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
        <p className='mt-2'>-3</p>
      </div>                      </div>
                    <div className='flex gap-3 md:ml-64 ml-28 mt-6'>
<div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>-10</p>
      </div>  <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>6</p>
      </div>  <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>-50</p>
      </div>  <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>10</p>
      </div>                      </div>
                </div>
                <div>
                    <div className='flex font-bold md:gap-28 gap-16 ml-6'>
                        <div>
                            <p className='rounded-full w-6 h-6 text-center bg-blue-600 text-white '>4</p>
                        </div>
                        <div className='flex'>
                            <div>Write the negative integers for the integers below </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 md:ml-64 ml-28 mt-6'>
                        <div className='flex'>
                            <div className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'><p className='mt-2'>1</p></div>
                            <input
        type="text"
        id="textInput"
        className="border-gray-400 border-b w-24  "
        value={userInput3}
        onChange={handleInputChange3}
      />
                        </div>
                        <div className='flex'>
                        <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>-2</p>
      </div>                                      <input
        type="text"
        id="textInput"
        className="border-gray-400 border-b w-24 "
        value={userInput5}
        onChange={handleInputChange5}
      />
                        </div>
                        <div className='flex'>
                        <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>3</p>
      </div>                                      <input
        type="text"
        id="textInput"
        className="border-gray-400 border-b w-24 "
        value={userInput4}
        onChange={handleInputChange4}
      />
                        </div>

                    </div>
                </div>
                <div>
                    <div className='flex font-bold md:gap-28 gap-16 ml-6'>
                        <div>
                            <p className='rounded-full w-6 h-6 text-center bg-blue-600 text-white '>5</p>
                        </div>
                        <div className='flex'>
                            <div>Write the positive integers for the integers below </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 md:ml-64 ml-28 mt-6'>
                        <div className='flex'>
                        <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>-10</p>
      </div>                                      <input
        type="text"
        id="textInput"
        className="border-gray-400 border-b w-24 "
        value={userInput6}
        onChange={handleInputChange6}
      />
                        </div>
                        <div className='flex'>
                        <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>-5</p>
      </div>                                      <input
        type="text"
        id="textInput"
        className="border-gray-400 border-b w-24 "
        value={userInput7}
        onChange={handleInputChange7}
      />
                        </div>
                        <div className='flex'>
                        <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>-8</p>
      </div>                                      <input
        type="text"
        id="textInput"
        className="border-gray-400 border-b w-24 "
        value={userInput8}
        onChange={handleInputChange8}
      />
                        </div>
                    </div>
                </div>
                <div className='flex font-bold md:gap-28 gap-16 ml-6'>
                    <div>
                        <p className='rounded-full w-6 h-6 text-center bg-blue-600 text-white '>6</p>
                    </div>
                    <div className='flex '>
                        <div>Collect the integers into their categories </div>
                    </div>
                </div>
                <input
        type="text"
        id="textInput"
        className="border-gray-400 border-b w-60 md:ml-36 ml-20"
        value={userInput9}
        onChange={handleInputChange9}
      />
                <div className='flex gap-3 md:ml-64 ml-24 mt-6'>
          <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>5</p>
      </div>          <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>2</p>
      </div>          <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>-4</p>
      </div>          <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>-1</p>
      </div>          <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>-30</p>
      </div>          <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>0</p>
      </div>                </div>
            </div>
            <div className='flex gap-4 bg-sky-500 rounded-md transform md:translate-x-96 ml-40 md:ml-32 mt-8 p-3 h-10 w-48'>
                <Link to='/Test'> <p className='font-bold text-white'>Fly to next wing </p></Link>
                <Icon icon="ri:arrow-right-double-line" color="gray" width="22" />
            </div>
        </div>
    )
}
export default Practice