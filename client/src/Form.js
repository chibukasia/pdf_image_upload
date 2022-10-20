import React, { useState } from "react";

function Form ({postImage, setPostImage}){

    function handleSubmit(e){
        e.preventDefault() 

        const formData = new FormData()
        formData.append("title", e.target.title.value)
        formData.append("image", e.target.image.files[0]) 
        formData.append("pdf", e.target.pdf.files[0]) 

        fetch("/posts",{
            method: "POST",
            body: formData
        })
        .then(res=>res.json())
        .then(data=>setPostImage(data))
        // console.log(formData.get("title"))
    }
    return (
        <div>
            <h2>Upload form</h2> 
            <form onSubmit={handleSubmit}>
                <input type={'text'} name="title" />
                <input type={'file'} name="image" />
                <input type={'file'} name="pdf" />
                <input type={'submit'} value="Post" />
            </form>
        </div>
    )
}

export default Form