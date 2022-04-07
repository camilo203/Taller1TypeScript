import {Serie} from "./serie.js"
import {series} from "./data.js"

const coursesTbody: HTMLElement = document.getElementById('series')!;
const containerDiv: HTMLElement = document.getElementById("info")!;
renderCoursesInTable(series)

function renderCoursesInTable(series: Serie[]): void {
    let suma: number = 0;
    let total: number = 0;
    series.forEach(c => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${c.id}</td>
        <td><a href="#" id="${c.name}" onclick="showInfo()">${c.name}</a></td>
        <td>${c.channel}</td>
        <td>${c.seasons}</td>`;
        coursesTbody.appendChild(trElement);
    });
    series.forEach(c => {
        suma += c.seasons;
        total += 1;
    })
    let trElement = document.createElement("tr");
    trElement.innerHTML= `<td colspan="4">Seasons average: ${suma/total}</td>`;
    coursesTbody.appendChild(trElement);

}
