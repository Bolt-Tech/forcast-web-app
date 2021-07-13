import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastCard from "./UI/ForecastCard";
import DataTable from "./UI/ForecastTable";
import UpdateIcon from "@material-ui/icons/Update";
//import { Styles } from "@material-ui/core/styles/withStyles";

function Forecast() {
  //Location & Current day
  const [locationID, setLocationID] = useState("");
  const [currStats, setCurrStats] = useState([]);
  const [degreeType, setDegreeType] = useState([]);
  const [lastUpdated, setLastUpdated] = useState("");
  //Grid Forecast statistics
  const [getFeelsLike, setFeelsLike] = useState([]);
  const [windSpeed, setWindSpeed] = useState("");
  const [getVisibility, setVisibility] = useState("");
  const [getHumidity, setHumidity] = useState("");
  const [getPressure, setPressure] = useState("");
  //Forecast days [0-3] temperature for Table
  const [date_Days, set_Date_Days] = useState([]);
  const [C_Days, set_C_Days] = useState([]);
  const [F_days, set_F_Days] = useState([]);
  const [avgHumidity, setAvgHumidity] = useState([]);
  const [Text_days, set_Text_Days] = useState([]);
  const [Icon_days, set_Icon_Days] = useState([]);

  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
    params: { q: "Tel Aviv", days: "3" },
    headers: {
      "x-rapidapi-key": "aafb68a249msh1fc4bb6651e3434p103a2ajsn3c04f4b307d6",
      "x-rapidapi-host": "weatherapi-com.p.rapidapi.com"
    }
  };

  useEffect(() => {
    axios
      .request(options)
      .then((response) => {
        console.log(response.data); //Displays all forcast data log for debugging

        //Assigning response data to a new variable, then pick objects names
        //of API inside hooks, e.g: <new variable name>.<api object name>
        let dataLocation = response.data.location;
        let dataCurrent = response.data.current;
        let dataFCST = response.data.forecast;
        //Main location card container
        setLocationID(dataLocation.name);
        setCurrStats([dataCurrent.condition.icon, dataCurrent.condition.text]);
        setDegreeType([dataCurrent.temp_c, dataCurrent.temp_f]);
        setLastUpdated(dataCurrent.last_updated);
        //Grid 5 status
        setFeelsLike([dataCurrent.feelslike_c, dataCurrent.feelslike_f]);
        setWindSpeed(dataCurrent.wind_kph);
        setVisibility(dataCurrent.vis_km);
        setHumidity(dataCurrent.humidity);
        setPressure(dataCurrent.pressure_mb);
        //Forecast 3 days (index [0-2]) temperature statistic
        set_Date_Days([
          dataFCST.forecastday[0].date,
          dataFCST.forecastday[1].date,
          dataFCST.forecastday[2].date
        ]);
        set_C_Days([
          dataFCST.forecastday[0].day.avgtemp_c,
          dataFCST.forecastday[1].day.avgtemp_c,
          dataFCST.forecastday[2].day.avgtemp_c
        ]);
        set_F_Days([
          dataFCST.forecastday[0].day.avgtemp_f,
          dataFCST.forecastday[1].day.avgtemp_f,
          dataFCST.forecastday[2].day.avgtemp_f
        ]);
        setAvgHumidity([
          dataFCST.forecastday[0].day.avghumidity,
          dataFCST.forecastday[1].day.avghumidity,
          dataFCST.forecastday[2].day.avghumidity
        ]);
        set_Text_Days([
          dataFCST.forecastday[0].day.condition.text,
          dataFCST.forecastday[1].day.condition.text,
          dataFCST.forecastday[2].day.condition.text
        ]);
        set_Icon_Days([
          dataFCST.forecastday[0].day.condition.icon,
          dataFCST.forecastday[1].day.condition.icon,
          dataFCST.forecastday[2].day.condition.icon
        ]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const iconStyle = {
    minWidth: 100,
    minHeight: 100,
    position: "relative",
    margin: "0px auto"
  };

  return (
    <div>
      <ForecastCard
        IconStats={
          <img style={iconStyle} src={currStats[0]} alt={currStats[1]} />
        }
        WeatherLocation={locationID}
        TempStatus={`${degreeType[0]}°C | ${degreeType[1]}°F`}
        updatedIcon={<UpdateIcon />}
        updated={`Last Updated: ${lastUpdated} `}
        //Grid
        feelsLike={`${getFeelsLike[0]}°C | ${getFeelsLike[1]}°F`}
        wind={`${windSpeed} km/h`}
        visibility={`${getVisibility} km`}
        humidity={`${getHumidity}%`}
        pressure={`${getPressure} mb`}
        referLink="https://www.msn.com/en-us/weather"
      />
      <DataTable
        date_D1={`Today ${date_Days[0]}`}
        date_D2={`${date_Days[1]}`}
        date_D3={`${date_Days[2]}`}
        tempC_D1={`${C_Days[0]}${"\u00b0"}`}
        tempC_D2={`${C_Days[1]}${"\u00b0"}`}
        tempC_D3={`${C_Days[2]}${"\u00b0"}`}
        tempF_D1={`${F_days[0]}${"\u00b0"}`}
        tempF_D2={`${F_days[1]}${"\u00b0"}`}
        tempF_D3={`${F_days[2]}${"\u00b0"}`}
        humidity_D1={`${avgHumidity[0]}%`}
        humidity_D2={`${avgHumidity[1]}%`}
        humidity_D3={`${avgHumidity[2]}%`}
        statsText_D1={Text_days[0]}
        statsText_D2={Text_days[1]}
        statsText_D3={Text_days[2]}
        statsIcon_D1={<img src={Icon_days[0]} alt={Text_days[0]} />}
        statsIcon_D2={<img src={Icon_days[1]} alt={Text_days[1]} />}
        statsIcon_D3={<img src={Icon_days[2]} alt={Text_days[2]} />}
      />
    </div>
  );
}

export default Forecast;
