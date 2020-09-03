import React from 'react';
import ApiContext from '../ApiContext'

export default class AddNote extends React.Component {

    static contextType = ApiContext

    storeNewNoteData(str) {
        const noteName = str
        this.context.addNote(noteName)
        console.log(this.props)
    }

    render() {
        return (
            <form onSubmit={(e) => {
                e.preventDefault()
                this.storeNewNoteData(e.target.noteName.value)
                this.storeNewNoteData(e.target.noteContent.value) 
                }} >
                <h2>Add New Note</h2>
                <ul id="menuHeader">
                    <li><select  id="dropdown" name="rating">
                        <option disabled value></option>
                        <option value="Filter">Select Folder</option>
                        {this.context.folders.map(folder => {
                            return(
                            <option value={folder.id}>
                                {folder.name}
                            </option>
                        )})}
                    </select></li>
                </ul>
                <label>Note Name:</label>
                <input name='noteName' type='text' className='js-note-name' onChange={e => console.log(e.target.value)}></input><br />
                <label>New Content:</label>
                <input name='noteContent' type='text' className='js-note-content' onChange={e => console.log(e.target.value)}></input>
                <button type='submit'>Submit</button>
            </form >
        );
    }

}