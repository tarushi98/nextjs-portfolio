import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import profilepic from "../public/Images/me.jpg"

const ProfileImage = () => (
  <Image
      src = {profilepic}
      className = "rounded-full"
      height={120}
      width={120}
      alt = {"This pic was supposed to show how I look"}
  />
)
const NavBar=()=>
(<>
    <nav className="flex flex-row space-x-4 mt-8">
        <button className="border-4 rounded-lg p-4 sm:hidden"><img src="https://img.icons8.com/windows/32/000000/menu.png"/></button>
        <Link href="/" className="active:text-black"><p className="text-2xl text-gray-500 hover:underline hover:text-black">Home</p></Link>
        <p className="text-2xl text-gray-500 hover:underline hover:text-black">About</p>
        <p className="text-2xl text-gray-500 hover:underline hover:text-black">Projects</p>
        <p className="text-2xl text-gray-500 hover:underline hover:text-black">Blog</p>
        <p className="text-2xl text-gray-500 hover:underline hover:text-black">Contact</p>
    </nav>
  </>
)
function Home() {

  return (
    <>
      <div className="container">
            <NavBar/>
            <div className="flex flex-row justify-between mt-20">
                <div className="flex flex-col">
                    <p className="font-bold text-6xl">TARUSHI PATHAK</p>
                    <p className="text-2xl p-1 text-gray-500">Programmer Analyst Intern <span className="font-bold text-black">@Amazon India</span></p>
                    <p className="text-lg mt-8 text-gray-500">I make cool stuff, be it a website or a robot 🤖.Currently working on this one!🔨🚧</p>
                </div>
                <div class="flex-none">
                    <ProfileImage/>
                </div>
            </div>      


        </div>    
  </>
  )
}

export default Home;