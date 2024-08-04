export default class DataController {
  constructor() {
    this.isFarenheit = true;
  }

  async getWeatherData(location, date) {
    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${date}?key=DEWQSJ6H7SCKKWLFNGX5BVKXH`
      );
      const data = await response.json();

      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getBackgroundGif(string) {
    try {
      const searchTerm = string.replace(/ /g, "+");
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/translate?api_key=E4ONMDAnzOKQo3E6R2yKAarLeNDzFFQy&s=${searchTerm}`
      );

      const data = await response.json();

      console.log(data.data.images.original.url);
      return data.data.images.original.url;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  changeTemperature() {
    if (this.isFarenheit) {
      this.isFarenheit = false;
    } else {
      this.isFarenheit = true;
    }
  }
}
