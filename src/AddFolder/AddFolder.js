import React from 'react';

export default class AddFolder extends React.Component {

    render(){
        return (
            <form>
                <h2>Add New Folder</h2>
                <label>Folder Name:</label>
                <input type='text' className='js-folder-name'></input>
                
            </form>
        );
    }

}