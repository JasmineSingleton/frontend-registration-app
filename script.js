async function registerUser() {
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;

    try {
        const response = await fetch("https://registration-app-backend.onrender.com", { 
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ fullName, email })
        });

        const data = await response.json();
        alert(data.message || "Registration successful!");
    } catch (error) {
        alert("Error: " + error.message);
    }
}
