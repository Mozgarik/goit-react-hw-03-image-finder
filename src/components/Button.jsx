import {React, useRef} from 'react';
import s from './App.module.css'


export function Button({incrementPage}) {
    const scrollingRef = useRef();

    return (
        <button
        onClick={() => {incrementPage(scrollingRef)}} className={s.Button} ref={scrollingRef} type="button">Load More</button>
    )
}

