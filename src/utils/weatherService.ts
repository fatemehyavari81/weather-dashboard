import axios from "axios";
import type { WeatherData } from "../types/weather";

const API_KEY = "beabc52ea46bfc195ea5090f3d12d952";

export const fetchCurrentWeather = async (
  city: string,
  lang: string
): Promise<WeatherData> => {
  const { data } = await axios.get<WeatherData>(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=${lang}`
  );
  return data;
};
