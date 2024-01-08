import React, {useState} from 'react';

import Count from '../../components/Count';
import Skill from '../../components/Skills';

import mainTitle from '../../images/product_manager_text.png';
import '../../style/Home/Home.css';

const Home = () => {
    const [showSomething, setShowSomething] = useState('count');
    const [isHoveringS, setIsHoveringS] = useState(false);
    const [isHoveringC, setIsHoveringC] = useState(false);

    const handleMouseOverS = () => {
      setIsHoveringS(true);
    };
    const handleMouseOutS = () => {
      setIsHoveringS(false);
    };
    const handleMouseOverC = () => {
        setIsHoveringC(true);
      };
      const handleMouseOutC = () => {
        setIsHoveringC(false);
      };

    const article ={
        count: <Count />,
        skill: <Skill />
    };
    const showChangeHandler = event => {
        setShowSomething(event.target.value)
    };

    return(
    <div className='home'>
         <button
            className={isHoveringS ? "show" : ""}
            onMouseOver={handleMouseOverS} 
            onMouseOut={handleMouseOutS}
            onClick={showChangeHandler}
            value='count'
            ><span className={isHoveringS ? "showText" : ""}>Experience & Career</span>
        </button>
        <button
            className={isHoveringC ? "show" : ""}
            onMouseOver={handleMouseOverC} 
            onMouseOut={handleMouseOutC}
            onClick={showChangeHandler} 
            value='skill'><span className={isHoveringC ? "showText" : ""}>Skills</span>
        </button>
         <div className='home-article'>
            {article[showSomething]}
         </div>
         <div className='title'>
             <img src={mainTitle} />
        </div>
    </div>
    )
}

export default Home;