import React from 'react';

import imgFigma from '../images/figma.png';
import imgMSO from '../images/msoffice.png';
import imgHancom from '../images/hancom.png';
import imgJava from '../images/java.svg';
import imgPython from '../images/python.png';
import imgMYS from '../images/mysql.png';
import imgReact from '../images/react.png';

const Skills = () => {

    return (
    <div className='skill'>
        <div className='content'>
            <div className='skill-title f-purple-50'>communication</div>
            <div className='image-content'>
                <div className='image'><img src={imgFigma} width={20}/></div>
                <div className='image'><img src={imgMSO} width={20}/></div>
                <div className='image'><img src={imgHancom} width={20}/></div>
            </div>
        </div>
        <div className='content'>
            <div className='skill-title f-purple-50'>plan</div>
            <div className='image-content'>
                <div className='image'><img src={imgFigma} width={20}/></div>
                <div className='image'><img src={imgMSO} width={20}/></div>
                <div className='image'><img src={imgHancom} width={20}/></div>
            </div>
        </div>
        <div className='content'>
            <div className='skill-title f-purple-50'>technology</div>
            <div className='image-content'>
                <div className='image'><img src={imgJava} width={20}/></div>
                <div className='image'><img src={imgPython} width={20}/></div>
                <div className='image'><img src={imgMYS} width={20}/></div>
                <div className='image'><img src={imgReact} width={20}/></div>
            </div>
        </div>
        <div className='content'>
            <div className='skill-title f-purple-50'>design</div>
            <div className='image-content'>
                <div className='image'><img src={imgFigma} width={20}/></div>
                <div className='image'><img src={imgMSO} width={20}/></div>
            </div>
        </div>
    </div>
    )
}

export default Skills;