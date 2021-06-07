import React from 'react';

class Copy extends React.Component
{
    handleCopy(e)
    {
        console.log('Dont do it!');
    }
    render()
    {
        return(
            <p onCopy={this.handleCopy}>
                Parapho, me encanto MDZS Wo Shuwan ni
            </ p>
        )
    }
}

export default Copy;