// Add your code here
function submitData(name, email) {
    const formData = {
        name: name,
        email: email,
    };
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formData),
    })
    .then((response) => response.json())
    .then((object) => {
        const idElement = document.createElement("p");
        idElement.textContent = `ID: ${object.id}`;
        document.body.appendChild(idElement);
    })
    .catch((error) => {
        const errorElement = document.createElement("p");
        errorElement.textContent = `Error: ${error.message}`;
        document.body.appendChild(errorElement);
    });
}