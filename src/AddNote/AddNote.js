import React from 'react';
import ApiContext from '../ApiContext'

export default class AddNote extends React.Component {

    static contextType = ApiContext

<<<<<<< HEAD
    handleSubmitNote = (e) => {
        e.preventDefault()
        this.context.addNote(e.target.noteName.value, e.target.noteContent.value, e.target.folderId.value)
        this.props.history.push('/')
=======
    storeNewNoteData(str) {
        const noteName = str
        this.context.addNote(noteName)
        console.log(this.props)
>>>>>>> bd8c55a7d10a02029aaf9d830502829bbb2fe1eb
    }

    render() {
        return (
<<<<<<< HEAD
            <form className="form" onSubmit={this.handleSubmitNote}>
                <h2>Add New Note</h2>
                <ul id="menuHeader">
                    <li><select id="dropdown" name="folderId">
                        <option >Select Folder</option>
=======
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
>>>>>>> bd8c55a7d10a02029aaf9d830502829bbb2fe1eb
                        {this.context.folders.map(folder => {
                            return(
                            <option key={folder.name} value={folder.id}>
                                {folder.name}
                            </option>
                        )})}
                    </select></li>
                </ul>
                <label>Note Name:</label>
<<<<<<< HEAD
                <input pattern=".{3,}" type='text' name="noteName" placeholder="3 character minimum"required></input><br />
                <label>New Content:</label>
                <input type='text' name="noteContent"></input>
=======
                <input name='noteName' type='text' className='js-note-name' onChange={e => console.log(e.target.value)}></input><br />
                <label>New Content:</label>
                <input name='noteContent' type='text' className='js-note-content' onChange={e => console.log(e.target.value)}></input>
>>>>>>> bd8c55a7d10a02029aaf9d830502829bbb2fe1eb
                <button type='submit'>Submit</button>
            </form >
        );
    }

}