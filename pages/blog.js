import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import homeStyles from './CSS/home.module.css'
import art from '../public/Images/art.png';
import code from '../public/Images/programmer.png';
import stars from '../public/Images/stars.png'

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

const Blogs = () => (
    <>
        <p className="font-bold text-3xl sm:text-5xl sm:ml-5 mt-10">BLOGS</p>
        <p className="text-gray-500 mt-4 sm:ml-8">I am an expresssive human being and I can't help it 🐣! Check out my blogs on Art, Tech and Astronomy 🚀!</p>
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
        <p className="font-bold text-4xl mt-10 sm:ml-6">TECH BLOGS</p>
        <div className="flex flex-col space-y-8 mt-5 sm:ml-8">
                <div className="flex flex-row space-x-10 sm:space-x-36">
                        <Link href="https://medium.com/analytics-vidhya/classifying-asteroids-using-ml-a-beginners-tale-part-1-f4385458f13"><p className="text-md sm:text-2xl hover:underline">Classifying Asteroids Using ML : A beginner’s tale (Part 1)<br/><span className="italic text-gray-500 text-md">Machine Learning,Astronomy</span></p></Link>
                        <p className="text-md sm:text-2xl">Jul 12,2020</p>
                </div>
                <div className="flex flex-row space-x-10 sm:space-x-36">
                        <Link href="https://medium.com/analytics-vidhya/classifying-asteroids-using-ml-a-beginners-tale-part-2-1e379f7a781d"><p className="text-md sm:text-2xl hover:underline">Classifying Asteroids Using ML : A beginner’s tale (Part 2)<br/><span className="italic text-gray-500 text-md">Machine Learning,Astronomy</span></p></Link>
                        <p className="text-md sm:text-2xl">Jul 13,2020</p>
                </div>
                <div className="flex flex-row space-x-10 sm:space-x-56">
                        <Link href="https://medium.com/data-science-community-srm/from-50-to-5000-an-image-augmentation-story-1fc30111e39"><p className="text-md sm:text-2xl hover:underline">From 50 to 5000, an Image Augmentation Story<br/><span className="italic text-gray-500 text-md">Deep Learning</span></p></Link>
                        <p className="text-md sm:text-2xl">Jul 23,2020</p>
                </div>
                <div className="flex flex-row space-x-10 sm:space-x-60">
                        <Link href="https://medium.com/@tarushipathak/my-open-source-journey-with-student-code-in-51195dad9d0e"><p className="text-md sm:text-2xl hover:underline">My Open Source Journey with Student Code-IN<br/><span className="italic text-gray-500 text-md">Open Source,Deep Learning</span></p></Link>
                        <p className="text-md sm:text-2xl">Sep 1,2020</p>
                </div>



        </div>
    </>
)

export default Blogs;