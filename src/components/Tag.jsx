  import React from 'react'
  import "./Tag.css"

  const Tag = (props) => {
    const tagStyle = {
      HTML : {backgroundColor:"#fda821"},
      CSS : {backgroundColor:"#15d4c8"},
      JS : {backgroundColor:"#ffd12c"},   
      REACTJS : {backgroundColor:"#4cdafc"},
      defualt : {backgroundColor:"#f9f9f9"},
    }
    return (
      <button type = "button"className='tag' style={props.selected ? tagStyle[props.tagName] : tagStyle.defualt} onClick={() => props.selectTag(props.tagName)}>{props.tagName}</button>
    )
  }

  export default Tag;