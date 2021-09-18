import React, { useState, useRef } from 'react';
import './homeComp.css';
import Ball from './android-chrome-512x512.png'

function HomeComp() {

    const [answer, setAnswer] = useState("All of your Questions will be Answered");
    let inputQuestion = useRef();

    function onSubmit(e) {
        e.preventDefault()

        if(inputQuestion.current.value === '') {
            setAnswer('You Must Not Leave the Question Blank')
            return
        }

        if (inputQuestion.current.value.split("")[inputQuestion.current.value.length-1] !== '?') {
            setAnswer('I only Accept Questions')
            return
        }

        let params = inputQuestion.current.value
        let uri = "https://8ball.delegator.com/magic/JSON/" + params;
        fetch(uri)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setAnswer(json.magic.answer)
            }).catch(err => {
                console.log(err)
            });
    }

    return (
        <div className='main-home-page-div'>
            <div className='title-div'>
                <h1 className='title'>Magic 8-Ball</h1>
            </div>
            <div className='image-div'>
                <img className='image' src={Ball} alt='...'></img>
            </div>
            <div className='result-div'>
                <p className='result-text'>{answer}</p>
            </div>
            <div className='input-div'>
                <form className='input-form'>
                    <input ref={inputQuestion} className='input-box' placeholder='Ask Me Anything'></input>
                    <div className='submit-btn-div'>
                        <button className='submut-btn' onClick={onSubmit}>SUBMIT</button>
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
