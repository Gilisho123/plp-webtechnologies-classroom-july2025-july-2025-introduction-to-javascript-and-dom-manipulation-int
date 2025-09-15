// ================= PART 1: VARIABLES & CONDITIONALS =================
let cyberName = "Giltech Online Cyber";
let isOpen = true;

if (isOpen) {
    console.log(cyberName + " is currently OPEN for services.");
} else {
    console.log(cyberName + " is currently CLOSED.");
}

// ================= PART 2: FUNCTIONS =================
// Function 1: Search functionality
function searchService() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let result = document.getElementById("searchResult");

    if (input.includes("kra")) {
        result.textContent = "Yes ✅, we offer KRA services at Giltech!";
    } else if (input.includes("print")) {
        result.textContent = "Yes ✅, we provide printing and document services!";
    } else {
        result.textContent = "Sorry, service not found. Please contact us.";
    }
}

// Function 2: Contact form submission
function submitMessage() {
    let name = document.getElementById("userName").value;
    let email = document.getElementById("userEmail").value;
    let message = document.getElementById("userMessage").value;

    if (name && email && message) {
        document.getElementById("confirmationMessage").textContent =
            "Thank you " + name + "! Your message has been received.";
    } else {
        document.getElementById("confirmationMessage").textContent =
            "⚠️ Please fill in all fields before submitting.";
    }
}

// ================= PART 3: LOOPS =================
// Loop Example 1: Display services dynamically
let services = ["Government Services", "Document Services", "Online Support"];
for (let i = 0; i < services.length; i++) {
    console.log("Service " + (i + 1) + ": " + services[i]);
}

// Loop Example 2: Countdown in console
let countdown = 5;
while (countdown > 0) {
    console.log("Countdown: " + countdown);
    countdown--;
}

// ================= PART 4: DOM INTERACTIONS =================
// Add new service card dynamically
function addNewService() {
    let container = document.getElementById("serviceCards");
    let newCard = document.createElement("div");
    newCard.classList.add("card");
    newCard.innerHTML = `
        <h3>New Service</h3>
        <p>More exciting services are coming soon at Giltech!</p>
    `;
    container.appendChild(newCard);
}

// Change welcome text on load
document.getElementById("welcomeText").textContent =
    "Karibu! Explore our services at Giltech Online Cyber.";
