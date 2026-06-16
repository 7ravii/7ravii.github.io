document.addEventListener("DOMContentLoaded", function () {

    const mapContainer = document.getElementById("fellowship-map");

    if (!mapContainer) return;

    const map = L.map("fellowship-map");

    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            attribution: "&copy; OpenStreetMap contributors"
        }
    ).addTo(map);

    const fellowships = [

        {
            coords: [12.9716, 77.5946],
            title: "Urban Fellowship Award",
            text: `
                <b>Indian Institute for Human Settlements (IIHS)</b><br>
                Bangalore, India<br>
                2018–2019<br><br>
                Urban governance, planning, ecology and infrastructure.
            `
        },

        {
            coords: [28.6139, 77.2090],
            title: "UGC Senior Research Fellowship",
            text: `
                <b>Government of India</b><br>
                New Delhi, India<br>
                2021–Present<br><br>
                Doctoral research on spatial justice and urban green infrastructure.
            `
        },

        {
            coords: [50.7753, 6.0839],
            title: "IGCS Fellowship – Regenerative Urban Futures",
            text: `
                <b>RWTH Aachen University</b><br>
                Aachen, Germany<br>
                2024<br>
                Fellowship (€2,000)<br><br>
                Regenerative urban futures and sustainability transitions.
            `
        },

        {
            coords: [52.0116, 4.3571],
            title: "Planning and Design for the Just City",
            text: `
                <b>TU Delft</b><br>
                Delft, Netherlands<br>
                2024<br>
                Scholarship (€500)<br><br>
                Spatial justice, planning, governance and urban design.
            `
        },

        {
            coords: [48.2082, 16.3738],
            title: "Urban Space in Tension Between Financialisation and the Right to the City",
            text: `
                <b>Vienna Doctoral School of Social Sciences</b><br>
                Vienna, Austria<br>
                2025<br>
                Travel Grant (€800)<br><br>
                Financialisation, housing and Right to the City.
            `
        },

        {
            coords: [52.3676, 4.9041],
            title: "Amsterdam Complexity School on Climate Change",
            text: `
                <b>University of Amsterdam</b><br>
                Amsterdam, Netherlands<br>
                2026<br>
                Travel Grant (€800)<br><br>
                Complexity science and interdisciplinary climate governance.
            `
        },

        {
            coords: [52.0907, 5.1214],
            title: "Futuring for Sustainability",
            text: `
                <b>Urban Futures Studio, Utrecht University</b><br>
                Utrecht, Netherlands<br>
                2026<br>
                Scholarship (€2,000)<br><br>
                Futures thinking and sustainability transitions.
            `
        },

        {
            coords: [50.9311, 5.3378],
            title: "Reworlding Spring School",
            text: `
                <b>Hasselt University</b><br>
                Hasselt, Belgium<br>
                2026<br><br>
                Institutions, governance and socio-environmental transitions.
            `
        }

    ];

    const group = new L.featureGroup();

    fellowships.forEach(function (f, index) {

        const numberedIcon = L.divIcon({
            className: "",
            html: `
                <div style="
                    background:#3949ab;
                    color:white;
                    width:34px;
                    height:34px;
                    border-radius:50%;
                    line-height:34px;
                    text-align:center;
                    font-weight:bold;
                    font-size:14px;
                    border:2px solid white;
                    box-shadow:0 2px 6px rgba(0,0,0,0.4);
                ">
                    ${index + 1}
                </div>
            `,
            iconSize: [34, 34],
            iconAnchor: [17, 17]
        });

        const marker = L.marker(f.coords, {
            icon: numberedIcon
        })
        .addTo(map)
        .bindPopup(`
            <div style="max-width:320px;">
                <h3 style="margin-top:0; margin-bottom:8px;">
                    ${index + 1}. ${f.title}
                </h3>
                ${f.text}
            </div>
        `);

        group.addLayer(marker);

    });

    map.fitBounds(group.getBounds().pad(0.35));

});