import React from 'react';

class Button extends React.Component
{
    handleClick = (e) => {
        console.log('clickity click click');
    }
    render()
    {
        return(
            <button onClick={this.handleClick}> 
                click on me!
            </button>
        );
    }
    
}

export default Button;