import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";
import './Component.css';

const Homedata = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='heading'>
        Hi, I'm 
        Ravi
        👋
        <br />
        Web Developer At Tech <br /> Amdavad
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Worked with many companies <br /> and picked up many skills along the way
        </p>
        

        <Link to='/about
        ' className='linkarrow'>
          Learn more
          <img src={arrow} alt='arrow' className='imgarrow' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Led multiple projects to success over the years. <br /> Curious about the impact?
        </p>

        <Link to='/project' className='linkarrow'>
          Visit my portfolio
          <img src={arrow} alt='arrow' className='imgarrow' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        Need a project done or looking for a dev? <br/> I'm just a few keystrokes away
      </p>

      <Link to='/contact' className='linkarrow'>
        Let's talk
        <img src={arrow} alt='arrow' className='imgarrow' />
      </Link>
    </div>
    );
  }

  return null;
};

export default Homedata;

