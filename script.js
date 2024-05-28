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
        if (departure === "terminal") {
            scheduleBody.innerHTML += `
                <tr>
                    <td>07:00</td>
                    <td>Terminal Urbano</td>
                </tr>
                <tr>
                    <td>07:45</td>
                    <td>Terminal Urbano</td>
                </tr>
                <tr>
                    <td>08:35</td>
                    <td>Terminal Urbano</td>
                </tr>
                <tr>
                    <td>09:25</td>
                    <td>Terminal Urbano</td>
                </tr>
                <tr>
                    <td>10:15</td>
                    <td>Terminal Urbano</td>
                </tr>
                <tr>
                    <td>11:00</td>
                    <td>Terminal Urbano</td>
                </tr>
                <tr>
                    <td>11:50</td>
                    <td>Terminal Urbano</td>
                </tr>
                <tr>
                    <td>12:40</td>
                    <td>Terminal Urbano</td>
                </tr>
                <tr>
                    <td>13:30</td>
                    <td>Terminal Urbano</td>
                </tr>
                <tr>
                    <td>14:20</td>
                    <td>Terminal Urbano</td>
                </tr>
                <tr>
                    <td>15:10</td>
                    <td>Terminal Urbano</td>
                </tr>
                <tr>
                    <td>16:10</td>
                    <td>Terminal Urbano</td>
                </tr>
                <tr>
                    <td>17:00</td>
                    <td>Terminal Urbano</td>
                </tr>
                <tr>
                    <td>17:50</td>
                    <td>Terminal Urbano</td>
                </tr>
                <tr>
                    <td>18:40</td>
                    <td>Terminal Urbano</td>
                </tr>
                <tr>
                    <td>20:00</td>
                    <td>Terminal Urbano</td>
                </tr>
                <tr>
                    <td>21:30</td>
                    <td>Terminal Urbano</td>
                </tr>
                <tr>
                    <td>23:00</td>
                    <td>Terminal Urbano</td>
                </tr>
                <tr>
                    <td>23:50</td>
                    <td>Terminal Urbano</td>
                </tr>
            `;
        } else if (departure === "castelobranco") {
            scheduleBody.innerHTML += `
                <tr>
                    <td>06:35</td>
                    <td>Castelo Branco</td>
                </tr>
                <tr>
                    <td>07:25</td>
                    <td>Castelo Branco</td>
                </tr>
                <tr>
                    <td>08:10</td>
                    <td>Castelo Branco</td>
                </tr>
                <tr>
                    <td>09:00</td>
                    <td>Castelo Branco</td>
                </tr>
                <tr>
                    <td>09:50</td>
                    <td>Castelo Branco</td>
                </tr>
                <tr>
                    <td>10:40</td>
                    <td>Castelo Branco</td>
                </tr>
                <tr>
                    <td>11:25</td>
                    <td>Castelo Branco</td>
                </tr>
                <tr>
                    <td>12:15</td>
                    <td>Castelo Branco</td>
                </tr>
                <tr>
                    <td>13:05</td>
                    <td>Castelo Branco</td>
                </tr>
                <tr>
                    <td>13:55</td>
                    <td>Castelo Branco</td>
                </tr>
                <tr>
                    <td>14:45</td>
                    <td>Castelo Branco</td>
                </tr>
                <tr>
                    <td>15:35</td>
                    <td>Castelo Branco</td>
                </tr>
                <tr>
                    <td>16:35</td>
                    <td>Castelo Branco</td>
                </tr>
                <tr>
                    <td>17:25</td>
                    <td>Castelo Branco</td>
                </tr>
                <tr>
                    <td>18:15</td>
                    <td>Castelo Branco</td>
                </tr>
                <tr>
                    <td>19:05</td>
                    <td>Castelo Branco</td>
                </tr>
                <tr>
                    <td>20:20</td>
                    <td>Castelo Branco</td>
                </tr>
                <tr>
                    <td>21:20</td>
                    <td>Castelo Branco</td>
                </tr>
                <tr>
                    <td>21:50</td>
                    <td>Castelo Branco</td>
                </tr>
                <tr>
                    <td>23:20</td>
                    <td>Castelo Branco</td>
                </tr>
            `;
        }
    } else if (selectedDay === "sabado") {
        if (departure === "terminal") {
            scheduleBody.innerHTML += `
                <tr>
                    <td>07:00</td>
                    <td>Terminal Urbano</td>
                </tr>
                <tr>
                    <td>09:00</td>
                    <td>Terminal Urbano</td>
                </tr>
                <tr>
                    <td>11:00</td>
                    <td>Terminal Urbano</td>
                </tr>
                <tr>
                    <td>13:00</td>
                    <td>Terminal Urbano</td>
                </tr>
                <tr>
                    <td>15:00</td>
                    <td>Terminal Urbano</td>
                </tr>
                <tr>
                    <td>16:10</td>
                    <td>Terminal Urbano</td>
                </tr>
                <tr>
                    <td>18:05</td>
                    <td>Terminal Urbano</td>
                </tr>
                <tr>
                    <td>20:00</td>
                    <td>Terminal Urbano</td>
                </tr>
                <tr>
                    <td>22:00</td>
                    <td>Terminal Urbano</td>
                </tr>

            `;
        } else if (departure === "castelobranco") {
            scheduleBody.innerHTML += `
                <tr>
                    <td>06:05</td>
                    <td>Castelo Branco</td>
                </tr>
                <tr>
                    <td>07:25</td>
                    <td>Castelo Branco</td>
                </tr>
                <tr>
                    <td>09:25</td>
                    <td>Castelo Branco</td>
                </tr>
                <tr>
                    <td>11:25</td>
                    <td>Castelo Branco</td>
                </tr>
                <tr>
                    <td>13:25</td>
                    <td>Castelo Branco</td>
                </tr>
                <tr>
                    <td>15:25</td>
                    <td>Castelo Branco</td>
                </tr>
                <tr>
                    <td>16:35</td>
                    <td>Castelo Branco</td>
                </tr>
                <tr>
                    <td>18:30</td>
                    <td>Castelo Branco</td>
                </tr>
                <tr>
                    <td>20:25</td>
                    <td>Castelo Branco</td>
                </tr>
                <tr>
                    <td>22:25</td>
                    <td>Castelo Branco</td>
                </tr>
            `;
        }
    } else if (selectedDay === "domingo") {
        if (departure === "terminal") {
            scheduleBody.innerHTML += `
                <tr>
                    <td>05:30</td>
                    <td>Terminal Urbano</td>
                </tr>
                <tr>
                    <td>07:00</td>
                    <td>Terminal Urbano</td>
                </tr>
                <tr>
                    <td>12:00</td>
                    <td>Terminal Urbano</td>
                </tr>
                <tr>
                    <td>15:00</td>
                    <td>Terminal Urbano</td>
                </tr>
                <tr>
                    <td>16:10</td>
                    <td>Terminal Urbano</td>
                </tr>
                <tr>
                    <td>18:05</td>
                    <td>Terminal Urbano</td>
                </tr>
                <tr>
                    <td>20:00</td>
                    <td>Terminal Urbano</td>
                </tr>
                <tr>
                    <td>22:00</td>
                    <td>Terminal Urbano</td>
                </tr>
                <tr>
                    <td>23:50</td>
                    <td>Terminal Urbano</td>
                </tr>
            `;
        } else if (departure === "castelobranco") {
            scheduleBody.innerHTML += `
                <tr>
                    <td>05:55</td>
                    <td>Castelo Branco</td>
                </tr>
                <tr>
                    <td>07:25</td>
                    <td>Castelo Branco</td>
                </tr>
                <tr>
                    <td>09:25</td>
                    <td>Castelo Branco</td>
                </tr>
                <tr>
                    <td>12:25</td>
                    <td>Castelo Branco</td>
                </tr>
                <tr>
                    <td>15:25</td>
                    <td>Castelo Branco</td>
                </tr>
                <tr>
                    <td>16:35</td>
                    <td>Castelo Branco</td>
                </tr>
                <tr>
                    <td>18:30</td>
                    <td>Castelo Branco</td>
                </tr>
                <tr>
                    <td>20:25</td>
                    <td>Castelo Branco</td>
                </tr>
                <tr>
                    <td>22:25</td>
                    <td>Castelo Branco</td>
                </tr>
            `;
        }
    }
}
