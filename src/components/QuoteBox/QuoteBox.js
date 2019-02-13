import React from 'react';
import classes from './QuoteBox.css';

export const QuoteBox = (props) => {
    const rawMarkup = (content) => {
        let rmp = content;
        return {__html: rmp};
    }
    let content = null;
    let author = null;
    let item = null;
    if (props.quote === null || props.quote === undefined || props.quote.length <= 0) {
        item = props.firstItem.map(q => {
            content = [q.content, q.title].join(' --');
            author = [q.author].join(' ')
            return (<div key={q.ID}>
               <h3><span dangerouslySetInnerHTML={rawMarkup(q.content)}></span></h3>
                <strong><i>--{q.title}</i></strong>
            </div>)
        })
    }
    else {
        item = props.quote.map(q => {
            content = [q.content, q.title].join('->');
            return (
                <div key={q.ID}>
                    <h3><i className="fas fa-quote-block"></i><span dangerouslySetInnerHTML={rawMarkup(q.content)}></span></h3>
                    <strong><i>--{q.title}</i></strong>
                </div>
            )
        })
    }
    let  contentStripped = content.replace(/(<([^!;'>]+)>)/ig,"");
    return (
        <div id="author" className={`container`}>
            <div className="row">
                <div className={`col-sm-10  col-md-12 col-lg-6  bg-white rounded`}>
                    <div style={{ color: props.color }} className={classes.Quote}>
                        {item}
                        <button
                            id="new-quote"
                            style={{ backgroundColor: props.color, color: 'white' }} 
                            className="btn btn-default float-right m-2" 
                            onClick={() => { props.change() }}>
                            New Quote
                        </button>
                        <div className="row mr-3">
                            {/* <button on className="btn btn-default "></button> */}
                            <a id="tweet-quote" className="btn btn-default float-left px-3 m-1" style={{backgroundColor: props.color}}  
                            href={`https://twitter.com/intent/tweet?text=${contentStripped}`}target="_blank">
                            <i className="fa fa-twitter" style={{color:'white'}}></i>
                            </a>
                            <a   style={{backgroundColor:props.color}} className="btn btn-default float-left px-3  m-1" href="https://facebook.com" target="_blank"><span className="fa fa-facebook" style={{color:'white'}}></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
