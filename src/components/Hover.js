import React from 'react';

class Hover extends React.Component
{
    handleMouseOver(e){
        console.log(e.target);
    }
    render(){
        return(
            <button onMouseOver={this.handleMouseOver}> 
                Hover over me!
            </button>
        );
    }
}

export default Hover;