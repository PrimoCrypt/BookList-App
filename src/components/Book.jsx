/* eslint-disable react/prop-types */
import image1 from "../images/book-img.png"

const Book = ({author, title, id, myIndex, getBook}) => {
  const number = myIndex + 1
  
  console.log(number)
  
  return (
    <div className="relative z-[4] flex flex-col gap-1 max-w-[20rem] rounded-2xl p-3 border-4 border-solid border-black w-full text-center bg-white overflow-hidden">
      <div className="relative rounded-t-lg  flex flex-col items-center justify-center p-1 bg-blue-600 ">
        <img className="h-full w-full max-h-[200px] object-cover rounded-lg" src={image1} alt={`book ${id} image`}/>
      </div>
      <p className="absolute top-0 left-0 self-start px-3 py-1 text-left text-white bg-black rounded-tl-lg rounded-br-3xl"># {number}</p>
      <h1 className="p-2 text-lg font-bold text-white bg-blue-600 ">{author}</h1>
      <p className="p-2 text-white bg-blue-600 rounded-b-lg">{title}</p>
      <button className="bg-blue-600 rounded-lg shadow-lg active:scale-105 hover:bg-blue-800 active:shadow-md active:shadow-black shadow-black" onClick={()=>getBook(id)}>Click me</button>
    </div>
  )
}

export default Book 
