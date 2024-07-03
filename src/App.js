
import About from './About';
import './App.css';
import {Route,Routes, useNavigate} from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Missing from './Missing';
import Nav from './Nav';
import NewPost from './NewPost';
import PostPage from './PostPage';
import { useEffect, useState } from 'react';
import  api  from './API/posts'
import Editpost from './Editpost';

function App() {
  const [Posts,setPosts]=useState([])
  const [search,setsearch]=useState('')
  const [postbody,setpostbody]=useState('')
  const [posttitle,setposttitle]=useState('')
  const [searchresult,setsearchresult]=useState([])
  const [edittitle,setedittitle]=useState('')
  const [editbody,seteditbody]=useState('')
  const navigate=useNavigate()

   const fetchposts=async()=>{
      try {
        const response=await api.get('/posts')
        setPosts(response.data)
      } catch (err) {
        if(err.response){
         console.log(err.response.data)
         console.log(err.response.status)
         console.log(err.responce.headers)
        }
        else{
          console.log(`ERROR:${err.message}`)
        }
      }
   }

  const handlesubmit=async(e) =>{
     e.preventDefault()
     const id=Posts.length?Number(Posts[Posts.length-1].id)+1.:1;
     const newpost={
      id:id.toString(),
      title:posttitle,
      body:postbody
     };
     try {
      const response=await api.post('/posts',newpost)
      const allpost=[...Posts,response.data]
      setPosts(allpost)
      setpostbody('')
      setposttitle('')
      navigate('/')
     } catch (err) {
      if(err.response){
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.responce.headers)
       }
       else{
         console.log(`ERROR:${err.message}`)
       }
     }
  }
  const filter=()=>{
    const filterposts=Posts.filter(post=>(
      ((post.title).toLowerCase()).includes(search.toLowerCase())||((post.title).toLowerCase()).includes(search.toLowerCase())
    ))
    setsearchresult(filterposts)
  }
  const handledelete=async(id)=>{
    try {
      await api.delete(`/posts/${id}`)
      const item=Posts.filter((post)=>(post.id!==id))
      setPosts(item)
      navigate('/')
    } catch (err) {
      console.log(`ERROR:${err.message}`)
    }
  }

  const handleedit=async(id)=>{
    const updatepost={id,title:edittitle,body:editbody}
    try {
       const responce=await  api.put(`/posts/${id}`,updatepost)
       setPosts(Posts.map(post=>post.id===id?{...responce.data}:post))  
       seteditbody('')
       setedittitle('')
       navigate('/')    
     } catch (err) {
       console.log(`ERROR : ${err.message}`);
     }
  }

   const edit=(id)=>{
    navigate(`/edit/${id}`)
   }

  useEffect(()=>{
    filter()
  },[search])
  useEffect(
    ()=>{
      fetchposts()
    }
  ,[])
  return (
    <div className="App">
      <Header title={'MD MAZU'}/>
      <Nav search={search} setsearch={setsearch}/>
      <Routes>
        <Route path='/' element={<Home posts={Posts}/>}/>
        <Route path='/post'>
              <Route index element={<NewPost postbody={postbody} posttitle={posttitle} setpostbody={setpostbody} setposttitle={setposttitle} handlesubmit={handlesubmit}/>}/>
              <Route path=':id' element={<PostPage posts={Posts} dele={handledelete} edit={edit}/>}/>
        </Route>
        <Route path='/edit/:id' element={<Editpost editbody={editbody} edittitle={edittitle} seteditbody={seteditbody} setedittitle={setedittitle} posts={Posts} handleedit={handleedit}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<Missing/>}/>
      </Routes>
      <Footer/> 
    </div>
  );
}

export default App;
