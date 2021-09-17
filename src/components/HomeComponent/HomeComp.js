import React from 'react';
import './homeComp.css';
import Ball from './android-chrome-512x512.png'

function HomeComp() {
    return (
        <div className='main-home-page-div'>
            <div className='title-div'>
                <h1 className='title'>Magic 8-Ball</h1>
            </div>
            <div className='image-div'>
                <img className='image' src={Ball} alt='...'></img>
            </div>
            <div className='result-div'>
                <p className='result-text'>results go here</p>
            </div>
            <div className='input-div'>
                <form className='input-form'>
                    <input className='input-box' placeholder='Ask Me Anything'></input>
                    <div className='submit-btn-div'>
                        <button className='submut-btn'>SUBMIT</button>
                    </div>
                    <div className='history-btn-div'>
                        <button className='history-btn'>HISTORY</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default HomeComp
