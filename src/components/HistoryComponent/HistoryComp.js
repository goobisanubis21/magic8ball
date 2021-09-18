import React from 'react'
import { Link } from 'react-router-dom'
import './historyComp.css';

function HistoryComp() {

    // getting local storage and setting it
    const usersHistory = JSON.parse(localStorage.getItem('history'))
    const size = 10;

    // function to clear local storage on click of clear button
    function clear() {
        localStorage.clear('history')
        window.location.reload()
    }

    // check if local storage is null and display appropriate JSX data
    if (usersHistory === null) {
        return (
            <div className='main-history-div'>
                <h1>History</h1>
                <h1>No Current History</h1>
                <Link to='/'>Back</Link>
            </div>
        )
        // if local storage has data, data will be displayed
    } else {
        // items const will only store most recent 10 items
        const items = test.slice(0, size)
        return (
            <div className='main-history-div'>
                <h1>History({items.length})</h1>
                {/* mapping function to display data to user in reverse order */}
                {items.reverse().map(user => (
                    <div key={user.question} className='history-div'>
                        <h3>Question: {user.question}</h3>
                        <h3>Answer: {user.answer}</h3>
                    </div>
                ))}
                {/* button to clear local storage */}
                <button className='clearBtn' onClick={clear}>CLEAR HISTORY</button>
                <p><Link to='/'>Back</Link></p>
            </div>
        )
    }

}

export default HistoryComp
