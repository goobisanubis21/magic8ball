import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './historyComp.css';

function HistoryComp() {

    const test = JSON.parse(localStorage.getItem('history'))
    const size = 10;

    function clear() {
        localStorage.clear('history')
        window.location.reload()
    }


    if (test === null) {
        return (
            <div className='main-history-div'>
                <h1>History</h1>
                <h3>No Current History</h3>
                <Link to='/'>Back</Link>
            </div>
        )
    } else {
        const items = test.slice(0, size)
        return (
            <div className='main-history-div'>
                <h1>History({items.length})</h1>
                {items.map(user => (
                    <div key={user.question} className='history-div'>
                        <h3>Question: {user.question}</h3>
                        <h3>Answer: {user.answer}</h3>
                    </div>
                ))}
                <button className='clearBtn' onClick={clear}>CLEAR HISTORY</button>
                <p><Link to='/'>Back</Link></p>
            </div>
        )
    }

}

export default HistoryComp
