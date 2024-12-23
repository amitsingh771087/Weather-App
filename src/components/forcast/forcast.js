import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forcast.css";

const WEEK_DAY = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forcast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forcastday = WEEK_DAY.slice(dayInAWeek).concat(
    WEEK_DAY.slice(0, dayInAWeek)
  );
  
  console.log(forcastday);

  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    className="icon-small"
                    alt="weather"
                  />
                  <label  className="day">{forcastday[idx]}</label>
                  <label  className="description">{item.weather[0].description}</label>
                  <label  className="min-max">{Math.round(item.main.temp_min)}°C /{" "} {Math.round(item.main.temp_max)}°C</label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <div className="daily-details-grid">
                    <div className="daily-details-grid-item">
                        <label >Pressure</label>
                        <label >{item.main.pressure} hPa</label>
                    </div>
                </div>
                <div className="daily-details-grid">
                    <div className="daily-details-grid-item">
                        <label >Humidity</label>
                        <label >{item.main.humidity}%</label>
                    </div>
                </div>
                <div className="daily-details-grid">
                    <div className="daily-details-grid-item">
                        <label >Clouds</label>
                        <label >{item.clouds.all}%</label>
                    </div>
                </div>
                <div className="daily-details-grid">
                    <div className="daily-details-grid-item">
                        <label >Wind Speed</label>
                        <label >{item.wind.speed}m/s</label>
                    </div>
                </div>
                <div className="daily-details-grid">
                    <div className="daily-details-grid-item">
                        <label >Sea Level</label>
                        <label >{item.main.sea_level}m</label>
                    </div>
                </div>
                <div className="daily-details-grid">
                    <div className="daily-details-grid-item">
                        <label >Feels Like</label>
                        <label >{Math.round(item.main.feels_like)}°C</label>
                    </div>
                </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forcast;
