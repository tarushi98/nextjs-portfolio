import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import profilepic from "../public/Images/me.jpg"
import homeStyles from './CSS/home.module.css'
import art from '../public/Images/art.png';
import code from '../public/Images/programmer.png';
import stars from '../public/Images/stars.png';

const ProfileImage = () => (
  <Image
      src = {profilepic}
      className = "rounded-full"
      height={120}
      width={120}
      alt = {"This pic was supposed to show how I look"}
  />
)
const Art = () => (
  <Image
    src = {art}
    alt = "Art"
  />
)
const Code = () => (
    <Image
      src = {code}
      alt = "Coding"
    />
)
const Stars = () => (
    <Image
        src = {stars}
        alt = "Random"
      />
)
function Home() {

  return (
    <>
      <div className="flex flex-col-reverse mt-10 sm:flex-row sm:justify-between sm:mt-18">
        <div className="flex flex-col sm:ml-4">
          <p className="font-bold text-4xl sm:text-6xl">TARUSHI PATHAK</p>
          <p className="text-gray-500 text-md m-1 sm:text-2xl sm:p-1">Programmer Analyst Intern <span className="font-bold text-black">@Amazon India</span></p>
          <p className="text-gray-500 text-md mt-5 ml-1 sm:text-lg sm:mt-8 sm:ml-2 ">I make cool stuff, be it a website or a robot 🤖. Currently working on this one!🔨🚧</p>
        </div>
        <div className="ml-2 mb-6 flex-none sm:mx-20">
          <ProfileImage/>
        </div>
     </div>     

      <p className="font-bold text-3xl sm:text-5xl sm:ml-4 mt-10">FEATURED POSTS</p> 
      <div className="flex flex-col mt-2 sm:mt-6 sm:flex-row sm:space-x-6 sm:ml-10">
              <div className={homeStyles.gradient}>
                    <p className="text-lg p-4 sm:text-xl sm:mt-2">Project Search Bar:<br/> Built To Fight Misinformation,Featured By Streamlit </p>
                    <div className="flex flex-row space-x-2 p-4 -my-2 sm:-my-0">
                        <img src="https://img.icons8.com/ios-glyphs/30/000000/domain.png"/>
                        <Link href="https://datanecdotes-psb.herokuapp.com/"><p className="text-lg sm:text-xl hover:underline">Visit WebApp</p></Link>
                    </div>
              </div>
              <div className={homeStyles.gradient}>
                    <p className="text-lg p-4 sm:text-xl sm:mt-2">The Data Anecdotes:<br/>An inititative which combines Data Science and Journalism </p>
                    <div className="flex flex-row space-x-2 p-4 -my-2 sm:-my-0">
                        <img src="https://img.icons8.com/ios-glyphs/30/000000/domain.png"/>
                        <Link href="https://thedatanecdotes.netlify.app/"><p className="text-lg sm:text-xl hover:underline">Visit Website</p></Link>
                    </div>
              </div>
              <div className={homeStyles.gradient}>
                  <p className="text-lg p-4 sm:text-xl sm:mt-2">Buildlytics:<br/>A python package made for making Data Analysis simpler </p>
                  <div className="flex flex-row space-x-2 p-4 -my-2 sm:-my-0">
                        <img src="https://img.icons8.com/windows/32/000000/github.png"/>
                        <Link href="https://github.com/Data-Science-Community-SRM/buildlytics"><p className="text-lg sm:text-xl hover:underline">Visit Github</p></Link>
                  </div>
              </div>
        </div>

      <div className="flex flex-row space-x-2 mt-4 ml-2 sm:ml-10 ">
                <p className="text-xl text-gray-700 hover:underline">check out all</p>
                <img src="https://img.icons8.com/material-two-tone/24/000000/long-arrow-right.png" className="animate-pulse"/>
        </div>

      <p className="font-bold text-3xl sm:text-5xl sm:ml-5 mt-10">BLOGS</p>
      <div className="flex flex-col mt-2 sm:mt-6 sm:flex-row sm:space-x-6 sm:ml-10">
              <div className={homeStyles.gradient}>
                     <p className="w-9/12 ml-10 mt-5 transition duration-700 ease-in-out transform hover:scale-75 sm:mt-10 sm:w-full sm:ml-0"> <Art/> </p>
              </div>
              <div className={homeStyles.gradient}>
                    <p className="w-9/12 ml-10 mt-6 transition duration-700 ease-in-out transform hover:scale-75 sm:mt-10 sm:w-full sm:ml-0"><Code/></p>
              </div>
              <div className={homeStyles.gradient}>
                   <p className="w-9/12 ml-10 mt-2 transition duration-700 ease-in-out transform hover:scale-75 sm:mt-8 sm:w-full sm:ml-0"><Stars/></p>
              </div>
        </div>

      
      <div className="flex flex-row space-x-2 mt-4 ml-2 mb-2 sm:ml-10 ">
                <p className="text-xl text-gray-700 hover:underline">check out all</p>
                <img src="https://img.icons8.com/material-two-tone/24/000000/long-arrow-right.png" className="animate-pulse"/>
      </div>
  </>
  )
}

export default Home;