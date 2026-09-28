function showWorking() {

    document.getElementById("working").scrollIntoView({
        behavior: "smooth"
    });

}


function showOutput() {

    const status = document.getElementById("outputStatus");

    status.textContent =
        "✓ Drone construction completed — frame, motors, ESCs, flight controller and power system assembled.";

}