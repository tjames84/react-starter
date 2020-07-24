import React from 'react';
const search = ( props ) => {
    const style = {
        cursor: 'pointer'    
    }

    return (
        <div style={style}>
            <input type="text" value="Search..."/>
            <button>Go!</button>
        </div>
    )
}

export default search;