export default class DomController {
  setInnerText = (element, value) => (element.innerText = value);
  setAttribute = (element, value, attribute) =>
    element.setAttribute(attribute, value);

  setTemperature(condition) {
    if (condition) {
      return "°F";
    } else {
      return "°C";
    }
  }
}
