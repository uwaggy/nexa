import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import sun from './assets/sun.png'
import sun1 from './assets/sun1.png'
import butter from './assets/butter.png'
import fly from './assets/fly.png'
import frame from './assets/Frame.png'
import './App.css'
import React, { useState, ChangeEvent } from 'react';
import 'tailwindcss/base.css';
const Subtract: React.FC = () => {
  const [userInput1, setUserInput1] = useState<string>("");
  const [userInput2, setUserInput2] = useState<string>("");
  const [userInput3, setUserInput3] = useState<string>('');
  const [userInput4, setUserInput4] = useState<string>('');
  const [userInput5, setUserInput5] = useState<string>('');
  const [userInput6, setUserInput6] = useState<string>('');
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
  const handlesun1Click = (sun1Id) => {
    setsun1States((prevStates) => {
      const currentClickedState = prevStates[sun1Id];
      const newClickedState = !currentClickedState;
      // const increment = newClickedState ? 1 : -1; // Increment if clicked, decrement if unclicked
      // setUserInput1((prevInput) => prevInput + increment);
      return {
        ...prevStates,
        [sun1Id]: newClickedState // Update the clicked state
      };
    });
  };
  const handleflyClick = (flyId) => {
    setflyStates((prevStates) => {
      const currentClickedState = prevStates[flyId];
      const newClickedState = !currentClickedState;
      // const increment = newClickedState ? 1 : -1; // Increment if clicked, decrement if unclicked
      // setUserInput2((prevInput) => prevInput + increment);
      return {
        ...prevStates,
        [flyId]: newClickedState // Update the clicked state
      };
    });
  };
  const [sun1States, setsun1States] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
    sixth: false,
    seventh: false,
    eighth: false,
    ninth: false,
    tenth: false,
    eleventh: false,
    twelfth: false,
    thirteenth: false,
    fourteenth: false,
    fifteenth: false,
    sixteenth: false,
    seventeenth: false,
    eighteenth: false,
    nineteenth: false,
    twentieth: false,
    twentyFirst: false,
    twentySecond: false,
    twentyThird: false,
    twentyFourth: false,
    twentyFifth: false,
    twentySixth: false,
    twentySeventh: false,
    twentyEighth: false,
    twentyNinth: false,
    thirtieth: false,
    thirtyFirst: false,
    thirtySecond: false,
  });
  const [flyStates, setflyStates] = useState({

    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
    sixth: false,
    seventh: false,
    eighth: false,
    ninth: false,
    tenth: false,
    eleventh: false,
    twelfth: false,
    thirteenth: false,
    fourteenth: false,
    fifteenth: false,
    sixteenth: false,
    seventeenth: false,
    eighteenth: false,
    nineteenth: false,
    twentieth: false,
    twentyFirst: false,
    twentySecond: false,
    twentyThird: false,
    twentyFourth: false,
    twentyFifth: false,
    twentySixth: false,
    twentySeventh: false,
    twentyEighth: false,
    twentyNinth: false,
    thirtieth: false,
    thirtyFirst: false,
    thirtySecond: false,
  });
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
          <Link to={'/'}><img className='w-9' src={logo} alt='logo' /></Link>
          <Link to={'/'}>  <p className='text-sky-700 font-roboto'>Nexus</p></Link>  </div>
        <div className='flex gap-10'>
          <Icon icon="material-symbols:search" width="25" />
          <div className='border-cyan-600 border-l h-6 border-2'></div>
          <p className='font-roboto' >Search</p>
        </div>
        <div className=' md:visible invisible'>
          <div className='flex gap-12 '>
            <Link to={'/'}> <div className='text-slate-500'>Home</div></Link> <div className='font-roboto'>Courses</div>
            <div className='text-slate-500' >Results</div>
            <div className='text-slate-500'>Contact</div>
            <div className='text-slate-500'>Profile</div>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-3 '>
        <div className='flex font-roboto font-semibold pt-14 gap-4 ml-3'>
          <p className='text-gray-400'>Courses</p>
          <Icon icon="ri:arrow-right-double-line" color="gray" width="22" />
          <p className='text-gray-600'>Mathematics</p>
          <Icon icon="ri:arrow-right-double-line" color="gray" width="22" />
          <p className='text-sky-800'>Practice</p>
        </div>
        <div>
          <p className='text-sky-800 font-bold text-lg ml-32 '>Subtraction wing</p>
        </div>
      </div>
      <p className='font-roboto font-semibold p-4 md:ml-28'>Calculate and show the results of the ollowing questions:</p>
      <div className='flex font-bold md:gap-28 gap-16 ml-6'>
        <div>
          <p className='text-white rounded-full w-6 h-6 text-center bg-blue-600'>1</p>
        </div>
        <div className='flex'>
          <div>-7-8 = </div>
          <input
            type="text"
            id="textInput"
            className="border-gray-400 border-b w-44 "
            value={userInput1}
            onChange={handleInputChange1}
          />
        </div>
      </div>
      <div className='flex md:gap-4 gap-5 font-roboto md:ml-40 mt-8 w- '>
        <p className='mt-8 ml-4 text-2xl'>-</p>
        {/* <div className='flex flex-col md:h-16 h-12 mt-5 w-20 md:w-36  bg-cyan-400 rounded-md'>
                    <div className='md:ml-3 flex md:gap-1 justify-center'>
                        <img className='md:h-6 h-4 mt-1 w-5 md:w-6' src={sun} alt='flower' />
                        <img className='md:h-6 h-4 mt-1 w-5 md:w-6' src={sun} alt='flower' />
                        <img className='md:h-6 h-4 mt-1 w-5 md:w-6' src={sun} alt='flower' />
                        <img className='md:h-6 h-4 mt-1 w-5 md:w-6' src={sun} alt='flower' />
                    </div>
                    <div className='flex justify-center md:gap-1'>
                        <img className='md:h-6 h-4 mt-1 w-5 md:w-6' src={sun} alt='flower' />
                        <img className='md:h-6 h-4 mt-1 w-5 md:w-6' src={sun} alt='flower' />
                        <img className='md:h-6 h-4 mt-1 w-5 md:w-6' src={sun} alt='flower' />
                    </div>
                </div> */}

        {/* <div className='flex flex-col h-12 md:h-16 mt-5 md:ml-5 md:w-32 w-24  bg-cyan-400 rounded-md'>
                    <div className='md:ml-3 flex gap-1'>
                        <img className='md:h-6 h-4 mt-1 w-5 md:w-6' src={sun} alt='flower' />
                        <img className='md:h-6 h-4 mt-1 w-5 md:w-6' src={sun} alt='flower' />
                        <img className='md:h-6 h-4 mt-1 w-5 md:w-6' src={sun} alt='flower' />
                        <img className='md:h-6 h-4 mt-1 w-5 md:w-6' src={sun} alt='flower' />
                    </div>
                    <div className='flex md:ml-3  gap-1'>
                        <img className='md:h-6 h-4 mt-1 w-5 md:w-6' src={sun} alt='flower' />
                        <img className='md:h-6 h-4 mt-1 w-5 md:w-6' src={sun} alt='flower' />
                        <img className='md:h-6 h-4 mt-1 w-5 md:w-6' src={sun} alt='flower' />
                        <img className='md:h-6 h-4 mt-1 w-5 md:w-6' src={sun} alt='flower' />
                    </div>
                </div> */}
        {/* <p className='mt-8 ml-4 text-2xl'>=</p> */}
        <div className='bg-gray-300 text-center h-32 w-28 rounded-lg'>
          <div className='ml-2 mt-2'>
            <div className='flex'>
              <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={sun1States.first ? sun : sun1}
                alt='flower'
                onClick={() => handlesun1Click('first')}
              />
              <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={sun1States.second ? sun : sun1}
                alt='flower'
                onClick={() => handlesun1Click('second')}
              />   <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={sun1States.third ? sun : sun1}
                alt='flower'
                onClick={() => handlesun1Click('third')}
              />   <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={sun1States.fourth ? sun : sun1}
                alt='flower'
                onClick={() => handlesun1Click('fourth')}
              />
            </div>
            <div className='flex'>
              <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={sun1States.fifth ? sun : sun1}
                alt='flower'
                onClick={() => handlesun1Click('fifth')}
              />  <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={sun1States.sixth ? sun : sun1}
                alt='flower'
                onClick={() => handlesun1Click('sixth')}
              />  <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={sun1States.seventh ? sun : sun1}
                alt='flower'
                onClick={() => handlesun1Click('seventh')}
              />  <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={sun1States.eighth ? sun : sun1}
                alt='flower'
                onClick={() => handlesun1Click('eighth')}
              />                            </div>    <div className='flex'>
              <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={sun1States.ninth ? sun : sun1}
                alt='flower'
                onClick={() => handlesun1Click('ninth')}
              />  <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={sun1States.tenth ? sun : sun1}
                alt='flower'
                onClick={() => handlesun1Click('tenth')}
              />  <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={sun1States.twelfth ? sun : sun1}
                alt='flower'
                onClick={() => handlesun1Click('twelfth')}
              />  <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={sun1States.eleventh ? sun : sun1}
                alt='flower'
                onClick={() => handlesun1Click('eleventh')}
              />                            </div>    <div className='flex'>
              <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={sun1States.thirteenth ? sun : sun1}
                alt='flower'
                onClick={() => handlesun1Click('thirteenth')}
              />  <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={sun1States.fourteenth ? sun : sun1}
                alt='flower'
                onClick={() => handlesun1Click('fourteenth')}
              />  <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={sun1States.fifteenth ? sun : sun1}
                alt='flower'
                onClick={() => handlesun1Click('fifteenth')}
              />  <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={sun1States.sixteenth ? sun : sun1}
                alt='flower'
                onClick={() => handlesun1Click('sixteenth')}
              />                            </div>
          </div>
        </div>

        <p className='mt-8 md:ml-4 text-2xl'>-</p>
        <div className='bg-gray-300 text-center h-32 w-28 rounded-lg'>
          <div className='ml-2 mt-2'>
            <div className='flex'>
              <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={sun1States.seventeenth ? sun : sun1}
                alt='flower'
                onClick={() => handlesun1Click('seventeenth')}
              />
              <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={sun1States.eighteenth ? sun : sun1}
                alt='flower'
                onClick={() => handlesun1Click('eighteenth')}
              />   <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={sun1States.nineteenth ? sun : sun1}
                alt='flower'
                onClick={() => handlesun1Click('nineteenth')}
              />   <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={sun1States.twentieth ? sun : sun1}
                alt='flower'
                onClick={() => handlesun1Click('twentieth')}
              />
            </div>
            <div className='flex'>
              <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={sun1States.twentyFirst ? sun : sun1}
                alt='flower'
                onClick={() => handlesun1Click('twentyFirst')}
              />  <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={sun1States.twentySecond ? sun : sun1}
                alt='flower'
                onClick={() => handlesun1Click('twentySecond')}
              />  <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={sun1States.twentyThird ? sun : sun1}
                alt='flower'
                onClick={() => handlesun1Click('twentyThird')}
              />  <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={sun1States.twentyFourth ? sun : sun1}
                alt='flower'
                onClick={() => handlesun1Click('twentyFourth')}
              />                   
               </div>
                 <div className='flex'>
              <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={sun1States.twentyFifth ? sun : sun1}
                alt='flower'
                onClick={() => handlesun1Click('twentyFifth')}
              />  <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={sun1States.twentySixth ? sun : sun1}
                alt='flower'
                onClick={() => handlesun1Click('twentySixth')}
              />  <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={sun1States.twentySeventh ? sun : sun1}
                alt='flower'
                onClick={() => handlesun1Click('twentySeventh')}
              />  <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={sun1States.twentyEighth ? sun : sun1}
                alt='flower'
                onClick={() => handlesun1Click('twentyEighth')}
              />                        
                  </div> 
                     <div className='flex'>
              <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={sun1States.twentyNinth ? sun : sun1}
                alt='flower'
                onClick={() => handlesun1Click('twentyNinth')}
              />  <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={sun1States.thirtieth ? sun : sun1}
                alt='flower'
                onClick={() => handlesun1Click('thirtieth')}
              />  <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={sun1States.thirtyFirst ? sun : sun1}
                alt='flower'
                onClick={() => handlesun1Click('thirtyFirst')}
              />  <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={sun1States.thirtySecond ? sun : sun1}
                alt='flower'
                onClick={() => handlesun1Click('thirtySecond')}
              />                            </div>
          </div>
        </div>







      </div>
      <div className='flex font-bold md:gap-28 gap-16 ml-6'>
        <div>
          <p className='text-white rounded-full w-6 h-6 text-center bg-blue-600'>2</p>
        </div>
        <div className='flex'>
          <div>-6-6 = </div>
          <input
            type="text"
            id="textInput"
            className="border-gray-400 border-b w-44 "
            value={userInput2}
            onChange={handleInputChange2}
          />
        </div>
      </div>
      <div className='flex md:gap-4  gap-5 font-roboto md:ml-40 mt-8 '>
        <p className='mt-8 ml-4 p-1 text-2xl'>-</p>
        {/* <div className='flex flex-col h-12 md:h-16 mt-5  md:w-32 bg-cyan-400 rounded-md'>
                    <div className='  justify-center flex gap-1'>
                        <img className='md:h-6 h-4 mt-1 w-5 md:w-6' src={butter} alt='flower' />
                        <img className='md:h-6 h-4 mt-1 w-5 md:w-6' src={butter} alt='flower' />
                        <img className='md:h-6 h-4 mt-1 w-5 md:w-6' src={butter} alt='flower' />
                    </div>
                    <div className='flex justify-center gap-1'>
                        <img className='md:h-6 h-4 mt-1 w-5 md:w-' src={butter} alt='flower' />
                        <img className='md:h-6 h-4 mt-1 w-5 md:w-' src={butter} alt='flower' />
                        <img className='md:h-6 h-4 mt-1 w-5 md:w-6' src={butter} alt='flower' />
                    </div>
                </div> */}
        {/* <div className='flex flex-col h-12 md:h-16 mt-5  md:w-32 bg-cyan-400 rounded-md'>
                    <div className='  justify-center flex gap-1'>
                        <img className='md:h-6 h-4 mt-1 w-5 md:w-6' src={butter} alt='flower' />
                        <img className='md:h-6 h-4 mt-1 w-5 md:w-6' src={butter} alt='flower' />
                        <img className='md:h-6 h-4 mt-1 w-5 md:w-6' src={butter} alt='flower' />
                    </div>
                    <div className='flex justify-center gap-1'>
                        <img className='md:h-6 h-4 mt-1 w-5 md:w-6' src={butter} alt='flower' />
                        <img className='md:h-6 h-4 mt-1 w-5 md:w-6' src={butter} alt='flower' />
                        <img className='md:h-6 h-4 mt-1 w-5 md:w-6' src={butter} alt='flower' />
                    </div>
                </div>
                <p className='mt-8 md:ml-4 text-2xl'>=</p> */}
        <div className='bg-gray-300 text-center md:ml-6 h-32 w-28 rounded-lg'>
          <div className='ml-2 mt-2'>
            <div className='flex'>
              <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={flyStates.first ? butter : fly}
                alt='flower'
                onClick={() => handleflyClick('first')}
              /><img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={flyStates.second ? butter : fly}
                alt='flower'
                onClick={() => handleflyClick('second')}
              /><img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={flyStates.third ? butter : fly}
                alt='flower'
                onClick={() => handleflyClick('third')}
              /> <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={flyStates.fourth ? butter : fly}
                alt='flower'
                onClick={() => handleflyClick('fourth')}
              />                           </div>
            <div className='flex'>
              <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={flyStates.fifth ? butter : fly}
                alt='flower'
                onClick={() => handleflyClick('fifth')}
              /> <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={flyStates.sixth ? butter : fly}
                alt='flower'
                onClick={() => handleflyClick('sixth')}
              /> <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={flyStates.seventh ? butter : fly}
                alt='flower'
                onClick={() => handleflyClick('seventh')}
              /> <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={flyStates.eighth ? butter : fly}
                alt='flower'
                onClick={() => handleflyClick('eighth')}
              />                             </div>
            <div className='flex'>
              <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={flyStates.ninth ? butter : fly}
                alt='flower'
                onClick={() => handleflyClick('ninth')}
              /> <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={flyStates.tenth ? butter : fly}
                alt='flower'
                onClick={() => handleflyClick('tenth')}
              /> <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={flyStates.eleventh ? butter : fly}
                alt='flower'
                onClick={() => handleflyClick('eleventh')}
              /> <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={flyStates.twelfth ? butter : fly}
                alt='flower'
                onClick={() => handleflyClick('twelfth')}
              />                             </div>
            <div className='flex'>
              <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={flyStates.thirteenth ? butter : fly}
                alt='flower'
                onClick={() => handleflyClick('thirteenth')}
              /> <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={flyStates.fourteenth ? butter : fly}
                alt='flower'
                onClick={() => handleflyClick('fourteenth')}
              /> <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={flyStates.fifteenth ? butter : fly}
                alt='flower'
                onClick={() => handleflyClick('fifteenth')}
              /> <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={flyStates.sixteenth ? butter : fly}
                alt='flower'
                onClick={() => handleflyClick('sixteenth')}
              />                             </div>
          </div>
        </div>
        <p className='mt-8 p-1 md:ml-4 text-2xl'>-</p>

        <div className='bg-gray-300 text-center md:ml-6 h-32 w-28 rounded-lg'>
          <div className='ml-2 mt-2'>
            <div className='flex'>
              <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={flyStates.seventeenth ? butter : fly}
                alt='flower'
                onClick={() => handleflyClick('seventeenth')}
              /><img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={flyStates.eighteenth ? butter : fly}
                alt='flower'
                onClick={() => handleflyClick('eighteenth')}
              /><img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={flyStates.nineteenth ? butter : fly}
                alt='flower'
                onClick={() => handleflyClick('nineteenth')}
              /> <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={flyStates.twentieth ? butter : fly}
                alt='flower'
                onClick={() => handleflyClick('twentieth')}
              />                           </div>
            <div className='flex'>
              <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={flyStates.twentyFirst ? butter : fly}
                alt='flower'
                onClick={() => handleflyClick('twentyFirst')}
              /> <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={flyStates.twentySecond ? butter : fly}
                alt='flower'
                onClick={() => handleflyClick('twentySecond')}
              /> <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={flyStates.thirtySecond ? butter : fly}
                alt='flower'
                onClick={() => handleflyClick('thirtySecond')}
              /> <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={flyStates.twentyThird ? butter : fly}
                alt='flower'
                onClick={() => handleflyClick('twentyThird')}
              />                             </div>
            <div className='flex'>
              <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={flyStates.twentyFourth ? butter : fly}
                alt='flower'
                onClick={() => handleflyClick('twentyFourth')}
              /> <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={flyStates.twentyFifth ? butter : fly}
                alt='flower'
                onClick={() => handleflyClick('twentyFifth')}
              /> <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={flyStates.twentySixth ? butter : fly}
                alt='flower'
                onClick={() => handleflyClick('twentySixth')}
              /> <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={flyStates.twentySeventh ? butter : fly}
                alt='flower'
                onClick={() => handleflyClick('twentySeventh')}
              />                   
                </div>
            <div className='flex'>
              <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={flyStates.twentyEighth ? butter : fly}
                alt='flower'
                onClick={() => handleflyClick('twentyEighth')}
              /> <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={flyStates.twentyNinth ? butter : fly}
                alt='flower'
                onClick={() => handleflyClick('twentyNinth')}
              /> <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={flyStates.thirtieth ? butter : fly}
                alt='flower'
                onClick={() => handleflyClick('thirtieth')}
              /> <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={flyStates.thirtyFirst ? butter : fly}
                alt='flower'
                onClick={() => handleflyClick('thirtyFirst')}
              />                             </div>
          </div>
        </div>




      </div>
      <div className='flex gap-4  ml-6 mt-7 font-extrabold'>
        <img className='h-9' src={frame} alt='frame' />
        <p >Discover</p>
      </div>
      <div className='text-white font-roboto bg-blue-800  md:w-96  h-68 rounded-xl w-11/12	 p-4 ml-4 md:ml-20 mt-4'>
        <p className='text-white text-center font-bold'>Did you know?</p>
        <p className='text-white'>When multiplying are grouped, they increase in number.</p>
        <p className='font-bold text-white'>E.g:</p>
        <p className='text-white'>-4 - 4 = -8</p>
        <p className='text-white'>-2 - 7  = -9</p>
        <p className='text-white'>-3 - 6  = -9</p>
        <p>If your frined lends you 4 coins.</p>
        <p>They demand you four coins, if they give you other 4 coins, the number of coins you are demanded increase in number.</p>
      </div>
      <div className='flex gap-4  ml-6 mt-7 font-extrabold'>
        <img className='h-9' src={frame} alt='frame' />
        <p >Discover</p>
      </div>
      <div className='text-white font-roboto bg-blue-800  md:w-96  h-68 rounded-xl p-4 w-11/12 md:ml-20 mt-4 ml-4'>
        <p className='text-white text-center font-bold'>Did you know?</p>
        <p className='text-white'>When multiplying same sign result is positive.</p>
        <div className='flex flex-col gap-4'>
          <div>
            <p className='font-bold text-white'>E.g:</p>
            <p className='text-white'>(-) * (-) =  +</p>
            <p className='text-white'>(+) * (+)  = +</p>
          </div>
          <div>
            <p className='text-white'>-2 - (-6)  = -9</p>
            <p className='text-white'>= -2 - 4</p>
            <p>=-2</p>
          </div>
          <div>
            <p>4 - (-4)</p>
            <p>4 + 4 =8 </p>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-6 mt-5 '>
        <div>
          <div className='flex font-bold md:gap-28 gap-16 ml-6'>
            <div>
              <p className='rounded-full w-6 h-6 text-center bg-blue-600 text-white '>3</p>
            </div>
            <div className='flex'>
              <div>-4 -(-3) = </div>
              <input
                type="text"
                id="textInput"
                className="border-gray-400 border-b w-44 "
                value={userInput3}
                onChange={handleInputChange3}
              />
            </div>
          </div>
          <div className='flex gap-3 md:ml-64 ml-48  mt-6'>
            <div
              id="draggableDiv"
              className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
              draggable="true"
              onDragStart={handleDragStart}
            >
              <p className='mt-2'>-1</p>
            </div>   <div
              id="draggableDiv"
              className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
              draggable="true"
              onDragStart={handleDragStart}
            >
              <p className='mt-2'>-7</p>
            </div>   <div
              id="draggableDiv"
              className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
              draggable="true"
              onDragStart={handleDragStart}
            >
              <p className='mt-2'>1</p>
            </div>
          </div>
        </div>
        <div>
          <div className='flex font-bold md:gap-28 gap-16 ml-6'>
            <div>
              <p className='rounded-full w-6 h-6 text-center bg-blue-600 text-white '>4</p>
            </div>
            <div className='flex'>
              <div>3-(-7) = </div>
              <input
                type="text"
                id="textInput"
                className="border-gray-400 border-b w-44 "
                value={userInput4}
                onChange={handleInputChange4}
              />
            </div>
          </div>
          <div className='flex gap-3 md:ml-64 ml-48 mt-6'>
            <div
              id="draggableDiv"
              className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
              draggable="true"
              onDragStart={handleDragStart}
            >
              <p className='mt-2'>10</p>
            </div>   <div
              id="draggableDiv"
              className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
              draggable="true"
              onDragStart={handleDragStart}
            >
              <p className='mt-2'>4</p>
            </div>   <div
              id="draggableDiv"
              className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
              draggable="true"
              onDragStart={handleDragStart}
            >
              <p className='mt-2'>-4</p>
            </div>
          </div>
        </div>
        <div>
          <div className='flex font-bold md:gap-28 gap-16 ml-6'>
            <div>
              <p className='rounded-full w-6 h-6 text-center bg-blue-600 text-white '>5</p>
            </div>
            <div className='flex'>
              <div>-10-(3) = </div>
              <input
                type="text"
                id="textInput"
                className="border-gray-400 border-b w-44 "
                value={userInput5}
                onChange={handleInputChange5}
              />
            </div>
          </div>
          <div className='flex gap-3 md:ml-64 ml-48  mt-6'>
            <div
              id="draggableDiv"
              className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
              draggable="true"
              onDragStart={handleDragStart}
            >
              <p className='mt-2'>-13</p>
            </div>   <div
              id="draggableDiv"
              className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
              draggable="true"
              onDragStart={handleDragStart}
            >
              <p className='mt-2'>13</p>
            </div>   <div
              id="draggableDiv"
              className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
              draggable="true"
              onDragStart={handleDragStart}
            >
              <p className='mt-2'>-7</p>
            </div>
          </div>
        </div>
        <div>
          <div className='flex font-bold md:gap-28 gap-16 ml-6'>
            <div>
              <p className='rounded-full w-6 h-6 text-center bg-blue-600 text-white '>6</p>
            </div>
            <div className='flex'>
              <div>-10-(-13) = </div>
              <input
                type="text"
                id="textInput"
                className="border-gray-400 border-b w-44 "
                value={userInput6}
                onChange={handleInputChange6}
              />
            </div>
          </div>
          <div className='flex gap-3 md:ml-64 ml-48  mt-6'>
            <div
              id="draggableDiv"
              className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
              draggable="true"
              onDragStart={handleDragStart}
            >
              <p className='mt-2'>13</p>
            </div>   <div
              id="draggableDiv"
              className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
              draggable="true"
              onDragStart={handleDragStart}
            >
              <p className='mt-2'>-23</p>
            </div>   <div
              id="draggableDiv"
              className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
              draggable="true"
              onDragStart={handleDragStart}
            >
              <p className='mt-2'>9</p>
            </div>
          </div>
        </div>
      </div>
      <Link to="/Practice"> <div className='flex gap-4 bg-sky-600 rounded-md transform md:translate-x-96 ml-40 md:ml-32 mt-8 p-3 h-10 w-48'>
        <p className='font-bold text-white'>Fly to next wing </p>
        <Icon icon="ri:arrow-right-double-line" color="gray" width="22" />
      </div></Link>

    </div>

  )
}
export default Subtract









