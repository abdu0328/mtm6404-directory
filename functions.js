// Generates HTML string for each client
function list(clients) {
    return clients.map(client => `
        <li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
            ${client.name}
            <strong>$${client.balance.toFixed(2)}</strong>
        </li>
    `).join(''); 
}

// Sorts clients based on a specific field
function order(clients, field) {
    return clients.sort((a, b) => a[field] > b[field] ? 1 : -1);
}

// Sums up the balances of all clients
function total(clients) {
    return clients.reduce((accumulator, client) => accumulator + client.balance, 0);
}

// Finds and returns the client with the given index
function info(clientIndex) {
    return clients.find(client => client.index === clientIndex);
}

// Filters clients based on the search query
function search(query) {
    return clients.filter(client => client.name.toLowerCase().includes(query.toLowerCase()));
}