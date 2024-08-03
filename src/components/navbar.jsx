const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-3 pt-[8px] bg-white border-solid border-black border-2 rounded-b-xl">
        <div>

        <h1 className="cursor-pointer text-xl pt-2 rounded-lg font-semibold box-content text-blue-800 shadow-blue-950 shadow-md px-2 self-center flex">Leo Books</h1>
        </div>
        <div className="flex gap-3 pr-0 md:pr-10">
            <a href="#" className=" hover:text-blue-500 active:text-red-500">Contact</a>
            <a href="#" className="hover:text-blue-500 active:text-red-500">About</a>
        </div>
    </div>
  )
}

export default Navbar