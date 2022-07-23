import React, {useEffect, useState, Children, cloneElement} from "react";
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import './carousel.css'

const PAGE_WIDTH = 1400

const Carousel =({children})=> {
    const [pages, setPages] = useState([])
    const [offset, setOffset] = useState(0)

    const handleLeftArrowClick =()=> {
        setOffset((currentOffset)=> {
            const newOffset = currentOffset + PAGE_WIDTH
            console.log('newOffset')
            return Math.min(newOffset, 0)
        })
    }
    const handleRightArrowClick =()=> {
        setOffset((currentOffset)=> {
            const newOffset = currentOffset - PAGE_WIDTH
            console.log('newOffset')
            const maxOffset = -(PAGE_WIDTH*(pages.length - 1))
            return Math.max(newOffset, maxOffset)
        })
    }

    useEffect(()=> {
        setPages(
            Children.map(children, (child) => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: `${PAGE_WIDTH}px`,
                        maxWidth: `${PAGE_WIDTH}px`,
                    },
                })
            })
        )
    },[])

    return (
        <div className="maincontainer">
            <FaChevronLeft className='arrow arrow-right' onClick={handleLeftArrowClick}/>
            <div className="window">
                <div className="all-pages-container"

                     style={{
                         transform: `translateX(${offset}px)`
                     }}
                >{pages}
                </div>
            </div>
            <FaChevronRight className='arrow arrow-left ' onClick={handleRightArrowClick}/>
        </div>
    )
}

export default Carousel;
