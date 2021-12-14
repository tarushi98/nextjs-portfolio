import Link from 'next/link'

const Contact = () =>(
        <>
                <div className="rounded-lg bg-blue-700 mt-16 pb-16 sm:ml-20 sm:w-9/12">
                    <p className="font-bold text-2xl text-white pt-10 pl-10 pr-10">DON&apos;T BE SHY , SAY HI! 🐨</p>
                    <p className="text-md text-white pl-10 pr-10 pt-8">NAME</p>
                    <input className="ml-10  w-1/2 p-3 rounded-sm placeholder-gray-500 placeholder-opacity-75" placeholder="Regina Phalenge" type="name" id="email" />
                    <p className="text-md text-white pl-10 pr-10 pt-4">EMAIL</p>
                    <input className="ml-10  w-1/2 p-3 rounded-sm placeholder-gray-500 placeholder-opacity-75" placeholder="user@example.com" type="name" id="email" />
                    <p className="text-md text-white pl-10 pr-10 pt-4">MESSAGE</p>
                    <input className="ml-10 w-4/5 p-16 rounded-sm placeholder-gray-500 placeholder-opacity-75" type="name" id="email" />
                    <div className="ml-36 mt-10 bg-black rounded-xl font-bold text-white w-14 h-5 pl-4 text-xs sm:w-20 sm:h-8 sm:text-sm sm:pt-1 sm:ml-72 sm:pl-6 hover:bg-green">SEND</div>

                </div>
        </>
)

export default Contact;