export default async (req,res) =>
{       
        const API_KEY = process.env.WEATHER_API;
        const weather = await fetch("http://api.openweathermap.org/data/2.5/weather?id=1273294&units=metric&appid="+API_KEY);
        const data =  await weather.json();
        return res.status(200).send(data);

}