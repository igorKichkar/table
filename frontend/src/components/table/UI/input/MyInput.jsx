import React from 'react'

function MyInput(props) {
    return (
       <input { ...props } className="form-control filter_input"/>
    )
}

export default MyInput
