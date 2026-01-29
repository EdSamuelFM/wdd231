const urlParams = new URLSearchParams(window.location.search);
const resultsElement = document.querySelector('#results');

if (urlParams.has('fname')) {
    document.querySelector('#user-name').textContent = urlParams.get('fname');
}

function formatKey(key) {
    return key.charAt(0).toUpperCase() + key.slice(1).replace('-', ' ');
}

const fields = ['fname', 'lname', 'email', 'phone', 'organization', 'level', 'timestamp'];

let summaryHTML = '<dl>'; 
fields.forEach(field => {
    if (urlParams.has(field)) {
        summaryHTML += `
            <dt>${formatKey(field)}</dt>
            <dd>${urlParams.get(field)}</dd>
        `;
    }
});
summaryHTML += '</dl>';

resultsElement.innerHTML = summaryHTML;

document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;