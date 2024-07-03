import React from 'react'
import { useParams } from 'react-router-dom'

const PostPage = ({posts,dele,edit}) => {
  const {id}=useParams()
  const post=posts.find(post=>(post.id).toString()===id)
  return (
    <main className='postpage'>
      <article className='post'>
         {post && <div className='postcard'>
             <div className='titlebar'>
              <h1>{post.title}</h1>
              <p>{post.body}</p> 
             </div>
             <div style={{display:'flex',justifyContent:'space-evenly'}}>
              <button className='editbut'onClick={()=>edit(post.id)}>Edit Post</button>
              <button className='button' onClick={()=>dele(post.id)}>Delete</button>
            </div>
          </div>}
          {!post && <div className='missing'>
               <h2>Page Not Found</h2>
                 <p>Well, that's disappointing</p>
                 <p>
                   Visit Our Homepage
                 </p>
            </div>}
      </article>
    </main>
  )
}

export default PostPage;