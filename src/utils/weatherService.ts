
import axios from "axios";
import type { WeatherData } from "../types/weather";

const API_KEY = "beabc52ea46bfc195ea5090f3d12d952";

export const fetchCurrentWeather = async (
  city: string,
  lang: string
): Promise<WeatherData> => {
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=${lang}`
  );

  const date = new Date(data.dt * 1000);
  const dayName = date.toLocaleDateString(lang, { weekday: "long" });
  const formattedDate = date.toLocaleDateString(lang, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const time = date.toLocaleTimeString(lang, {
    hour: "2-digit",
    minute: "2-digit",
  });

  // icon mapping based on OpenWeather return
  const icon =
    data.weather[0].main === "Rain"
      ? "rainCloud"
      : data.weather[0].main === "Clouds"
      ? "cloudy"
      : data.weather[0].main === "Thunderstorm"
      ? "storm"
      : "sunny";

  return {
    city: data.name,
    day: dayName,
    date: formattedDate,
    time: time,
    temp: `${Math.round(data.main.temp)}°C`,
    high: `${Math.round(data.main.temp_max)}`,
    low: `${Math.round(data.main.temp_min)}`,
    feelsLike: `${Math.round(data.main.feels_like)}`,
    condition: data.weather[0].description,
    icon,
  };
};
