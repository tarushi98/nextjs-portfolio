import Link from 'next/link'
import homeStyles from './CSS/home.module.css'

const Projects = () => (

        <>
            <p className="font-bold text-5xl mt-8 ml-4">PROJECTS</p>
            <div className="grid grid-rows-9 sm:grid-cols-3 gap-y-4 mt-8 ml-5">
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
                <div className={homeStyles.gradient}>
                    <p className="text-lg p-4 sm:text-xl sm:mt-2">Dump It:<br/> A New Way of Dealing With Medical Trash </p>
                    <div className="flex flex-row space-x-2 p-4 -my-2 sm:my-8">
                        <img src="https://img.icons8.com/windows/32/000000/github.png"/>    
                        <Link href="https://github.com/tarushi98/DUMPIT-STREAMR"><p className="text-lg sm:text-xl hover:underline">Visit Github</p></Link>
                    </div>
              </div>
              <div className={homeStyles.gradient}>
                    <p className="text-lg p-4 sm:text-xl sm:mt-2">Asteroid Detection:<br/>Identifying Potentially Hazardous Asteroids Using Machine Learning</p>
                    <div className="flex flex-row space-x-2 p-4 -my-2 sm:my-1">
                        <img src="https://img.icons8.com/windows/32/000000/github.png"/> 
                        <Link href="https://github.com/tarushi98/Asteroid-Detection"><p className="text-lg sm:text-xl hover:underline">Visit Github</p></Link>
                    </div>
              </div>
              <div className={homeStyles.gradient}>
                  <p className="text-lg p-4 sm:text-xl sm:mt-2">Website Portfolio:<br/>This Website which you are currently on </p>
                  <div className="flex flex-row space-x-2 p-4 -my-2 sm:my-7">
                        <img src="https://img.icons8.com/ios-glyphs/30/000000/domain.png"/>
                        <Link href="/"><p className="text-lg sm:text-xl hover:underline">Visit HomePage</p></Link>
                  </div>
              </div>
              <div className={homeStyles.gradient}>
                    <p className="text-lg p-4 sm:text-xl sm:mt-2">AQI Delhi vs Chennai:<br/> Identified Pollutants Responsible for Severe AQI in Delhi & Made Predictions using ML </p>
                    <div className="flex flex-row space-x-2 p-4 -my-2 sm:-my-2">
                        <img src="https://img.icons8.com/windows/32/000000/github.png"/>
                        <Link href="https://github.com/tarushi98/AQI-Delhi-Vs-Chennai"><p className="text-lg sm:text-xl hover:underline">Visit Github</p></Link>
                    </div>
              </div>
              <div className={homeStyles.gradient}>
                    <p className="text-md p-4 sm:text-xl sm:mt-2">Get My Bus:<br/>Predicted Total Buses Required Each Day Using LSTM </p>
                    <div className="flex flex-row space-x-2 p-4 -my-2 sm:my-4">
                        <img src="https://img.icons8.com/windows/32/000000/github.png"/>
                        <Link href="https://github.com/tarushi98/PredictingBusesRequiredLSTM"><p className="text-lg sm:text-xl hover:underline">Visit Github</p></Link>
                    </div>
              </div>
              <div className={homeStyles.gradient}>
                  <p className="text-lg p-4 sm:text-xl sm:mt-2">AgriventureX:<br/> A Mobile App that guides farmers throughout the crop cycle  </p>
                  <div className="flex flex-row space-x-2 p-4 -my-2 sm:my-4">
                        <img src="https://img.icons8.com/windows/32/000000/github.png"/>
                        <Link href="https://github.com/tarushi98/SheHacks-AgriventureX"><p className="text-lg sm:text-xl hover:underline">Visit Github</p></Link>
                  </div>
              </div>
            </div>
        </>
)

export default Projects;