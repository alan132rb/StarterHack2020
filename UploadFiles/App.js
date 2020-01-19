// the only thing that does not work is line 22 
// need to update the actual "link" to Firebase

import React, { Component } from 'react';
import './App.css';
import axios from 'axios'


class App extends Component {
  state = {
    selectedFile: null
  }

  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })
  }

  fileUploadHandler = () => {
    const fd = new FormData();
    fd.append('image', this.state.selectedFile, this.state.selectedFile.Name)
    axios.post('gs://testing2-b8491.appspot.com', fd, {
      onUploadProgress: progressEvent => {
         console.log('Upload Progress: ' + Math.round(progressEvent.loaded / progressEvent.total * 100) + '%')
      }
    })
      .then(res => {
        console.log(res);
      });
  }
  
  render() {
      return (
          <div className="App">
              <input type="file" onChange={this.fileSelectedHandler}/>
              <button onClick={this.fileUploadHandler}>Upload</button>
          </div>
      )
  }
}

export default App;
