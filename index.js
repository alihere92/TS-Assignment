var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// Define the URL of the API
var apiUrl = "https://jsonplaceholder.typicode.com/users";
// Fetch the data from the API
var xhr = new XMLHttpRequest();
xhr.open("GET", apiUrl);
xhr.onload = function () {
    if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        createTable(data);
    }
    else {
        console.error("Failed to fetch data");
    }
};
xhr.onerror = function () {
    console.error("Failed to fetch data");
};
xhr.send();
// Create the table using the data
function createTable(data) {
    var table = document.createElement("table");
    var headerRow = document.createElement("tr");
    var idHeader = document.createElement("th");
    idHeader.textContent = "ID";
    headerRow.appendChild(idHeader);
    var nameHeader = document.createElement("th");
    nameHeader.textContent = "Name";
    headerRow.appendChild(nameHeader);
    var emailHeader = document.createElement("th");
    emailHeader.textContent = "Email";
    headerRow.appendChild(emailHeader);
    var phoneHeader = document.createElement("th");
    phoneHeader.textContent = "Phone";
    headerRow.appendChild(phoneHeader);
    var websiteHeader = document.createElement("th");
    websiteHeader.textContent = "Website";
    headerRow.appendChild(websiteHeader);
    table.appendChild(headerRow);
    data.forEach(function (user) {
        var row = document.createElement("tr");
        var idCell = document.createElement("td");
        idCell.textContent = String(user.id);
        row.appendChild(idCell);
        var nameCell = document.createElement("td");
        nameCell.textContent = user.name;
        row.appendChild(nameCell);
        var emailCell = document.createElement("td");
        emailCell.textContent = user.email;
        row.appendChild(emailCell);
        var phoneCell = document.createElement("td");
        phoneCell.textContent = user.phone;
        row.appendChild(phoneCell);
        var websiteCell = document.createElement("td");
        websiteCell.textContent = user.website;
        row.appendChild(websiteCell);
        table.appendChild(row);
    });
    document.body.appendChild(table);
}
// part 2
function fetchWeatherData(city) {
    return __awaiter(this, void 0, void 0, function () {
        var url, response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "https://api.openweathermap.org/data/2.5/weather?q=".concat(city, "&appid={API key}");
                    return [4 /*yield*/, fetch(url)];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Failed to fetch weather data: ".concat(response.status, " ").concat(response.statusText));
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
// part 3
function parseWeatherData(data) {
    return {
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        feelsLike: data.main.feels_like,
        description: data.weather[0].description,
    };
}
// part 4
function createWeatherTable(data) {
    var table = document.createElement("table");
    // Create header row
    var headerRow = document.createElement("tr");
    var cityHeader = document.createElement("th");
    cityHeader.textContent = "City";
    headerRow.appendChild(cityHeader);
    var countryHeader = document.createElement("th");
    countryHeader.textContent = "Country";
    headerRow.appendChild(countryHeader);
    var tempHeader = document.createElement("th");
    tempHeader.textContent = "Temperature";
    headerRow.appendChild(tempHeader);
    var feelsLikeHeader = document.createElement("th");
    feelsLikeHeader.textContent = "Feels Like";
    headerRow.appendChild(feelsLikeHeader);
    var descriptionHeader = document.createElement("th");
    descriptionHeader.textContent = "Description";
    headerRow.appendChild(descriptionHeader);
    table.appendChild(headerRow);
    // Create data rows
    var dataRow = document.createElement("tr");
    var cityData = document.createElement("td");
    cityData.textContent = data.city;
    dataRow.appendChild(cityData);
    var countryData = document.createElement("td");
    countryData.textContent = data.country;
    dataRow.appendChild(countryData);
    var tempData = document;
}
