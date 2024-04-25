
import 'tailwindcss/base.css';
import logo from './assets/logo.png';
import flower from './assets/flower.png'
import sunflower from './assets/sunflower.png'
import birth from './assets/birthday.png'
import cake from './assets/cake.png'
import frame from './assets/Frame.png'
import plane from './assets/plane.png'
import bus from './assets/bus.png'
import bus2 from './assets/bus2.png'
import face from './assets/face.png'
import monkey from './assets/monkey.png'
import air from './assets/air.png'
import star from './assets/Star 1.png'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import React, { ChangeEvent, useState ,Dispatch, SetStateAction } from 'react';
import './App.css'



const Add: React.FC = () => {
  const [userInput1, setUserInput1] = useState<number>(0);
  const [userInput2, setUserInput2] = useState<number>(0);
  const [userInput3, setUserInput3] = useState<number>(0);
  const [userInput4, setUserInput4] = useState<number>(0);
  const [userInput5, setUserInput5] = useState<number>(0);
  const [userInput6, setUserInput6] = useState("");
  const [userInput7, setUserInput7] = useState("");
  const [userInput8, setUserInput8] = useState("");
  const [userInput9, setUserInput9] = useState("");
  const [userInput10, setUserInput10] = useState("");
  const [userInput11, setUserInput11] = useState("");
  const [userInput12, setUserInput12] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>, setInput: Dispatch<SetStateAction<number>>) => {
    setInput(Number(event.target.value)); 
  };

  const handleInputChange1 = (event: ChangeEvent<HTMLInputElement>) => {
    handleInputChange(event, setUserInput1);
  };
  
  const handleInputChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    handleInputChange(event, setUserInput2);
  };
 const handleInputChange3 = (event: ChangeEvent<HTMLInputElement>) => {
  handleInputChange(event, setUserInput3);
};

