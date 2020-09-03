import React from 'react';
import ApiContext from '../ApiContext';

export default class AddFolder extends React.Component {

    static contextType = ApiContext;

    storeNewFolderData(str) {
        const folderName = str
        this.context.addFolder(folderName)
    }

    render(){
       let name = ''
        
        return (
            <form onSubmit={(e) => {
                e.preventDefault()
                this.storeNewFolderData(name) 
                }} >
                <h2>Add New Folder</h2>
                <label>Folder Name:</label>
                <input type='text' className='js-folder-name' onChange={e => name = e.target.value}></input>
                <button type='submit' >Submit</button>
                
            </form>
        );
    }

    

}

