//imports
//when in the client side, use import syntax
import React from 'react';
import axios from 'axios';

//the App class extends the component class
class App extends React.Component {
 
    //store a state that will be used by more than one child component 
    constructor(props) {
        
        super(props);
        
        this.state = {
            
            homes: [],
            
        }
        

    }

    //render method is how we create what is seen in the screen
    render() {
        //render the main components
        return <>
            
            <div className='wrapper'>
                Hi    
            </div>
            
        </>;
        
    }    
    
}

export default App;