const handleInputChange4 = (event: ChangeEvent<HTMLInputElement>) => {
  handleInputChange(event, setUserInput4);
}; 
const handleInputChange5 = (event: ChangeEvent<HTMLInputElement>) => {
  handleInputChange(event, setUserInput5);
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
  const handleInputChange11 = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInput11(event.target.value);
  };
  const handleInputChange12 = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInput12(event.target.value);
  };

  const handleSunflowerClick = (sunflowerId: string) => {
    setSunflowerStates((prevStates) => {
      const currentClickedState = prevStates[sunflowerId];
      const newClickedState = !currentClickedState;
      const increment = newClickedState ? 1 : -1; 
      setUserInput1((prevInput) => prevInput + increment);
      return {
        ...prevStates,
        [sunflowerId]: newClickedState 
      };
    });
  };
  
  const handlebirthClick = (birthId: string) => {
    setbirthStates((prevStates) => {
      const currentClickedState = prevStates[birthId];
      const newClickedState = !currentClickedState;
      const increment = newClickedState ? 1 : -1; 
      setUserInput2((prevInput) => prevInput + increment);
      return {
        ...prevStates,
        [birthId]: newClickedState 
      };
    });
  };
  
  
  const handleairClick = (airId: string) => {
    setairStates((prevStates) => {
      const currentClickedState = prevStates[airId];
      const newClickedState = !currentClickedState;
      const increment = newClickedState ? 1 : -1; // Increment if clicked, decrement if unclicked
      setUserInput3((prevInput) => prevInput + increment);
      return {
        ...prevStates,
        [airId]: newClickedState // Update the clicked state
      };
    });
  };
  const handlebus2Click = (bus2Id: string) => {
    setbus2States((prevStates) => {
      const currentClickedState = prevStates[bus2Id];
      const newClickedState = !currentClickedState;
      const increment = newClickedState ? 1 : -1; // Increment if clicked, decrement if unclicked
      setUserInput4((prevInput) => prevInput + increment);
      return {
        ...prevStates,
        [bus2Id]: newClickedState // Update the clicked state
      };
    });
  };
  const handlemonkeyClick = (monkeyId: string) => {
    setmonkeyStates((prevStates) => {
      const currentClickedState = prevStates[monkeyId];
      const newClickedState = !currentClickedState;
      const increment = newClickedState ? 1 : -1;
      setUserInput5((prevInput) => prevInput + increment);
      return {
        ...prevStates,
        [monkeyId]: newClickedState
      };
    });
  };
  
  interface State {
    [key: string]: boolean;
    first: boolean;
    second: boolean;
    third: boolean;
    fourth: boolean;
    fifth: boolean;
    sixth: boolean;
    seventh: boolean;
    eighth: boolean;
    ninth: boolean;
    tenth: boolean;
    eleventh: boolean;
    twelfth: boolean;
    thirteenth: boolean;
    fourteenth: boolean;
    fifteenth: boolean;
    sixteenth: boolean;
}
const [sunflowerStates, setSunflowerStates] = useState<State>({
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
  sixteenth: false
});

  const [birthStates, setbirthStates] = useState<State>({
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
    sixteenth: false
  });

  const [airStates, setairStates] = useState<State>({
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
    sixteenth: false
  });
  const [bus2States, setbus2States] = useState<State>({
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
    sixteenth: false
  });
  const [monkeyStates, setmonkeyStates] = useState<State>({
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
    sixteenth: false
  });
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
    <div className='overflow-x-hidden  '>
      <div className='flex items-center space-x-4 md:gap-48 gap-10 cursor-pointer font-bold mt-2 '>
        <div className='flex'>
          <Link to={'/'}> < img className='md:w-9' src={logo} alt='logo' /></Link>
          <Link to={'/'}>  <p className='text-sky-700 font-roboto'>Nexus</p></Link>  </div>
        <div className='flex gap-10 '>
          <Icon icon="material-symbols:search" width="25" />
          <div className='border-cyan-600 border-l h-6 border-2'></div>
          <p className='font-roboto' >Search</p>
        </div>
       <div className={`min-h-full ${open() ? 'visible' : 'invisible'} md:visible invisible`}>

          <div className='flex gap-12 '>
            <Link to={'/'}> <div className='text-slate-500'>Home</div></Link>
            <div className='font-roboto'>Courses</div>
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
          <p className='text-sky-800 font-bold text-lg ml-32 '>Addition wing</p>
        </div>
      </div>
      <p className='font-roboto font-semibold p-4 md:ml-28'>Calculate and show the results of the following questions:</p>
      <div className='flex font-bold md:gap-28 gap-16 ml-6'>
        <div>
          <p className='text-white rounded-full w-6 h-6 text-center bg-blue-600'>1</p>
        </div>
        <div className='flex'>
          <div >3+3 = </div>
          <input
            type="text"
            id="textInput"
            className="border-gray-400 border-b w-44 "
            value={userInput1}
            onChange={handleInputChange1}

          />
        </div>
      </div>
      <div className='flex font-roboto md:ml-40 ml-10 mt-5 '>
        <div className='flex flex-col h-24  w-9 bg-cyan-400 rounded-md'>
          <div className='ml-1'>
            <img className='h-6 mt-1 w-6' src={flower} alt='flower' />
            <img className='h-6 mt-1 w-6' src={flower} alt='flower' />
            <img className='h-6 mt-1 w-6' src={flower} alt='flower' />

          </div>
        </div>
        <p className='mt-8 ml-4 text-2xl'>+</p>
        <div className='flex flex-col h-24  w-9 bg-cyan-400 rounded-md ml-4'>
          <div className='ml-1'>
            <img className='h-6 mt-1 w-6' src={flower} alt='flower' />
            <img className='h-6 mt-1 w-6' src={flower} alt='flower' />
            <img className='h-6 mt-1 w-6' src={flower} alt='flower' />
          </div>
        </div>
        <p className='mt-8 ml-4 text-2xl'>=</p>
        <div className='bg-gray-300 md:w-28 text-center ml-6 h-32 w-32 rounded-lg'>
          <div className='ml-2 mt-2'>
            <div className='flex'>
              <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={sunflowerStates.first ? flower : sunflower}
                alt='flower'
                onClick={() => handleSunflowerClick('first')}
              />

              <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={sunflowerStates.second ? flower : sunflower}
                alt='flower'
                onClick={() => handleSunflowerClick('second')}
              />
              <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={sunflowerStates.third ? flower : sunflower}
                alt='flower'
                onClick={() => handleSunflowerClick('third')}
              />
              <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={sunflowerStates.fourth ? flower : sunflower}
                alt='flower'
                onClick={() => handleSunflowerClick('fourth')}
              />
            </div>
            <div className='flex'>
              <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={sunflowerStates.fifth ? flower : sunflower}
                alt='flower'
                onClick={() => handleSunflowerClick('fifth')}
              />
              <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={sunflowerStates.sixth ? flower : sunflower}
                alt='flower'
                onClick={() => handleSunflowerClick('sixth')}
              />
              <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={sunflowerStates.seventh ? flower : sunflower}
                alt='flower'
                onClick={() => handleSunflowerClick('seventh')}
              />
              <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={sunflowerStates.eighth ? flower : sunflower}
                alt='flower'
                onClick={() => handleSunflowerClick('eighth')}
              />
            </div>
            <div className='flex'>
              <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={sunflowerStates.ninth ? flower : sunflower}
                alt='flower'
                onClick={() => handleSunflowerClick('ninth')}
              />
              <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={sunflowerStates.tenth ? flower : sunflower}
                alt='flower'
                onClick={() => handleSunflowerClick('tenth')}
              />
              <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={sunflowerStates.eleventh ? flower : sunflower}
                alt='flower'
                onClick={() => handleSunflowerClick('eleventh')}
              />
              <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={sunflowerStates.twelfth ? flower : sunflower}
                alt='flower'
                onClick={() => handleSunflowerClick('twelfth')}
              />
            </div>
            <div className='flex'>
              <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={sunflowerStates.thirteenth ? flower : sunflower}
                alt='flower'
                onClick={() => handleSunflowerClick('thirteenth')}
              />
              <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={sunflowerStates.fourteenth ? flower : sunflower}
                alt='flower'
                onClick={() => handleSunflowerClick('fourteenth')}
              />

              <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={sunflowerStates.fifteenth ? flower : sunflower}
                alt='flower'
                onClick={() => handleSunflowerClick('fifteenth')}
              />

              <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={sunflowerStates.fifteenth ? flower : sunflower}
                alt='flower'
                onClick={() => handleSunflowerClick('fifteenth')}
              />

            </div>
          </div>
        </div>
      </div>

      <div className='flex font-bold gap-16 md:gap-28 ml-6'>
        <div>
          <p className='text-white  rounded-full w-6 h-6 text-center bg-blue-600'>2</p>
        </div>
        <div className='flex'>
          <div>5+4 = </div>
          <input
            type="text"
            id="textInput"
            className="border-gray-400 border-b w-44 "
            value={userInput2}
            onChange={handleInputChange2}
          />
        </div>
      </div>
      <div className='flex font-roboto md:ml-40 ml-3 mt-5 '>
        <div className='flex flex-col h-24  w-9 bg-cyan-400 rounded-md'>
          <div className='flex flex-col h-24  w-20 bg-cyan-400 rounded-md'>
            <div className='ml-3 flex gap-1'>
              <img className='h-6 mt-1 w-6' src={cake} alt='flower' />
              <img className='h-6 mt-1 w-6' src={cake} alt='flower' /></div>
            <div className='flex ml-3  gap-1'>
              <img className='h-6 mt-1 w-6' src={cake} alt='flower' />
              <img className='h-6 mt-1 w-6' src={cake} alt='flower' /></div>
            <img className='ml-6 h-6 mt-1 w-6' src={cake} alt='flower' />

          </div>
        </div>
        <p className='mt-8 ml-16 text-2xl'>+</p>
        <div className='flex flex-col h-20  w-16  bg-cyan-400 rounded-md ml-4 mt-3'>
          <div className='ml-1 flex gap-2 mt-2'>
            <img className='h-6 mt-1 w-6' src={cake} alt='flower' />
            <img className='h-6 mt-1 w-6' src={cake} alt='flower' /></div>
          <div className='ml-1 flex gap-2'>
            <img className='h-6 mt-1 w-6' src={cake} alt='flower' />
            <img className='h-6 mt-1 w-6' src={cake} alt='flower' /></div>
        </div>
        <p className='mt-8 ml-4 text-2xl'>=</p>
        <div className='bg-gray-300 text-center ml-6 h-32 w-28 rounded-lg'>
          <div className='ml-2 mt-2'>
            <div className='flex'>
              <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={birthStates.first ? cake : birth}
                alt='cake'
                onClick={() => handlebirthClick('first')}
              />
              <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={birthStates.second ? cake : birth}
                alt='cake'
                onClick={() => handlebirthClick('second')}
              />
              <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={birthStates.third ? cake : birth}
                alt='cake'
                onClick={() => handlebirthClick('third')}
              /><img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={birthStates.fourth ? cake : birth}
                alt='cake'
                onClick={() => handlebirthClick('fourth')}
              /></div>
            <div className='flex'>
              <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={birthStates.fifth ? cake : birth}
                alt='cake'
                onClick={() => handlebirthClick('fifth')}
              />
              <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={birthStates.sixth ? cake : birth}
                alt='cake'
                onClick={() => handlebirthClick('sixth')}
              />
              <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={birthStates.seventh ? cake : birth}
                alt='cake'
                onClick={() => handlebirthClick('seventh')}
              />
              <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={birthStates.eighth ? cake : birth}
                alt='cake'
                onClick={() => handlebirthClick('eighth')}
              />
            </div>
            <div className='flex'>
              <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={birthStates.ninth ? cake : birth}
                alt='cake'
                onClick={() => handlebirthClick('ninth')}
              /><img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={birthStates.tenth ? cake : birth}
                alt='cake'
                onClick={() => handlebirthClick('tenth')}
              /><img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={birthStates.eleventh ? cake : birth}
                alt='cake'
                onClick={() => handlebirthClick('eleventh')}
              /><img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={birthStates.twelfth ? cake : birth}
                alt='cake'
                onClick={() => handlebirthClick('twelfth')}
              /></div>    <div className='flex'>
              <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={birthStates.thirteenth ? cake : birth}
                alt='cake'
                onClick={() => handlebirthClick('thirteenth')}
              /><img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={birthStates.fourteenth ? cake : birth}
                alt='cake'
                onClick={() => handlebirthClick('fourteenth')}
              /><img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={birthStates.fifteenth ? cake : birth}
                alt='cake'
                onClick={() => handlebirthClick('fifteenth')}
              /><img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={birthStates.sixteenth ? cake : birth}
                alt='cake'
                onClick={() => handlebirthClick('sixteenth')}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='flex gap-4  ml-6 mt-7 font-roboto font-extrabold'>
        <img className='h-9' src={frame} alt='frame' />
        <p>Discover</p>
      </div>
      <div className='text-white font-roboto bg-blue-700 h-28 md:w-96 rounded-xl p-3 md:ml-20 w-11/12	ml-4  mt-4'>
        <p>Did you know?</p>
        <p>Numbers without ( - ) or ( + ) are all positive.</p>
        <p>+4 = 4</p>
        <p>+8 = 8</p>
      </div>

      <div className='mt-9'>
        <div className='flex font-bold md:gap-28 gap-16 ml-6'>
          <div>
            <p className='rounded-full w-6 h-6 text-center bg-blue-600 text-white '>3</p>
          </div>
          <div className='flex'>
            <div>-4+8 = </div>
            <input
              type="text"
              id="textInput"
              className="border-gray-400 border-b w-44 "
              value={userInput3}
              onChange={handleInputChange3}
            />
          </div>
        </div>
        <div className='flex font-roboto md:ml-40 ml-5 mt-5 '>
          <div className='flex flex-col h-20  w-16  bg-cyan-400 rounded-md'>
            <div className='ml-1 flex gap-2 mt-2'>
              <img className='h-6 mt-1 w-6' src={plane} alt='flower' />
              <img className='h-6 mt-1 w-6' src={plane} alt='flower' /></div>
            <div className='ml-1 flex gap-2'>
              <img className='h-6 mt-1 w-6' src={plane} alt='flower' />
              <img className='h-6 mt-1 w-6' src={plane} alt='flower' /></div>
          </div>
          <p className='mt-8 ml-4 text-2xl'>+</p>
          <div className='flex flex-col  w-16 bg-cyan-400 rounded-md ml-4'>
            <div className='flex gap-1'>
              <div className='ml-1'>
                <img className='h-6 mt-1 w-6' src={plane} alt='flower' />
                <img className='h-6 mt-1 w-6' src={plane} alt='flower' />
                <img className='h-6 mt-1 w-6' src={plane} alt='flower' />
                <img className='h-6 mt-1 w-6' src={plane} alt='flower' /></div>
              <div className='ml-1'>
                <img className='h-6 mt-1 w-6' src={plane} alt='flower' />
                <img className='h-6 mt-1 w-6' src={plane} alt='flower' />
                <img className='h-6 mt-1 w-6' src={plane} alt='flower' />
                <img className='h-6 mt-1 w-6' src={plane} alt='flower' /></div>
            </div>
          </div>
          <p className='mt-8 ml-4 text-2xl'>=</p>
          <div className='bg-gray-300 text-center ml-6 h-32 w-30 rounded-lg'>
            <div className='p-1 mt-1'>
              <div className='flex gap-1'>
                <img
                  className='h-6 mt-1 w-6 cursor-pointer'
                  src={airStates.first ? plane : air}
                  alt='plane'
                  onClick={() => handleairClick('first')}
                />
                <img
                  className='h-6 mt-1 w-6 cursor-pointer'
                  src={airStates.second ? plane : air}
                  alt='plane'
                  onClick={() => handleairClick('second')}
                />
                <img
                  className='h-6 mt-1 w-6 cursor-pointer'
                  src={airStates.third ? plane : air}
                  alt='plane'
                  onClick={() => handleairClick('third')}
                />
                <img
                  className='h-6 mt-1 w-6 cursor-pointer'
                  src={airStates.fourth ? plane : air}
                  alt='plane'
                  onClick={() => handleairClick('fourth')}
                /></div>
              <div className='flex gap-1'>
                <img
                  className='h-6 mt-1 w-6 cursor-pointer'
                  src={airStates.fifth ? plane : air}
                  alt='plane'
                  onClick={() => handleairClick('fifth')}
                />    <img
                  className='h-6 mt-1 w-6 cursor-pointer'
                  src={airStates.sixth ? plane : air}
                  alt='plane'
                  onClick={() => handleairClick('sixth')}
                />    <img
                  className='h-6 mt-1 w-6 cursor-pointer'
                  src={airStates.seventh ? plane : air}
                  alt='plane'
                  onClick={() => handleairClick('seventh')}
                />    <img
                  className='h-6 mt-1 w-6 cursor-pointer'
                  src={airStates.eighth ? plane : air}
                  alt='plane'
                  onClick={() => handleairClick('eighth')}
                /></div>    <div className='flex gap-1'>
                <img
                  className='h-6 mt-1 w-6 cursor-pointer'
                  src={airStates.ninth ? plane : air}
                  alt='plane'
                  onClick={() => handleairClick('ninth')}
                />    <img
                  className='h-6 mt-1 w-6 cursor-pointer'
                  src={airStates.tenth ? plane : air}
                  alt='plane'
                  onClick={() => handleairClick('tenth')}
                />    <img
                  className='h-6 mt-1 w-6 cursor-pointer'
                  src={airStates.eleventh ? plane : air}
                  alt='plane'
                  onClick={() => handleairClick('eleventh')}
                />    <img
                  className='h-6 mt-1 w-6 cursor-pointer'
                  src={airStates.twelfth ? plane : air}
                  alt='plane'
                  onClick={() => handleairClick('twelfth')}
                /></div>    <div className='flex gap-1'>
                <img
                  className='h-6 mt-1 w-6 cursor-pointer'
                  src={airStates.thirteenth ? plane : air}
                  alt='plane'
                  onClick={() => handleairClick('thirteenth')}
                />  <img
                  className='h-6 mt-1 w-6 cursor-pointer'
                  src={airStates.fourteenth ? plane : air}
                  alt='plane'
                  onClick={() => handleairClick('fourteenth')}
                />  <img
                  className='h-6 mt-1 w-6 cursor-pointer'
                  src={airStates.fifteenth ? plane : air}
                  alt='plane'
                  onClick={() => handleairClick('fifteenth')}
                />  <img
                  className='h-6 mt-1 w-6 cursor-pointer'
                  src={airStates.sixteenth ? plane : air}
                  alt='plane'
                  onClick={() => handleairClick('sixteenth')}
                /></div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-9'>
        <div className='flex font-bold md:gap-28 gap-16 ml-6'>
          <div>
            <p className='rounded-full  w-6 h-6 text-center bg-blue-600 text-white '>4</p>
          </div>
          <div className='flex'>
            <div>-5+6 = </div>
            <input
              type="text"
              id="textInput"
              className="border-gray-400 border-b w-44 "
              value={userInput4}
              onChange={handleInputChange4}
            />
          </div>
        </div>
        <div className='flex font-roboto md:ml-40 p-1 mt-5 '>
          <div className='flex flex-col h-24  w-20 bg-cyan-400 rounded-md'>
            <div className='ml-3 flex gap-1'>
              <img className='h-6 mt-1 w-6' src={bus} alt='flower' />
              <img className='h-6 mt-1 w-6' src={bus} alt='flower' /></div>
            <div className='flex ml-3  gap-1'>
              <img className='h-6 mt-1 w-6' src={bus} alt='flower' />
              <img className='h-6 mt-1 w-6' src={bus} alt='flower' /></div>
            <img className='ml-6 h-6 mt-1 w-6' src={bus} alt='flower' />

          </div>
          <p className='mt-8 ml-4 text-2xl'>+</p>
          <div className='flex flex-col h-24  w-20 bg-cyan-400 rounded-md ml-4'>
            <div className='ml-1 flex mt-4'>
              <img className='h-6 mt-1 w-6' src={bus} alt='flower' />
              <img className='h-6 mt-1 w-6' src={bus} alt='flower' />
              <img className='h-6 mt-1 w-6' src={bus} alt='flower' /></div>
            <div className='ml-1 flex'>
              <img className='h-6 mt-1 w-6' src={bus} alt='flower' />
              <img className='h-6 mt-1 w-6' src={bus} alt='flower' />
              <img className='h-6 mt-1 w-6' src={bus} alt='flower' /></div>
          </div>
          <p className='mt-8 ml-4 text-2xl'>=</p>
          <div className='bg-gray-300 text-center ml-6 h-32 w-28 rounded-lg'>
            <div className='ml-2 mt-2'>
              <div className='flex'>
              <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={bus2States.first ? bus : bus2}
                alt='bus2'
                onClick={() => handlebus2Click('first')}
              /> 
                <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={bus2States.second ? bus : bus2}
                alt='bus2'
                onClick={() => handlebus2Click('second')}
              /> 
                 <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={bus2States.third ? bus : bus2}
                alt='bus2'
                onClick={() => handlebus2Click('third')}
              /> 
                <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={bus2States.fourth ? bus : bus2}
                alt='bus2'
                onClick={() => handlebus2Click('fourth')}
              />              </div>
              <div className='flex'>
    <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={bus2States.fifth ? bus : bus2}
                alt='bus2'
                onClick={() => handlebus2Click('fifth')}
              />     <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={bus2States.sixth ? bus : bus2}
                alt='bus2'
                onClick={() => handlebus2Click('sixth')}
              />     <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={bus2States.seventh ? bus : bus2}
                alt='bus2'
                onClick={() => handlebus2Click('seventh')}
              />     <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={bus2States.eighth ? bus : bus2}
                alt='bus2'
                onClick={() => handlebus2Click('eighth')}
              />                 </div>    
                <div className='flex'>
    <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={bus2States.ninth ? bus : bus2}
                alt='bus2'
                onClick={() => handlebus2Click('ninth')}
              />     <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={bus2States.tenth ? bus : bus2}
                alt='bus2'
                onClick={() => handlebus2Click('tenth')}
              />     <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={bus2States.eleventh ? bus : bus2}
                alt='bus2'
                onClick={() => handlebus2Click('eleventh')}
              />     <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={bus2States.twelfth ? bus : bus2}
                alt='bus2'
                onClick={() => handlebus2Click('twelfth')}
              />                 </div>  
                  <div className='flex'>
   <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={bus2States.thirteenth ? bus : bus2}
                alt='bus2'
                onClick={() => handlebus2Click('thirteenth')}
              />                <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={bus2States.fourteenth ? bus : bus2}
                alt='bus2'
                onClick={() => handlebus2Click('fourteenth')}
              />                <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={bus2States.fifteenth ? bus : bus2}
                alt='bus2'
                onClick={() => handlebus2Click('fifteenth')}
              />                <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={bus2States.sixteenth ? bus : bus2}
                alt='bus2'
                onClick={() => handlebus2Click('sixteenth')}
              />                             </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-9'>
        <div className='flex font-bold md:gap-28 gap-16 ml-6'>
          <div>
            <p className='rounded-full w-6 h-6 text-center bg-blue-600 text-white '>5</p>
          </div>
          <div className='flex'>
            <div>-8+5 = </div>
            <input
              type="text"
              id="textInput"
              className="border-gray-400 border-b w-44 "
              value={userInput5}
              onChange={handleInputChange5}
            />
          </div>
        </div>
        <div className='flex font-roboto md:ml-40 mt-8 p-2'>
          <div className='flex flex-col md:h-16 mt-5 h-12 md:w-32 bg-cyan-400 rounded-md'>
            <div className='md:ml-3 flex gap-1'>
              <img className='md:h-6 h-4 mt-1 w-5 md:w-6' src={face} alt='flower' />
              <img className='md:h-6 h-4 mt-1 w-5 md:w-6' src={face} alt='flower' />
              <img className='md:h-6 h-4 mt-1 w-5 md:w-6' src={face} alt='flower' />
              <img className='md:h-6 h-4 mt-1 w-5 md:w-6' src={face} alt='flower' />
            </div>
            <div className='flex ml-3  gap-1'>
              <img className='md:h-6 h-4 mt-1 w-5 md:w-6' src={face} alt='flower' />
              <img className='md:h-6 h-4 mt-1 w-5 md:w-6' src={face} alt='flower' />
              <img className='md:h-6 h-4 mt-1 w-5 md:w-6' src={face} alt='flower' />
              <img className='md:h-6 h-4 mt-1 w-5 md:w-6' src={face} alt='flower' />
            </div>
          </div>
          <p className='mt-8 ml-4 text-2xl'>+</p>
          <div className='flex flex-col md:h-24 h-16  md:w-20 bg-cyan-400 ml-5 rounded-md'>
            <div className='md:ml-3 flex gap-1'>
              <img className='md:h-6 h-4 mt-1 w-5 md:w-6' src={face} alt='flower' />
              <img className='md:h-6 h-4 mt-1 w-5 md:w-6' src={face} alt='flower' /></div>
            <div className='flex md:ml-3  gap-1'>
              <img className='md:h-6 h-4 mt-1 w-5 md:w-6' src={face} alt='flower' />
              <img className='md:h-6 h-4 mt-1 w-5 md:w-6' src={face} alt='flower' /></div>
            <img className='md:h-6 h-4 mt-1 w-5 md:ml-6 ml-3 md:w-6' src={face} alt='flower' />

          </div>
          <p className='mt-8 ml-4 text-2xl'>=</p>
          <div className='bg-gray-300 text-center ml-6 h-32 w-28 rounded-lg'>
            <div className='ml-2 mt-2'>
              <div className='flex'>
            <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={monkeyStates.first ? face : monkey}
                alt='bus2'
                onClick={() => handlemonkeyClick('first')}
              />         
             <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={monkeyStates.second ? face : monkey}
                alt='bus2'
                onClick={() => handlemonkeyClick('second')}
              />  
                 <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={monkeyStates.third ? face : monkey}
                alt='bus2'
                onClick={() => handlemonkeyClick('third')}
              />  
                <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={monkeyStates.fourth ? face : monkey}
                alt='bus2'
                onClick={() => handlemonkeyClick('fourth')}
              />    
               </div>
              <div className='flex'>
