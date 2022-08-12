import React, { useState } from 'react';
import './MovieRow.css';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default ({title, items}) => {
    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if( x > 0) {
            x = 0;
        }
        setScrollX(x);
    }

    const handRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 200;
        if((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x);
    }

    return (
        <div className='movieRow'>
            <h2>{title}</h2>
            <div className='movieRow--left' onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 50}} />
            </div>
            <div className='movieRow--right' onClick={handRightArrow}>
                <NavigateNextIcon style={{fontSize: 50}} />
            </div>

            <div className='movieRow--arealista'>
                <div className='movieRow--lista' style={{
                    marginLeft: scrollX,
                    width: items.results.length * 200
                }}>
                    {items.results.length > 0 && items.results.map((item, key)=>(
                        <div key={key} className='movieRow--item'>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}