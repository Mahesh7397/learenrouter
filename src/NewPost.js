import React from 'react'

const NewPost = ({handlesubmit,posttitle,setposttitle,postbody,setpostbody}) => {
  return (
    <main className='newpost'>
       <h2>New Post</h2>
       <form className='newpostform' onSubmit={handlesubmit}>
          <label htmlFor='postTitle'>Title:</label>
          <input
          required
          id='postTitle'
          type='text'
          value={posttitle}
          onChange={e=>setposttitle(e.target.value)}
          />
          <label htmlFor='postbody'>Body:</label>
          <textarea
          id='postbody'
          value={postbody}
          required
          onChange={e=>setpostbody(e.target.value)}
          />
          <button type='submit'>Submit</button>
       </form>
    </main>
  )
}

export default NewPost