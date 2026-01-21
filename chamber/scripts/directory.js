const url = "data/members.json";
const container = document.querySelector("#member-container");
const gridBtn = document.querySelector("#grid-view");
const listBtn = document.querySelector("#list-view");

// Fetch Data
async function getMembers() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayMembers(data);
    } catch (error) {
        console.error("Error fetching member data:", error);
    }
}

// Display Data
function displayMembers(members) {
    container.innerHTML = ""; // Clear existing content

    members.forEach((member) => {
        let card = document.createElement("section");
        card.className = "member-card";

        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name} logo" loading="lazy">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p><a href="${member.website}" target="_blank">Visit Website</a></p>
            <span class="membership-badge">Level ${member.level}</span>
        `;
        container.appendChild(card);
    });
}

// Layout Toggles
gridBtn.addEventListener("click", () => {
    container.classList.add("grid-mode");
    container.classList.remove("list-mode");
});

listBtn.addEventListener("click", () => {
    container.classList.add("list-mode");
    container.classList.remove("grid-mode");
});

// Footer Dates
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

getMembers();