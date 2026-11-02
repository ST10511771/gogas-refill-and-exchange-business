function  showform(service) {
    let formArea = document.getElementById("service-form");}

    if (service === 'refill') {
    formArea.innerHTML= <h2>"Gas Refill Request";</h2>
}
else if (service === "exchangee") {
    formArea.innerHTML= <h2>"Gas Exchange Request";</h2>
}
else if (service === "emergency") {
    formArea.innerHTML= <h2>"Emergency Gas Delivery Request";</h2>
}
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
            