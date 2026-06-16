document.addEventListener("DOMContentLoaded", function () {

    const mapContainer = document.getElementById("fellowship-map");

    if (!mapContainer) return;

    const map = L.map("fellowship-map").setView([30, 20], 3);

    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            attribution: "&copy; OpenStreetMap contributors"
        }
    ).addTo(map);

    const fellowships = [

        {
            coords: [52.0907, 5.1214],
            title: "UFS Futuring Summer School",
            text: "Utrecht University • 2026 • €2,000"
        },

        {
            coords: [52.3676, 4.9041],
            title: "Amsterdam Complexity School",
            text: "Travel Grant • 2026 • €800"
        },

        {
            coords: [48.2082, 16.3738],
            title: "Vienna Doctoral School",
            text: "Travel Grant • 2025 • €800"
        },

        {
            coords: [50.7753, 6.0839],
            title: "IGCS Fellowship",
            text: "RWTH Aachen • 2024 • €2,000"
        },

        {
            coords: [52.0116, 4.3571],
            title: "TU Delft Summer School",
            text: "Scholarship • 2024 • €500"
        },

        {
            coords: [28.6139, 77.2090],
            title: "UGC Senior Research Fellowship",
            text: "Government of India • 2021–Present"
        },

        {
            coords: [12.9716, 77.5946],
            title: "Urban Fellowship Award",
            text: "IIHS Bangalore • 2018–2019"
        }

    ];

    fellowships.forEach(function(f) {

        L.marker(f.coords)
            .addTo(map)
            .bindPopup(
                `<b>${f.title}</b><br>${f.text}`
            );

    });

});