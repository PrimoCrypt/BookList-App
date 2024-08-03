import Book from "./Book"
import { bookData } from "../data/data"

const BookList = () => {
  const getBook =(id)=>{
    const book = bookData.find((book)=> book.id == id)
    console.log(book)
  }
  return (
    <div className="flex flex-col items-center min-h-[100vh] gap-2 py-4 text-black">
      <h1 className="mb-4 text-5xl font-extrabold text-white text-center">Best Selling Books</h1>
      {
        bookData.map((book, index) =>{
          return <Book key={book.id} myIndex={index} getBook={getBook} {...book} />
        })
      }
    </div>
  )
}

export default BookList
