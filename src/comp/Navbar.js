import React, { useContext, useState } from 'react'
import '../css/navbar.css'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { StateContext } from '../ContextProvider';

const Navbar = () => {
    const { dark, setDark } = useContext(StateContext)
    const currencies = ["BTC", "ETH", "USDT", "XRP", "TRX", "DASH", "ZEC", "XEM", "IOST", "WIN", "BTT", "WRX"];
    const [currency, setCurrency] = useState("BTC");
    const [menuIcon, setMenuIcon] = useState("light")
    const [toggleStyle, setToggleStyle] = useState(
        {
            height: "100%",
            width: "45%",
            borderRadius: "50%",
            backgroundColor: "rgb(61, 198, 193)",
            float: "right"
        }
    )

    const selectTagBgColor = {
        backgroundColor: "rgb(248,249,250)",
        color: "black"
    }

    const handleToggle = () => {
        setDark(!dark)
        if (dark) {
            setToggleStyle({
                ...toggleStyle, float: "left"
            })
            setMenuIcon("dark")
        } else {
            setToggleStyle({
                ...toggleStyle, float: "right"
            })
            setMenuIcon("light")
        }
        if (dark) {
            // Dark Theme
            document.getElementById('navbar').style.backgroundColor = "white";
            document.getElementById('mid2').style.backgroundColor = "white"
        }
        else {
            // Light Theme
            document.getElementById('navbar').style.backgroundColor = "rgb(25,29,40)"
            document.getElementById('mid2').style.backgroundColor = "rgb(25,29,40)"
        }
    }
    return (
        <>
            <div id='navbar'>
                <div id='left'>HODLINFO</div>

                <div className='mid'>
                    <select className='dropdown' style={!dark ? selectTagBgColor : null}>
                        <option defaultValue>INR</option>
                    </select>
                    <select className='dropdown' style={!dark ? selectTagBgColor : null} onChange={(e) => setCurrency(e.target.value)}>
                        <option defaultValue>BTC</option>
                        {currencies.map((v, i) => {
                            return <option key={i}>{v}</option>
                        })}
                    </select>
                    <button style={!dark ? selectTagBgColor : null}>BUY {currency.toUpperCase()}</button>
                </div>

                <div id='right'>
                    <div>
                        <CountdownCircleTimer
                            isPlaying
                            duration={60}
                            colors="rgb(61,198,193)"
                            size="40"
                            strokeWidth="5"
                            rotation="counterclockwise"
                            onComplete={() => {
                                return { shouldRepeat: true }
                            }}
                        >
                            {({ remainingTime }) => <div style={{ color: "rgb(61,198,193)" }}>{remainingTime}</div>}
                        </CountdownCircleTimer>
                    </div>

                    <button><i class="bi bi-telegram"></i> &nbsp;Connect Telegram</button>

                    <div id='toggle-btn' style={!dark ? selectTagBgColor : null} onClick={handleToggle}>
                        <div style={toggleStyle}></div>
                    </div>
                </div>
            </div>

            <div className='mid' id='mid2'>
                <div>
                    <select className='dropdown' style={!dark ? selectTagBgColor : null}>
                        <option defaultValue>INR</option>
                    </select>
                </div>
                <div>
                    <select className='dropdown' style={!dark ? selectTagBgColor : null} onChange={(e) => setCurrency(e.target.value)}>
                        <option defaultValue>BTC</option>
                        {currencies.map((v, i) => {
                            return <option key={i}>{v}</option>
                        })}
                    </select>
                </div>

                <button style={!dark ? selectTagBgColor : null}>BUY {currency.toUpperCase()}</button>
            </div>
        </>
    )
}

export default Navbar