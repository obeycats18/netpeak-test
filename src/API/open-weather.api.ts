import { Weather } from "types/open-weather.types";
import { IClient } from "./base.client";

export class OpenWeatherAPI {
  private client: IClient;
  private APP_KEY: string | undefined = process.env.REACT_APP_API_KEY;
  constructor(client: IClient) {
    this.client = client;

    if (!this.APP_KEY) {
      console.error("OpenWeather App ID not found!");
    }
  }

  public async getWeatherByCoords(coords: GeolocationCoordinates) {
    try {
      const weather = await this.client.get<Weather>(
        `weather?lat=${coords.latitude}&lon=${coords.longitude}&units=metric&appid=${this.APP_KEY}`
      );

      return weather;
    } catch (error) {
      if (error.response.status === 404) {
        console.error("Weather not found");
      }
      return {
        status: 404,
        message: "Weather not found",
      };
    }
  }

  public async getWeatherByCity(city: string) {
    try {
      const weather = await this.client.get<Weather>(
        `weather?q=${city}&units=metric&appid=${this.APP_KEY}`
      );

      return weather;
    } catch (error) {
      if (error.response.status === 404) {
        console.error("Weather not found");
      }
      return {
        status: 404,
        message: "Weather not found",
      };
    }
  }
}
