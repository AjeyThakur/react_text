import React, { useState } from 'react';

function Text(props) {
    const upclick = () => {
        let newtext = text.toUpperCase();
        settext(newtext);
    }
    const handlechange = (events) => {
        settext(events.target.value);
    }
    const lowclick = () => {
        let newtext = text.toLowerCase();
        settext(newtext);

    }
    const clearclick = () => {
        settext("");

    }
    const [text, settext] = useState('');
    return (
        <>
            <div className='container' >

                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" onChange={handlechange} value={text}></textarea>
                </div>
                <button type="button" onClick={upclick} className="btn btn-success">convert to upper case</button>
                <button type="button" onClick={lowclick} className="btn btn-success mx-3">convert to lower case</button>
                <button type="button" onClick={clearclick} className="btn btn-success mx-3">Clear Text</button>
            </div>
            <div className='container my-3 '>
                <h1> Text Summary </h1>
                <p> {text.split(" ").length} Words and {text.length} Characters </p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );

}

export default Text;
