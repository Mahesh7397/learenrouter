import React from 'react'
import Post from './Post'

const Home = ({posts}) => {
  //console.log(posts)
  return (
    <div>
      {posts.length ? posts.map((post)=><Post post={post} key={post.id}/>):<h3 style={{textAlign:'center'}}>Noo Posts to display</h3>}
      {/*<Post post={posts[0]}/>*/}
    </div>
  )
}

export default Home