import BookList from "./components/BookList"
import Navbar from "./components/navbar"


const App = () =>{
    return(
        <div className=" bg-blue-500">
        <Navbar />
         <BookList />
        </div>
    )
}

export default App