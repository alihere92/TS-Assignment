// Define the URL of the API
const apiUrl = "https://jsonplaceholder.typicode.com/users";

// Define the shape of the data
interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

// Fetch the data from the API
const xhr = new XMLHttpRequest();
xhr.open("GET", apiUrl);
xhr.onload = () => {
  if (xhr.status === 200) {
    const data: User[] = JSON.parse(xhr.responseText);
    createTable(data);
  } else {
    console.error("Failed to fetch data");
  }
};
xhr.onerror = () => {
  console.error("Failed to fetch data");
};
xhr.send();

// Create the table using the data
function createTable(data: User[]) {
  const table = document.createElement("table");
  const headerRow = document.createElement("tr");
  const idHeader = document.createElement("th");
  idHeader.textContent = "ID";
  headerRow.appendChild(idHeader);
  const nameHeader = document.createElement("th");
  nameHeader.textContent = "Name";
  headerRow.appendChild(nameHeader);
  const emailHeader = document.createElement("th");
  emailHeader.textContent = "Email";
  headerRow.appendChild(emailHeader);
  const phoneHeader = document.createElement("th");
  phoneHeader.textContent = "Phone";
  headerRow.appendChild(phoneHeader);
  const websiteHeader = document.createElement("th");
  websiteHeader.textContent = "Website";
  headerRow.appendChild(websiteHeader);
  table.appendChild(headerRow);
  data.forEach(user => {
    const row = document.createElement("tr");
    const idCell = document.createElement("td");
    idCell.textContent = String(user.id);
    row.appendChild(idCell);
    const nameCell = document.createElement("td");
    nameCell.textContent = user.name;
    row.appendChild(nameCell);
    const emailCell = document.createElement("td");
    emailCell.textContent = user.email;
    row.appendChild(emailCell);
    const phoneCell = document.createElement("td");
    phoneCell.textContent = user.phone;
    row.appendChild(phoneCell);
    const websiteCell = document.createElement("td");
    websiteCell.textContent = user.website;
    row.appendChild(websiteCell);
    table.appendChild(row);
  });
  document.body.appendChild(table);
}
// part 2
async function fetchWeatherData(city: string): Promise<any> {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={API key}`; // Replace {API key} with your API key
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch weather data: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}
// part 3
function parseWeatherData(data: any): any {
  return {
    city: data.name,
    country: data.sys.country,
    temperature: data.main.temp,
    feelsLike: data.main.feels_like,
    description: data.weather[0].description,
  };
}

// part 4
function createWeatherTable(data: any): void {
  const table = document.createElement("table");

  // Create header row
  const headerRow = document.createElement("tr");

  const cityHeader = document.createElement("th");
  cityHeader.textContent = "City";
  headerRow.appendChild(cityHeader);

  const countryHeader = document.createElement("th");
  countryHeader.textContent = "Country";
  headerRow.appendChild(countryHeader);

  const tempHeader = document.createElement("th");
  tempHeader.textContent = "Temperature";
  headerRow.appendChild(tempHeader);

  const feelsLikeHeader = document.createElement("th");
  feelsLikeHeader.textContent = "Feels Like";
  headerRow.appendChild(feelsLikeHeader);

  const descriptionHeader = document.createElement("th");
  descriptionHeader.textContent = "Description";
  headerRow.appendChild(descriptionHeader);

  table.appendChild(headerRow);

  // Create data rows
  const dataRow = document.createElement("tr");

  const cityData = document.createElement("td");
  cityData.textContent = data.city;
  dataRow.appendChild(cityData);

  const countryData = document.createElement("td");
  countryData.textContent = data.country;
  dataRow.appendChild(countryData);

  const tempData = document;