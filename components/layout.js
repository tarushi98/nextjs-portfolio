import Link from 'next/link'

const NavBar=()=>
(<>
    <div className="flex flex-row justify-between mt-8">
      <nav className="flex flex-row space-x-4">
          <button className="visible border-4 rounded-lg pl-2 pt-2 pb-2 hover:border-black sm:hidden"><img src="https://img.icons8.com/windows/32/000000/menu.png" width="75%"/></button>
          <Link href="/" className="active:text-black"><p className="hidden text-2xl text-gray-500 hover:underline hover:text-black sm:block">Home</p></Link>
          <p className="hidden text-2xl text-gray-500 hover:underline hover:text-black sm:block">About</p>
          <p className="hidden text-2xl text-gray-500 hover:underline hover:text-black sm:block">Projects</p>
          <p className="hidden text-2xl text-gray-500 hover:underline hover:text-black sm:block">Blog</p>
          <p className="hidden text-2xl text-gray-500 hover:underline hover:text-black sm:block">Contact</p>
      </nav>
      <p className="text-md sm:text-xl sm:mx-20">⛈️ 19°C <br/>Thunderstorm</p>
    </div>
  </>
)


const Layout = ({children}) =>{
    return (   
        <div className="container">
            <NavBar/>
                {children}
        </div>
    );
}
export default Layout;