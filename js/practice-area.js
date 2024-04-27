// Fetch JSON data
fetch("../practice-area.json")
    .then(response => response.json())
    .then(data => {
        const productsContainer = document.querySelector(".products");
        data.forEach(item => {
            const productElement = document.createElement("div");
            productElement.classList.add("product");

            const imageElement = document.createElement("img");
            imageElement.src = item.image;
            imageElement.alt = item.title;

            const titleElement = document.createElement("h2");
            titleElement.textContent = item.title;

            const descriptionElement = document.createElement("p");
            descriptionElement.textContent = item.description;

            const contactButton = document.createElement("button");
            contactButton.textContent = "Contact Us";
            contactButton.classList.add("contact-button");

           
            contactButton.addEventListener("click", function() {
               
                window.location.href = "http://127.0.0.1:5500/contact.html"; 
            });

            productElement.appendChild(imageElement);
            productElement.appendChild(titleElement);
            productElement.appendChild(descriptionElement);
            productElement.appendChild(contactButton);

            productsContainer.appendChild(productElement);
        });
    })
    .catch(error => console.error("Error fetching data:", error));
