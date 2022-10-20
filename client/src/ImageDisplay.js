import React, { useEffect, useState } from "react";

function ImageDisplay({postImage, setPostImage}){ 
const [pdf, setPdf] = useState(null)
    useEffect(()=>{
        fetch("/latest")
        .then(res=>res.json())
        .then(data=>setPostImage(data.image_url))
    },[postImage])


    useEffect(()=>{
        fetch("/latest")
        .then(res=>res.json())
        .then(data=>setPdf(data.pdf_url))
    },[postImage])
    return(
        <div>
            <img src={postImage}/>
            <a href={pdf} target="_blank">Preview</a>
            <a href={pdf} target="_blank" rel="noreferrer noopener">Download</a>
        </div>
    )

    
}

export default ImageDisplay