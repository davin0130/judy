import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Introduce = () => {

    const [intro, setIntro] = useState();
    
    useEffect(() => {
        Axios.get('/intro')
            .then(res => {
                console.log(res.data);
                setIntro(res.data)
            })
        }, [])
    return (<>
        {intro && intro.map((list) => (
            <li key={list.id}>{list.title}</li>
        ))}
    </>
    )
}

export default Introduce;