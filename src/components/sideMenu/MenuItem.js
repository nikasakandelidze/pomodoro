import React from 'react'


export default function MenuItem({title, widthArg}) {
    return (
        <div style={{width: widthArg}}>
            <h4>{title}</h4>
        </div>
    )
}
