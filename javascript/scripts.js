function  showform(service) {
    let formArea = document.getElementById("service-form");
    let formTitle = "";}
    if (service === 'refill') {
    formTitle = "Gas Refill Request";
}
else if (service === "exchangee") {
    formTitle = "Gas Exchange Request";
}
else if (service === "emergency") {
    formTitle = "Emergency Gas Delivery Request";
}
formArea.innerHTML = <h2>$(formTitle)</h2>
<form>
    <label>Full Name:</label>
    <input type="text"
    placeholder="Enter your name" required>
        <label>Phone Number:</label>
        <input type="tel"
        placeholder="Enter your phone number" required>
            <label>Delivery Address:</label>
            <input type="text"placeholder="Enter your address"required>
            <button type="submit">Request</button>
            </form>';
            formArea.scrollIntoView({behavior: "smooth"});
