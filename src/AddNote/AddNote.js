import React from 'react';
import ApiContext from '../ApiContext'

export default class AddNote extends React.Component {

    static contextType = ApiContext

    render() {
        return (
            <form>
                <h2>Add New Note</h2>
                <ul id="menuHeader">
                    <li><select id="dropdown" name="rating">
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
                <input type='text' className='js-note-name' onChange={e => console.log(e.target.value)}></input><br />
                <label>New Content:</label>
                <input type='text' className='js-note-content' onChange={e => console.log(e.target.value)}></input>
                <button type='submit'>Submit</button>
            </form >
        );
    }

}