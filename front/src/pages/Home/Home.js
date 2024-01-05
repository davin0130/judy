import React, {useState} from 'react';

import Count from '../../components/Count';
import Skill from '../../components/Skills';

import mainTitle from '../../images/product_manager_text.png';
import '../../style/Home/Home.css';

const Home = () => {
    const [showSomething, setShowSomething] = useState('count');

    const article ={
        count: <Count />,
        skill: <Skill />
    };
    const showChangeHandler = event => {
        setShowSomething(event.target.value)
    };

    return(
    <div className='home'>
         <button onClick={showChangeHandler} value='count'>Experience & Career</button>
         <button onClick={showChangeHandler} value='skill'>Skill</button>
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