
import { useState } from 'react'
import './App.css'
import Blogs from './component/blogs/Blogs'
import Bookmarks from './component/bookMarks/Bookmarks'
import Header from './component/header/Header'

function App() {
const [bookMarks, setBookMarks] = useState([]);
const [markAsRead, setmarkAsRead] = useState(0);

const handleAddToBookMarks = blog =>{
  const newBookMarks = [...bookMarks, blog]
  setBookMarks(newBookMarks);
}

const handleMarkAsRead = time => {
  const convartTime = parseInt(time);
  const convartNum = parseInt(markAsRead)
  setmarkAsRead(convartNum + convartTime);
}

  return (
    <>
      <Header></Header>
      <main>
        <section className='flex gap-9'>
          <Blogs 
           handleAddToBookMarks={handleAddToBookMarks}
           handleMarkAsRead={handleMarkAsRead}
           ></Blogs>
          <Bookmarks
          bookMarks={bookMarks}
          markAsRead={markAsRead}
          ></Bookmarks>
        </section>
      </main>
    </>
  )
}

export default App
