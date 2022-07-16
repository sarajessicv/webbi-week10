import {useState} from 'react'

const MyHOC = (OriginalComponent, {name}) => {
    const NewComponent = (props) => {
        const [wrap, setWrap] = useState(false)

        const addWrap = () => {
            setWrap(true)
        }

        return (
            <div className='wrapper'>
            <OriginalComponent name={name} wrap={wrap} addWrap={addWrap} {...props} />
            </div>
        )

    }
    return NewComponent
}

export default MyHOC
