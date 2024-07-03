import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Editpost = ({edittitle,setedittitle,editbody,seteditbody,handleedit,posts}) => {
    const {id}=useParams()
    const post=posts.find(post=>(post.id).toString()===id)

    useEffect(()=>{
        if(post){
            seteditbody(post.body)
            setedittitle(post.title)
        }
    },[post,seteditbody,setedittitle])

    return (
    <main className='newpost'>
    <h2>Edit Post</h2>
    <form className='newpostform' onSubmit={e=>e.preventDefault()}>
       <label htmlFor='postTitle'>Title:</label>
       <input
       id='postTitle'
       type='text'
       value={edittitle}
       onChange={e=>setedittitle(e.target.value)}
       />
       <label htmlFor='postbody'>Body:</label>
       <textarea
       id='postbody'
       value={editbody}
       required
       onChange={e=>seteditbody(e.target.value)}
       />
       <button type='submit' onClick={()=>handleedit(post.id)}>Submit</button>
    </form>
   </main>
  )
}

export default Editpost