
import { useState } from 'react'
import './App.css'
import Blogs from './component/blogs/Blogs'
import Bookmarks from './component/bookMarks/Bookmarks'
import Header from './component/header/Header'

function App() {
const [bookMarks, setBookMarks] = useState([]);

const handleAddToBookMarks = blog =>{
  const newBookMarks = [...bookMarks, blog]
  setBookMarks(newBookMarks);
}

  return (
    <>
      <Header></Header>
      <main>
        <section className='flex gap-9'>
          <Blogs handleAddToBookMarks={handleAddToBookMarks}></Blogs>
          <Bookmarks bookMarks={bookMarks}></Bookmarks>
        </section>
      </main>
    </>
  )
}

export default App
