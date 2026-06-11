function submitRequest() {
    // Kuchukua data kutoka kwenye fomu
    const origin = document.getElementById('origin').value;
    const weightClass = document.getElementById('weightClass').value;
    const destination = document.getElementById('destination').value.trim();
    const shippingLine = document.getElementById('shippingLine').value;

    // Uhakiki wa eneo la mwisho
    if (destination === "") {
        alert("Tafadhali jaza eneo mzigo unakoenda!");
        return;
    }

    // Smart Matching Logic (Ulinganishaji wa Gari)
    let assignedTruck = "";
    if (weightClass === '20ft_heavy' || weightClass === '40ft') {
        assignedTruck = "SEMI-TRAILER (Double Diff)";
    } else {
        assignedTruck = "SINGLE-DIFF TRUCK";
    }

    // Kuandaa ujumbe wa data (Utakaotumwa kwenye server baadaye)
    const requestData = {
        kutoka: origin,
        uzito: weightClass,
        marudio: destination,
        yadi_empty: shippingLine,
        aina_gari: assignedTruck,
        muda: new Date().toISOString()
    };

    // Kuonyesha matokeo kwenye fomu (Console log kwa ajili ya usalama)
    console.log("DCE Request Data Submitted:", requestData);

    // Taarifa kwa Wakala
    alert(
        `Ombi Limepokelewa!\n\n` +
        `Kutoka: ${origin}\n` +
        `Kwenda: ${destination}\n` +
        `Aina ya Lori linalotafutwa: ${assignedTruck}\n\n` +
        `Mfano wa IVR unaanza kupiga kwa madereva wa ${assignedTruck}...`
    );
    
    // Hapa mbele tutaweka kodi ya Fetch API kuunganisha na Backend
}
