import React, { useState } from "react";

function Form ({postImage, setPostImage}){
    const [file, setFile] = useState()
    const [title, setTitle] = useState("")  
    const [fdata, setFdata] = useState({
        title: '',
        file: {}
    })

    function handleChange(e) {
        // setFile(event.target.files[0])
        // setTitle(event.target.title.value)
        let name = e.target.name 
        let value = e.target.value
        setFdata({[name]: value})
    }

    function handleSubmit(e){
        e.preventDefault() 

        const formData = new FormData()
        formData.append("title", title)
        formData.append("image", file) 

        const data = {
            title: e.target.title.value,
            image: e.target.image.files[0]
        }

        console.log(fdata)
    }
    return (
        <div>
            <h2>Upload form</h2> 
            <form onSubmit={handleSubmit}>
                <input type={'text'} name="title" onChange={handleChange}/>
                <input type={'file'} name="image" onChange={handleChange}/>
                <input type={'submit'} value="Post" />
            </form>
        </div>
    )
}

export default Form