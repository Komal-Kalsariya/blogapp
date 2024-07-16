import React, { useState } from 'react'

const Blogapp = () => {
    let [title, setTitle] = useState("")
    let [image, setimag] = useState("")
    let [content, setContent] = useState("")
    let [date, setDate] = useState("")
    let [list,setList]=useState([])

     const handleData=(e)=>{
        e.preventDefault()
        let data={
            title:title,
            image:image,
            content:content,
            date:date
        }

        setList([...list,data])
        console.log(list)
       
    }
    const handleRemove=(index)=>{
        let filterdata=list.filter((ele,i)=>i!=index)
        setList(filterdata)

    }
    const handleUpdate=(ele)=>{
        setTitle=ele.title,
        setimag=ele.image,
        setContent=ele.image,
        setDate=ele.image
    }
    
    return (
        <div>
            <div>
            <h2>Blog APP</h2>
            <form onSubmit={handleData}>
                
               <label>Title:
               <input type="text" 
                value={title}
                placeholder='enter title' 
                onChange={(e) => setTitle(e.target.value)} />
               </label>
                <br />
                <label>Image:
                <input type="text" value={image} placeholder='enter image url' onChange={(e) => setimag(e.target.value)} />
                </label>
                <br />
                <label>Content:
                <input type="text" value={content} placeholder='enter content' onChange={(e) => setContent(e.target.value)} />
                </label>
                <br />
                <label>Date:
                <input type="date" value={date} placeholder='enter date' onChange={(e) => setDate(e.target.value)} />
                </label>
                <br />
                <input type="submit" value="add" />
                <div className='box'>
                {
                    list.map((ele,index)=>(
                      <div className='box1'>
                        <p> {ele.title}</p>
                        <img src={ele.image} alt="" className='imge' />
                        <p>Content: {ele.content}</p>
                        <p>Date:{ele.date}</p>
                        <button onClick={()=>handleRemove(index)}>Delete</button>
                        <button onClick={()=>handleUpdate(ele)}>Upadate</button>
                      </div>
                        
                    ))
                }
                </div>
                
            </form>
            </div>
        </div>
    )
}

export default Blogapp