<img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={monkeyStates.fifth ? face : monkey}
                alt='bus2'
                onClick={() => handlemonkeyClick('fifth')}
              />  <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={monkeyStates.sixth ? face : monkey}
                alt='bus2'
                onClick={() => handlemonkeyClick('sixth')}
              />  <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={monkeyStates.seventh ? face : monkey}
                alt='bus2'
                onClick={() => handlemonkeyClick('seventh')}
              />  <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={monkeyStates.eighth ? face : monkey}
                alt='bus2'
                onClick={() => handlemonkeyClick('eighth')}
              />                  </div>   
                 <div className='flex'>
<img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={monkeyStates.ninth ? face : monkey}
                alt='bus2'
                onClick={() => handlemonkeyClick('ninth')}
              />  <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={monkeyStates.tenth ? face : monkey}
                alt='bus2'
                onClick={() => handlemonkeyClick('tenth')}
              />  <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={monkeyStates.eleventh ? face : monkey}
                alt='bus2'
                onClick={() => handlemonkeyClick('eleventh')}
              />  <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={monkeyStates.twelfth ? face : monkey}
                alt='bus2'
                onClick={() => handlemonkeyClick('twelfth')}
              />                  </div>    
                <div className='flex'>
<img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={monkeyStates.thirteenth ? face : monkey}
                alt='bus2'
                onClick={() => handlemonkeyClick('thirteenth')}
              />  <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={monkeyStates.fourteenth ? face : monkey}
                alt='bus2'
                onClick={() => handlemonkeyClick('fourteenth')}
              />  <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={monkeyStates.fifteenth ? face : monkey}
                alt='bus2'
                onClick={() => handlemonkeyClick('fifteenth')}
              />  <img
                className='h-6 mt-1 w-6 cursor-pointer'
                src={monkeyStates.sixteenth ? face : monkey}
                alt='bus2'
                onClick={() => handlemonkeyClick('sixteenth')}
              />                  </div>
            </div>
          </div>
        </div>
      </div>



      <div className='flex flex-col gap-6 mt-5 '>
        <div>
          <div className='flex font-bold md:gap-28 gap-16 ml-6'>
            <div>
              <p className='rounded-full w-6 h-6 text-center bg-blue-600 text-white '>6</p>
            </div>
            <div className='flex'>
              <div>-3+7 = </div>
              <input
                type="text"
                id="textInput"
                className="border-gray-400 border-b w-44 "
                value={userInput6}
                onChange={handleInputChange6}
              />
            </div>
          </div>
          <div className='flex gap-3 md:ml-64 ml-48   mt-6'>
          <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>9</p>
      </div>
      <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>4</p>
      </div>           
      <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>-4</p>
      </div>          
      <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>-10</p>
      </div>        
        </div>
        </div>
        <div>
          <div className='flex font-bold md:gap-28 gap-16 ml-6'>
            <div>
              <p className='rounded-full w-6 h-6 text-center bg-blue-600 text-white '>7</p>
            </div>
            <div className='flex'>
              <div>-4+5 = </div>
              <input
                type="text"
                id="textInput"
                className="border-gray-400 border-b w-44 "
                value={userInput7}
                onChange={handleInputChange7}
              />      </div>
          </div>
          <div className='flex gap-3 md:ml-64 ml-48  mt-6'>
 <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>9</p>
      </div> <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>1</p>
      </div> <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>-1</p>
      </div> <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>8</p>
      </div>          </div>
        </div>
        <div>
          <div className='flex font-bold md:gap-28 gap-16 ml-6'>
            <div>
              <p className='rounded-full w-6 h-6 text-center bg-blue-600 text-white '>8</p>
            </div>
            <div className='flex'>
              <div>-19+10 = </div>
              <input
                type="text"
                id="textInput"
                className="border-gray-400 border-b w-44 "
                value={userInput8}
                onChange={handleInputChange8}
              />      </div>
          </div>
          <div className='flex gap-3 md:ml-64 ml-48  mt-6'>
 <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>-20</p>
      </div> <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>-10</p>
      </div> <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>7</p>
      </div> <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>8</p>
      </div>          </div>
        </div>
        <div>
          <div className='flex font-bold md:gap-28 gap-16 ml-6'>
            <div>
              <p className='rounded-xl w-6 h-6 text-center bg-blue-600 text-white '>9</p>
            </div>
            <div className='flex'>
              <div>-12+9 = </div>
              <input
                type="text"
                id="textInput"
                className="border-gray-400 border-b w-44 "
                value={userInput9}
                onChange={handleInputChange9}
              />      </div>
          </div>
          <div className='flex gap-3 md:ml-64 ml-48  mt-6'>
 <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>5</p>
      </div> <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>2</p>
      </div> <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>-4</p>
      </div> <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>-3</p>
      </div>          </div>
        </div>
      </div>
      <div className='flex gap-4  ml-6 mt-7 font-extrabold'>
        <img className='h-9' src={frame} alt='frame' />
        <p >Discover</p>
      </div>
      <div className='text-white font-roboto bg-blue-700 w-11/12	ml-4 md:w-96 rounded-xl p-4 md:ml-20 mt-4'>
        <p className='text-white text-center font-bold'>Did you know?</p>
        <p className='text-white'>When multiplying sign they result into negative.</p>
        <p className='font-bold text-white'>E.g:</p>
        <p className='text-white'>- * + = -</p>
        <p className='text-white'>- (+) =-</p>
        <p className='text-white'>+ (-) = -</p>
        <p className='text-white'>+ * + = +</p>
        <p className='text-white'>+ (+) = +</p>
        <p className='text-white'>-2+ (-2)</p>
        <p className='text-white'>= -2-2</p>
        <p className='text-white'>= -4</p>
      </div>
      <div className='flex gap-6 mt-10 ml-7'>
        <img className='h-10 ' src={star} alt='star' />
        <p className='font-roboto font-bold'>Brackets stand for multiplication</p>
      </div>
      <div className='flex flex-col gap-5 mt-9'>
        <div>
          <div className='flex font-bold md:gap-28 gap-16 ml-6'>
            <div>
              <p className='rounded-full w-6 h-6 text-center bg-blue-600 text-white '>9</p>
            </div>
            <div className='flex'>
              <div>-1+(-1) = </div>
              <input
                type="text"
                id="textInput"
                className="border-gray-400 border-b w-44 "
                value={userInput10}
                onChange={handleInputChange10}
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
        <p className='mt-2'>1</p>
      </div> <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>-2</p>
      </div> <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>-1</p>
      </div> <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>2</p>
      </div>    
         </div>
        </div>
        <div>
          <div className='flex font-bold md:gap-28 gap-16 ml-6'>
            <div>
              <p className='rounded-full w-6 h-6 text-center bg-blue-600 text-white '>9</p>
            </div>
            <div className='flex'>
              <div>10-(10)= </div>
              <input
                type="text"
                id="textInput"
                className="border-gray-400 border-b w-44 "
                value={userInput11}
                onChange={handleInputChange11}
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
        <p className='mt-2'>-10</p>
      </div> <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>0</p>
      </div> <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>20</p>
      </div> <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>10</p>
      </div>          </div>
        </div>
        <div>
          <div className='flex font-bold md:gap-28 gap-16 ml-6'>
            <div>
              <p className='rounded-full w-6 h-6 text-center bg-blue-600 text-white '>9</p>
            </div>
            <div className='flex'>
              <div>6+(-7) = </div>
              <input
                type="text"
                id="textInput"
                className="border-gray-400 border-b w-44 "
                value={userInput12}
                onChange={handleInputChange12}
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
        <p className='mt-2'>2</p>
      </div> <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>12</p>
      </div> <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>-2</p>
      </div> <div
        id="draggableDiv"
        className='bg-sky-300 h-8 w-8 rounded-sm font-bold font-roboto text-white text-center'
        draggable="true"
        onDragStart={handleDragStart}
      >
        <p className='mt-2'>-12</p>
      </div>          </div>
        </div>
      </div>


      <Link to="/Subtract">  <div className='flex gap-4 bg-sky-500 rounded-md transform md:translate-x-96 ml-40 md:ml-32 mt-8 p-3 h-10 w-48'>
        <p className='font-bold text-white'>Fly to next wing </p>
        <Icon icon="ri:arrow-right-double-line" color="gray" width="22" />
      </div></Link>
    </div>
  )
}

export default Add;
