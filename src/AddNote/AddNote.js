import React from 'react';

export default class AddNote extends React.Component {

    render(){
        return (
            <form>
                <h2>Add New Note</h2>
                <label>Note Name:</label>
                <input type='text' className='js-note-name'></input><br>
                <label>New Content:</label>
                <input type='text' className='js-note-content'></input>
            </form>
        );
    }

}