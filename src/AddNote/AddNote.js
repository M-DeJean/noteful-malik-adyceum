import React from 'react';

export default class AddNote extends React.Component {

    render(){
        return (
            <form>
                <h2>Add New Note</h2>
                <label>Note Name:</label>
                <input type='text' className='js-note-name' onChange={e => console.log(e.target.value)}></input><br/>
                <label>New Content:</label>
                <input type='text' className='js-note-content' onChange={e => console.log(e.target.value)}></input>
                <button type='submit'>Submit</button>
            </form>
        );
    }

}