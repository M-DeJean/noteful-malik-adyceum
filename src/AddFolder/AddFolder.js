import React from 'react';

export default class AddFolder extends React.Component {

    storeNewFolderData(str) {
        const folderName = str
        console.log(folderName)
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

