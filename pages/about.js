import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

const TimeLineItem = () => (
        <div>
                    <div className="rounded-full bg-blue-700 h-10 w-10"/>
                    <div className="bg-blue-700 rounded-lg h-24 w-1.5 ml-4 -my-1"/>
        </div>
)

const About = () => (
        <>
            <div className="flex flex-col mt-8 ml-4 space-y-7">
                <p className="font-bold text-5xl">ABOUT</p>
                <p className="text-lg text-gray-500">I am currently pursuing my BTECH in CSE from SRM Institute of Science and Technology,Kattankulathur.skjdkjfkdfkjfksdjfkskfcnvcxk<br/>I am currently pursuing my BTECH in CSE from SRM Institute of Science and Technology,Kattankulathur.skjdkjfkdfkjfksdjfkskfcnvcxk<br/>I am currently pursuing my BTECH in CSE from SRM Institute of Science and Technology,Kattankulathur.skjdkjfkdfkjfksdjfkskfcnvcxk<br/>I am currently pursuing my BTECH in CSE from SRM Institute of Science and Technology,Kattankulathur.skjdkjfkdfkjfksdjfkskfcnvcxk<br/><br/>I am currently pursuing my BTECH in CSE from SRM Institute of Science and Technology,Kattankulathur.skjdkjfkdfkjfksdjfkskfcnvcxk<br/>I am currently pursuing my BTECH in CSE from SRM Institute of Science and Technology,Kattankulathur.skjdkjfkdfkjfksdjfkskfcnvcxk</p>
                <Link href="https://drive.google.com/file/d/1izwjsyAAeZ9e8zKHlwR5yoEzpLFaBiUP/view?usp=sharing"><div className="bg-blue-500 rounded-2xl font-bold text-white h-11 w-28 pl-7 pt-2 hover:bg-black">RESUME</div></Link>
            </div>
            <p className="font-bold text-4xl ml-4 mt-10">TIMELINE</p>
            <div className="flex flex-col">
                <div className="flex flex-row ml-6 mt-10 space-x-2 sm:ml-12">
                    <div>
                        <div className="rounded-full bg-blue-700 h-10 w-10 sm:h-10 sm:w-10"/>
                        <div className="bg-blue-700 rounded-lg h-32 w-1.5 -my-1 ml-4 sm:h-28 sm:w-1.5 "/>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold text-xl sm:text-2xl">💻 Programmer Analyst Intern,</p>
                        <p className="italic text-md text-gray-500 sm:text-lg">Amazon</p>
                        <p className="text-sm text-gray-500 sm:text-lg">Jan 2022 - June 2022</p>
                        <p className="text-gray-500 mt-3 text-md sm:text-lg">Anxiously Waiting For the Internship to Start!</p>
                    </div>
                </div>
                <div className="flex flex-row ml-12 space-x-2">
                    <div>
                        <div className="rounded-full bg-blue-700 h-10 w-10"/>
                        <div className="bg-blue-700 rounded-lg h-24 w-1.5 ml-4 -my-1"/>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold text-2xl">🤖 Machine Learning Intern,</p>
                        <p className="italic text-lg text-gray-500">Pianalytix</p>
                        <p className="text-gray-500">Aug 2020-Oct 2020</p>
                        <p className="text-gray-500 mt-3">Designed their course on Machine Learning and Python.</p>
                    </div>
                </div>
                <div className="flex flex-row ml-12 mt-1 space-x-2">
                    <div>
                        <div className="rounded-full bg-blue-700 h-10 w-10"/>
                        <div className="bg-blue-700 rounded-lg h-32 w-1.5 ml-4 -my-1"/>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold text-2xl">🤖 Machine Learning Research Intern,</p>
                        <p className="italic text-lg text-gray-500">Stir Research</p>
                        <p className="text-gray-500">July 2020 - Aug 2020</p>
                        <p className="text-gray-500 mt-3">Contributed to three research projects and saw them through to completion.<br/> Two of them have been published in Indian Journal of Data Mining and ADCAIJ</p>
                    </div>
                </div>
                <div className="flex flex-row ml-12 mt-1 space-x-2">
                    <div>
                        <div className="rounded-full bg-blue-700 h-10 w-10"/>
                        <div className="bg-blue-700 rounded-lg h-32 w-1.5 ml-4 -my-1"/>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold text-2xl">🤖 Machine Learning Intern,</p>
                        <p className="italic text-lg text-gray-500">Sufa Media Digital</p>
                        <p className="text-gray-500">Feb 2020 - April 2020</p>
                        <p className="text-gray-500 mt-3">Completed 6 projects related to ML algorithms,CNN, DNN, Time Series Analysis and OpenCV. </p>
                    </div>
                </div>
                <div className="flex flex-row ml-12 mt-1 space-x-2">
                    <div>
                        <div className="rounded-full bg-blue-700 h-10 w-10"/>
                        <div className="bg-blue-700 rounded-lg h-28 w-1.5 ml-4 -my-1"/>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold text-2xl">🎓 Started College At SRM Institute of Science and Technology,KTR,</p>
                        <p className="italic text-lg text-gray-500">BTech Computer Science Engineering with Specialization in Software</p>
                        <p className="text-gray-500">2018-2022</p>
                        <p className="text-gray-500 mt-3">Currently in my final year with a CGPA of 9.24</p>
                    </div>
                </div>
                <div className="flex flex-row ml-12 mt-1 space-x-2">
                    <div>
                        <div className="rounded-full bg-blue-700 h-10 w-10"/>
                        <div className="bg-blue-700 rounded-lg h-32 w-1.5 ml-4 -my-2"/>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold text-2xl">🎒 Graduated From St. Mark’s Senior Secondary Public School,New Delhi,</p>
                        <p className="italic text-lg text-gray-500">CBSE Boards Class 10th And 12th</p>
                        <p className="text-gray-500">2006-2018</p>
                        <p className="text-gray-500 mt-3">Graduated from school with 87.75% in my 12th Boards and a 9.6 GPA in class 10th.<br/>
Was also Editor In Chief for the school newsletter and magazine and a won multiple awards.</p>
                    </div>
                </div>
            </div>

            <p className="font-bold text-4xl ml-5 mt-16 mb-5">AWARDS 🏆</p>
            <div className="flex flex-col space-y-1 ml-12">
                    <p className="text-xl text-gray-500">🥇 First Prize in SRMHACK3.0 Hackathon</p>
                    <p className="text-xl text-gray-500">🏅 Top 15 Finalists in SLAC2.O Hackathon</p>
                    <p className="text-xl text-gray-500">🏅 Top 10 Contributors in Student CodeIn Open Source Event</p>
                    <p className="text-xl text-gray-500">🥈 Second Prize in CyberCash at Jesus & Mary College,DU</p>
            </div>
            
            <p className="font-bold text-4xl ml-4 mt-16 mb-5">PUBLICATIONS 📑</p>
            <div className="flex flex-col space-y-2 ml-12">
                    <div className="flex flex-col space-y-1">
                            <p className="text-xl">🤖 Deep Convolutional Generative Modelling for Artificial Microstructure Development
        of Aluminium - Silicon Alloy,  Indian Journal of Data Mining,</p>
                            <Link href="https://arxiv.org/pdf/2109.06635.pdf"><p className="italic text-lg text-gray-500 hover:underline">Check it out</p></Link>
                    </div>
                    <div className="flex flex-col space-y-1">
                    <p className="text-xl">🤖 Estimation of Grain Size Distribution of Friction Stir Welded Joint by using Machine Learning Approach,ADCAIJ</p>
                    <Link href="https://revistas.usal.es/index.php/2255-2863/article/view/ADCAIJ202110199110/25781"><p className="italic text-lg text-gray-500 hover:underline">Check it out</p></Link>
                    </div>
            </div>
        </>
)

export default About;