import { Homepages, BlogContentPage } from "./pages";
import { Routes, Route } from 'react-router-dom';
import { useFetch } from "./hooks/useFetch";

export default function App() {
  
  const { loading, error, data } = useFetch('http://localhost:1337/api/blogs');

  if (loading) return <p>LOADING...</p>
  if (error) return <p>Error</p>
  return (
    <>
      <Routes>
        <Route path='/' element={ <Homepages /> }></Route>
        <Route path='/blog/:id' element={ <BlogContentPage /> }></Route>
      </Routes>
    </>
  )
}