const API_KEY = "cd3a3602-5ea0-4fdf-b453-2e78c2c036c8"; // Your Web3Forms API key

const sendEmail = async (json) => {
    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        });

        return response;
    } catch (error) {
        console.error(error);
        return null;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#contact-me form');
    const resultMessage = document.createElement('p');
    form.appendChild(resultMessage);

    form.onsubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        object.access_key = API_KEY; // Add the API key to the form data
        const json = JSON.stringify(object);
        resultMessage.textContent = "Sending...";

        const httpResult = await sendEmail(json);

        if (httpResult && httpResult.status === 200) {
            resultMessage.textContent = "Email successfully sent";
            resultMessage.style.color = "green";
        } else {
            resultMessage.textContent = "Sorry, your email wasn't sent";
            resultMessage.style.color = "red";
        }
    };
});
