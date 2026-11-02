Sfunction showForm(service) {

    let formArea = document.getElementById("service-form");

    if (!formArea) {
        alert("Service form area not found!");
        return;
    }

    let title = "";

    if (service === "refill") {
        title = "Gas Refill Request";
    } 
    else if (service === "exchange") {
        title = "Gas Exchange Request";
    } 
    else if (service === "emergency") {
        title = "Emergency Gas Delivery Request";
    }

    formArea.innerHTML = `
        <h2>${title}</h2>

        <form id="gasOrderForm">

            <label>Full Name:</label>
            <input type="text" placeholder="Enter your name" required>

            <label>Phone Number:</label>
            <input type="tel" placeholder="Enter your phone number" required>

            <label>Delivery Address:</label>
            <input type="text" placeholder="Enter your address" required>

            <button type="submit">Submit Request</button>

        </form>
    `;

    document.getElementById("gasOrderForm").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thank you! Your GasGo request has been received.");
        this.reset();
    });

    formArea.scrollIntoView({ behavior: "smooth" });
}
accordionItems.forEach(function(item)) {
    const question = items.querySelector(".accordion-question");
    question.addEventLister("click function")
}
item.classList.toggle("Active");
