import React from 'react';
import ApiContext from '../ApiContext'

export default class AddNote extends React.Component {

    static contextType = ApiContext

    handleSubmitNote = (e) => {
        e.preventDefault()
        this.context.addNote(e.target.noteName.value, e.target.noteContent.value, e.target.folderId.value)
        this.props.history.push('/')
    }

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmitNote}>
                <h2>Add New Note</h2>
                <ul id="menuHeader">
                    <li><select id="dropdown" name="folderId">
                        <option >Select Folder</option>
                        {this.context.folders.map(folder => {
                            return(
                            <option value={folder.id}>
                                {folder.name}
                            </option>
                        )})}
                    </select></li>
                </ul>
                <label>Note Name:</label>
                <input type='text' name="noteName"></input><br />
                <label>New Content:</label>
                <input type='text' name="noteContent"></input>
                <button type='submit'>Submit</button>
            </form >
        );
    }

}