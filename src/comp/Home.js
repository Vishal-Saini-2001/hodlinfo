import React, {useContext, useState} from 'react'
import '../css/home.css'
import { StateContext } from '../ContextProvider';

const Home = ({ data }) => {
    const {dark, setDark} = useContext(StateContext)
    const [bgColor,setBgColor] = useState({
        backgrounColor: "rgb(25,29,40)"
    })
    return (
        <div id='home' style={dark?bgColor:{backgroundColor:"white"}}>
            <div id='headings'>
                <div className='columns'>#</div>
                <div className='columns'>Name</div>
                <div className='columns'>Last Traded Price</div>
                <div className='columns'>Buy/Sell</div>
                <div className='columns'>Volume</div>
                <div className='columns'>Base-Unit</div>
            </div>
            {
                data && data.map((v, i) => {
                    return (
                        <div id='data' key={i}>
                            <div className='columns'>{i+1}</div>
                            <div className='columns'>{v.name}</div>
                            <div className='columns'>₹ &nbsp; {v.last}</div>
                            <div className='columns'>{v.buy}/{v.sell}</div>
                            <div className='columns'>{v.volume}</div>
                            <div className='columns'>{v.base_unit}</div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Home