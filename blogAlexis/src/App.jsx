import { Homepages, BlogContentPage } from "./pages";
import { Routes, Route } from 'react-router-dom';
import { useFetch } from "./hooks/useFetch";

export default function App() {
  
  let { loading, error, data } = useFetch('http://localhost:1337/api/blogs?populate=*');

  if (loading) return <p>LOADING...</p>
  if (error) return <p>Error</p>

  return (
    <>
      <Routes>
        <Route path='/' element={ <Homepages blogs={data?data: ""} /> }></Route>
        <Route path='/blog/:id' element={ <BlogContentPage blogs={data?data: ""} /> }></Route>
      </Routes>
    </>
  )
}