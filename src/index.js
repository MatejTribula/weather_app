import dateModule from "../src/modules/date-module";
import DataController from "../src/modules/data-controller";
import DomController from "../src/modules/dom-controller";

const dataController = new DataController();
const domController = new DomController();

const form = document.querySelector("form");
const input = document.querySelector("input");

const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const img = document.querySelector("img");
const tempButton = document.getElementById("tempButton");
tempButton.innerText = domController.setTemperature(dataController.isFarenheit);

console.log(tempButton);

async function main() {
  replaceDom("Poprad");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    replaceDom(input.value);
    domController.setAttribute(input, "", "value");
  });

  tempButton.addEventListener("click", () => {
    dataController.changeTemperature();
    tempButton.innerText = domController.setTemperature(
      dataController.isFarenheit
    );
  });
}

async function replaceDom(location) {
  const data = await dataController.getWeatherData(location, dateModule());
  domController.setInnerText(h1, data.address);

  if (dataController.isFarenheit) {
    domController.setInnerText(
      h2,
      data.currentConditions.temp +
        " " +
        domController.setTemperature(dataController.isFarenheit)
    );
  } else {
    domController.setInnerText(
      h2,
      Math.round(data.currentConditions.temp - 32) +
        " " +
        domController.setTemperature(dataController.isFarenheit)
    );
  }

  let gifData = await dataController.getBackgroundGif(
    data.currentConditions.conditions
  );

  img.setAttribute("src", gifData);
}

main();
