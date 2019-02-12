import React from 'react';

export const QuoteBox = (props) => {
    console.log(props)
    return(
        <div className="QuoteBox col-sm col-md-4 bg-dark">
            {props.quote.map(q => {
                return(<div key={q.ID}>
                    <h3>{q.content}</h3>
                    <p>{q.title}</p> 
                </div>)
            })}
            <button onClick={props.change}>New Quote</button>
        </div>
    )
}