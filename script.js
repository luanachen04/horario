function enableDaySelector() {
    var departure = document.getElementById("departure").value;
    var daySelector = document.getElementById("daySelector");

    if (departure !== "") {
        daySelector.disabled = false;
    } else {
        daySelector.disabled = true;
    }

    document.getElementById("schedule-body").innerHTML = "";
    document.getElementById("daySelector").selectedIndex = 0;
}

function changeDay() {
    var selectedDay = document.getElementById("daySelector").value;
    var scheduleBody = document.getElementById("schedule-body");
    var departure = document.getElementById("departure").value;

    scheduleBody.innerHTML = "";

    if (selectedDay === "dias-uteis") {
        if (departure === "terminalmarilia") {
            scheduleBody.innerHTML += `
                <tr>
                    <td>05:40</td>
                    <td>06:40</td>
                    <td>Terminal Marilia</td>
                </tr>
                <tr>
                    <td>06:40</td>
                    <td>07:30</td>
                    <td>Terminal Marilia</td>
                </tr>
                <tr>
                    <td>07:30</td>
                    <td>08:30</td>
                    <td>Terminal Marilia</td>
                </tr>
                <tr>
                    <td>09:00</td>
                    <td>10:00</td>
                    <td>Terminal Marilia</td>
                </tr>
                <tr>
                    <td>11:30</td>
                    <td>12:30</td>
                    <td>Terminal Marilia</td>
                </tr>
                <tr>
                    <td>13:00</td>
                    <td>14:00</td>
                    <td>Terminal Marilia</td>
                </tr>
                <tr>
                    <td>14:30</td>
                    <td>15:30</td>
                    <td>Terminal Marilia</td>
                </tr>
                <tr>
                    <td>16:00</td>
                    <td>17:00</td>
                    <td>Terminal Marilia</td>
                </tr>
                <tr>
                    <td>17:00</td>
                    <td>18:00</td>
                    <td>Terminal Marilia</td>
                </tr>
                <tr>
                    <td>17:20</td>
                    <td>18:20</td>
                    <td>Terminal Marilia</td>
                </tr>
                <tr>
                    <td>18:30</td>
                    <td>19:30</td>
                    <td>Terminal Marilia</td>
                </tr>
                <tr>
                    <td>19:30</td>
                    <td>20:30</td>
                    <td>Terminal Marilia</td>
                </tr>
                
                
            `;
        } else if (departure === "terminalgarca") {
            scheduleBody.innerHTML += `
                <tr>
                    <td>05:40</td>
                    <td>06:40</td>
                    <td>Terminal Garça</td>
                </tr>
                <tr>
                    <td>06:40</td>
                    <td>07:40</td>
                    <td>Terminal Garça</td>
                </tr>
                <tr>
                    <td>06:50</td>
                    <td>07:40</td>
                    <td>Terminal Garça</td>
                </tr>
                <tr>
                    <td>07:40</td>
                    <td>08:40</td>
                    <td>Terminal Garça</td>
                </tr>
                <tr>
                    <td>08:30</td>
                    <td>09:30</td>
                    <td>Terminal Garça</td>
                </tr>
                <tr>
                    <td>10:30</td>
                    <td>11:30</td>
                    <td>Terminal Garça</td>
                </tr>
                <tr>
                    <td>12:00</td>
                    <td>13:00</td>
                    <td>Terminal Garça</td>
                </tr>
                <tr>
                    <td>14:30</td>
                    <td>15:30</td>
                    <td>Terminal Garça</td>
                </tr>
                <tr>
                    <td>15:30</td>
                    <td>16:30</td>
                    <td>Terminal Garça</td>
                </tr>
                <tr>
                    <td>16:30</td>
                    <td>17:20</td>
                    <td>Terminal Garça</td>
                </tr>
                <tr>
                    <td>17:30</td>
                    <td>18:30</td>
                    <td>Terminal Garça</td>
                </tr>
                <tr>
                    <td>18:30</td>
                    <td>19:30</td>
                    <td>Terminal Garça</td>
                </tr>
            `;
        }
    } else if (selectedDay === "sabado") {
        if (departure === "terminalmarilia") {
            scheduleBody.innerHTML += `
                <tr>
                    <td>05:40</td>
                    <td>06:40</td>
                    <td>Terminal Marilia</td>
                </tr>
                <tr>
                    <td>07:30</td>
                    <td>08:30</td>
                    <td>Terminal Marilia</td>
                </tr>
                <tr>
                    <td>09:00</td>
                    <td>10:00</td>
                    <td>Terminal Marilia</td>
                </tr>
                <tr>
                    <td>12:30</td>
                    <td>13:30</td>
                    <td>Terminal Marilia</td>
                </tr>
                <tr>
                    <td>14:30</td>
                    <td>15:30</td>
                    <td>Terminal Marilia</td>
                </tr>
                <tr>
                    <td>17:30</td>
                    <td>18:30</td>
                    <td>Terminal Marilia</td>
                </tr>
                <tr>
                    <td>19:30</td>
                    <td>20:30</td>
                    <td>Terminal Marilia</td>

            `;
        } else if (departure === "terminalgarca") {
            scheduleBody.innerHTML += `
                <tr>
                    <td>05:40</td>
                    <td>06:40</td>
                    <td>Terminal Garça</td>
                </tr>
                <tr>
                    <td>07:40</td>
                    <td>08:40</td>
                    <td>Terminal Garça</td>
                </tr>
                <tr>
                    <td>09:00</td>
                    <td>10:00</td>
                    <td>Terminal Garça</td>
                </tr>
                <tr>
                    <td>10:30</td>
                    <td>11:30</td>
                    <td>Terminal Garça</td>
                </tr>
                <tr>
                    <td>12:00</td>
                    <td>13:00</td>
                    <td>Terminal Garça</td>
                </tr>
                <tr>
                    <td>15:30</td>
                    <td>16:30</td>
                    <td>Terminal Garça</td>
                </tr>
                <tr>
                    <td>17:30</td>
                    <td>18:30</td>
                    <td>Terminal Garça</td>
            `;
        }
    } else if (selectedDay === "domingo") {
        if (departure === "terminalmarilia") {
            scheduleBody.innerHTML += `
                <tr>
                    <td>07:30</td>
                    <td>08:30</td>
                    <td>Terminal Marilia</td>
                </tr>
                <tr>
                    <td>11:00</td>
                    <td>12:00</td>
                    <td>Terminal Marilia</td>
                </tr>
                <tr>
                    <td>16:00</td>
                    <td>17:00</td>
                    <td>Terminal Marilia</td>
                </tr>
                <tr>
                    <td>19:30</td>
                    <td>20:30</td>
                    <td>Terminal Marilia</td>
                </tr>
            `;
        } else if (departure === "terminalgarca") {
            scheduleBody.innerHTML += `
                <tr>
                    <td>05:40</td>
                    <td>06:40</td>
                    <td>Terminal Garça</td>
                </tr>
                <tr>
                    <td>09:00</td>
                    <td>10:00</td>
                    <td>Terminal Garça</td>
                </tr>
                <tr>
                    <td>15:00</td>
                    <td>16:00</td>
                    <td>Terminal Garça</td>
                </tr>
                <tr>
                    <td>17:30</td>
                    <td>18:30</td>
                    <td>Terminal Garça</td>
                </tr>
            `;
        }
    }
}

document.getElementById("visualizarMapaBtn").addEventListener("click", function() {
    var mapaUrl = "https://www.google.com/maps/d/u/0/embed?mid=1MT5YhuN0elixCclPpX9O1FJU4tosKow&ehbc=2E312F&noprof=1";
    var mapaContainer = document.getElementById("mapa-container");
    var mapaIframe = document.getElementById("mapa-iframe");

    if (mapaContainer.style.display === "block") {
        mapaContainer.style.display = "none";
        mapaIframe.src = "";
    } else {
        mapaIframe.src = mapaUrl;
        mapaContainer.style.display = "block";
    }
});
