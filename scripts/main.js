import { series } from "./data.js";
var coursesTbody = document.getElementById('series');
var containerDiv = document.getElementById("info");
renderCoursesInTable(series);
function renderCoursesInTable(series) {
    var suma = 0;
    var total = 0;
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.id, "</td>\n        <td><a href=\"#\" id=\"").concat(c.name, "\" onclick=\"showInfo()\">").concat(c.name, "</a></td>\n        <td>").concat(c.channel, "</td>\n        <td>").concat(c.seasons, "</td>");
        coursesTbody.appendChild(trElement);
    });
    series.forEach(function (c) {
        suma += c.seasons;
        total += 1;
    });
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td colspan=\"4\">Seasons average: ".concat(suma / total, "</td>");
    coursesTbody.appendChild(trElement);
}
