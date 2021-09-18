import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './homeComp.css';
import Ball from './android-chrome-512x512.png'

function HomeComp() {

    // react state hooks to store answer and to manipulate loading animation
    const [answer, setAnswer] = useState("All of your Questions will be Answered");
    const [classes, setClasses] = useState('image')

    let inputQuestion = useRef();

    // function to start loading response
    function startLoader(e) {
        e.preventDefault()
        setClasses('image-spin')
        setTimeout(() => {
            onSubmit()
        }, 2000);
    }

    //function to make API call and get the return JSON data to display to the user
    function onSubmit() {

        setClasses('image')

        if (inputQuestion.current.value === '') {
            setAnswer('You Must Not Leave the Question Blank')
            return
        }

        if (inputQuestion.current.value.split("")[inputQuestion.current.value.length - 1] !== '?') {
            setAnswer('I only Accept Questions')
            return
        }

        // API request using users input ref to search for a response
        let params = inputQuestion.current.value
        let uri = "https://8ball.delegator.com/magic/JSON/" + params;
        fetch(uri)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setAnswer(json.magic.answer)
                // setting/getting local storage to store for the users history
                let storage = JSON.parse(localStorage.getItem('history'))
                if (storage == null) storage = []
                let newAnswer = {
                    question: json.magic.question,
                    answer: json.magic.answer
                }
                storage.push(newAnswer)
                localStorage.setItem('history', JSON.stringify(storage))

            // catch any errors and log them
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
                <img className={classes} src={Ball} alt='8-ball'></img>
            </div>
            <div className='result-div'>
                <p className='result-text'>{answer}</p>
            </div>
            <div className='input-div'>
                <form className='input-form'>
                    <input ref={inputQuestion} className='input-box' placeholder='Ask Me Anything'></input>
                    <div className='submit-btn-div'>
                        <button className='submit-btn' onClick={startLoader}>SUBMIT</button>
                    </div>
                </form>
                <div className='history-btn-div'>
                    <Link to='/history'> View Your History</Link>
                </div>
            </div>
        </div>
    )
}

export default HomeComp
