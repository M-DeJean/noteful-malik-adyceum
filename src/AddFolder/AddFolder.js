import React from 'react';
import ApiContext from '../ApiContext';

export default class AddFolder extends React.Component {

    static contextType = ApiContext;

    storeNewFolderData(str) {
        const folderName = str
        this.context.addFolder(folderName)
        this.props.history.push('/')
    }

    render(){
        
        return (
            <form onSubmit={(e) => {
                e.preventDefault()
                this.storeNewFolderData(e.target.folderName.value) 
                }} >
                <h2>Add New Folder</h2>
                <label>Folder Name:</label>
                <input name="folderName" type='text' className='js-folder-name'></input>
                <button type='submit' >Submit</button>
                
            </form>
        );
    }

    

}

