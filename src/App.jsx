
import './App.css'
import Blogs from './component/blogs/Blogs'
import Bookmarks from './component/bookMarks/Bookmarks'
import Header from './component/header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <main>
        <section className='flex items-center'>
          <Blogs></Blogs>
          <Bookmarks></Bookmarks>
        </section>
      </main>
    </>
  )
}

export default App
