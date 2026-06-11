function submitRequest() {
    // Kusanya data kutoka kwenye form
    const origin = document.getElementById('origin').value;
    const weightClass = document.getElementById('weightClass').value;
    const destination = document.getElementById('destination').value;
    const shippingLine = document.getElementById('shippingLine').value;

    if (destination === "") {
        alert("Tafadhali jaza eneo unakoenda!");
        return;
    }

    // Logic ya kuchagua gari (Matching Logic)
    let assignedTruck = "";
    if (weightClass === '20ft_heavy' || weightClass === '40ft') {
        assignedTruck = "SEMI-TRAILER (Double Diff)";
    } else {
        assignedTruck = "SINGLE-DIFF TRUCK";
    }

    // Hapa ndipo tunatuma data kwenye database/server
    console.log("Ombi Jipya:", { origin, weightClass, destination, shippingLine, assignedTruck });

    alert("Ombi limetumwa kwa mafanikio! Mfumo unatafuta gari la aina: " + assignedTruck);
    
    // Baada ya hapa, mfumo utapiga simu ya IVR kwa dereva
}
