async function fetchHolidays() {
    const countryCode = document.getElementById("countryCode").value.trim().toUpperCase();
    const year = document.getElementById("year").value.trim();
    const resultDiv = document.getElementById("result");

    resultDiv.innerHTML = "<p>Loading...</p>";

    try {
        const response = await fetch(`/Home/Index?countryCode=${countryCode}&year=${year}`, {
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            }
        });

        if (!response.ok) throw new Error("Request failed");

        const data = await response.json();

        if (data.length === 0) {
            resultDiv.innerHTML = "<p>No holidays found.</p>";
            return;
        }

        let table = `<table class="table table-bordered table-striped table-hover table-sm">
                        <thead class="table-light">
                            <tr>
                                <th>Date</th>
                                <th>Name</th>
                                <th>Local Name</th>
                                <th>Country Code</th>
                                <th>Global</th>
                            </tr>
                        </thead>
                        <tbody>`;

        data.forEach(item => {
            const isoDate = item.date.split("T")[0];
            const parts = isoDate.split("-");
            const formattedDate = `${parts[1]}/${parts[2]}/${parts[0]}`;

            table += `<tr>
                        <td>${formattedDate}</td>
                        <td>${item.name}</td>
                        <td>${item.localName}</td>
                        <td>${item.countryCode}</td>
                        <td><input type="checkbox" ${item.global ? "checked" : ""} disabled></td>
                    </tr>`;
        });

        table += "</tbody></table>";
        resultDiv.innerHTML = table;

    } catch (err) {
        resultDiv.innerHTML = "<p class='text-danger'>Error fetching data.</p>";
    }
}
