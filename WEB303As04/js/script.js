/*
    Assignment #4
    Hannan Salis
*/

$(function () {
    // Check if geolocation is supported by the browser
    if ("geolocation" in navigator) {
        // Request geolocation permission
        navigator.geolocation.getCurrentPosition(function(position) {
            // Get current coordinates
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const accuracy = position.coords.accuracy;

            // Display current location in the div#locationhere
            $("#locationhere").text(`Latitude: ${latitude}, Longitude: ${longitude} (Accuracy: ${accuracy} meters)`);

            // Check if a location is stored in local storage
            const storedLocation = localStorage.getItem("userLocation");

            if (storedLocation) {
                // Convert stored location to an object
                const storedLocationObj = JSON.parse(storedLocation);

                // Calculate distance between current and stored location
                const distance = calcDistanceBetweenPoints(
                    latitude,
                    longitude,
                    storedLocationObj.latitude,
                    storedLocationObj.longitude
                );

                // Display welcome message for returning visitors
                $("#welcome-message").text("Welcome back to the page!");
                $("#distance-traveled").text(`You traveled ${distance.toFixed(2)} meters since your last visit.`);

                // Display stored location
                $("#stored-location").text(`Stored Location: Latitude: ${storedLocationObj.latitude}, Longitude: ${storedLocationObj.longitude}`);
                $("#stored-location").show();
            } else {
                // Display welcome message for first-time visitors
                $("#welcome-message").text("Welcome to the page for the first time!");
            }

            // Store current location in local storage
            const currentLocation = {
                latitude,
                longitude
            };
            localStorage.setItem("userLocation", JSON.stringify(currentLocation));
        }, function(error) {
            // Handle geolocation error
            $("#error-message").text("Geolocation permission denied. Please allow geolocation to use the application.");
            $("#error-message").show();
        });
    } else {
        // Geolocation not supported
        $("#error-message").text("Geolocation is not supported by your browser.");
        $("#error-message").show();
    }

    // Function to calculate distance between two coordinates in meters
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        const R = 6371; // Earth's radius in kilometers
        const dLat = (lat2 - lat1) * (Math.PI / 180);
        const dLon = (lon2 - lon1) * (Math.PI / 180);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c * 1000; // Convert to meters
        return distance;
    }
});

