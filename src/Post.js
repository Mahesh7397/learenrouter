import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Post = ({post}) => {
  //console.log(post)
  return (
    <Link to={`/post/${post.id}`} className='click'>
    <article className='artical'>
      <h1 className='title'>{post.title}</h1>
       {(post.body).length<=25?<p>{post.body}</p>:<p>{(post.body).slice(0,25)}....</p>}
    </article>
    </Link>
  )
}

export default Post