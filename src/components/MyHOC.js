import {useState} from 'react'

const MyHOC = (OriginalComponent, {name}) => {

        return (
            <div className='wrapper'>
            <OriginalComponent name={name}/>
            </div>
        )

    }

export default MyHOC
