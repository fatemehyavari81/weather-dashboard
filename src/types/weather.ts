export type WeatherIconType = "cloudy" | "sunny" | "rainCloud" | "storm";

export interface WeatherData {
  city: string;
  day: string;
  date: string;
  time: string;
  temp: string; 
  high: string;
  low: string;
  feelsLike: string;
  condition: string;
  icon: WeatherIconType;
}
