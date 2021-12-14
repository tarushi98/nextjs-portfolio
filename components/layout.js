import Link from 'next/link'
import spotify from '../public/Images/open-graph-default.png'
import Image from 'next/image'
import useSWR from "swr";

const Spotify = () => (
    <Image
        src = {spotify}
        className="rounded-lg"
        alt = "logo"
      />
  );

const fetcher = (url) => fetch(url).then((res) => res.json());
// Getting Current Weather 
function Weather()
{
    const {data,error} = useSWR("/api/weather",fetcher);
    if(data)
    {  
        const weatherData = [data.weather[0].main,data.weather[0].icon,data.main.temp];
        return weatherData;
    }
    
    return "";
    
}
//Restructuring Weather Information
const WeatherStruc = (wdata) => {
    const iconUrl = "http://openweathermap.org/img/w/"+wdata[1]+".png"
    return (
        <>
            <img src={iconUrl} width="30%" height="30%"/>
            <p className="text-md sm:text-xl">{wdata[2]}°C <br/>{wdata[0]}</p>
        </>
)};
// Weather End

const NavBar=()=>{
     var recDesc = Weather();
     if(!recDesc) recDesc = "🙊 गड़बड़";
     else recDesc = WeatherStruc(recDesc);
return (<>
    <div className="flex flex-row justify-between mt-8">
      <nav className="flex flex-row space-x-4">
          <button className="visible border-4 rounded-lg pl-2 pt-2 pb-2 hover:border-black sm:hidden"><img src="https://img.icons8.com/windows/32/000000/menu.png" width="75%"/></button>
          <Link href="/" className="active:text-black"><p className="hidden text-2xl text-gray-500 hover:underline hover:text-black sm:block">Home</p></Link>
          <Link href="/about"><p className="hidden text-2xl text-gray-500 hover:underline hover:text-black sm:block">About</p></Link>
          <Link href="/projects"><p className="hidden text-2xl text-gray-500 hover:underline hover:text-black sm:block">Projects</p></Link>
          <Link href="/blog"><p className="hidden text-2xl text-gray-500 hover:underline hover:text-black sm:block">Blog</p></Link>
          <Link href="/contact"><p className="hidden text-2xl text-gray-500 hover:underline hover:text-black sm:block">Contact</p></Link>
      </nav>
      <div className="flex flex-row space-x-1.5 sm:mr-16">{recDesc}</div>
    </div>
  </>
)
}
const Footer = () =>{
    
        return (

            <>
                <div className="flex flex-row space-x-4 mt-28 sm:ml-10">
                    <div className="w-24 h-10"><Spotify/></div>
                    <p className="text-lg mt-2 text-gray-500">Help Needed!</p>
                </div>

                <div className="border-t-2 border-gray-700 w-80 ml-2 mt-8 sm:ml-10 sm:w-full"/>
                <div className="flex flex-col space-y-4 mt-6 mb-16 ml-10 sm:ml-28">
                        <Link href="/"><p className="text-xl text-gray-500 hover:underline hover:text-black">Home</p></Link>
                        <Link href="https://www.linkedin.com/in/tarushi-pathak-6b7b5b177/"><p className="text-xl text-gray-500 hover:underline hover:text-black">LinkedIn</p></Link>
                        <Link href="https://github.com/tarushi98"><p className="text-xl text-gray-500 hover:underline hover:text-black">Github</p></Link>
                        <Link href="/contact"><p className="text-xl text-gray-500 hover:underline hover:text-black">Contact</p></Link>

                </div>
            </>
        )
}


const Layout = ({children}) =>{
    return (   
        <div className="container">
            <NavBar result = {children.weatherdata} />
                {children}
            <Footer/>
        </div>
    );
}
export default Layout;