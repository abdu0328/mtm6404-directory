// The list function, generating HTML strings for clients
function list(clients) {
    return clients.map(client => `
        <li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
            ${client.name}
            <strong>$${client.balance.toFixed(2)}</strong>
        </li>
    `).join('');
}

function order(clients, field) {
    return clients.sort((a, b) => a[field] > b[field] ? 1 : -1);
}

// The total function to sum the balance of all clients
function total(clients) {
    return clients.reduce((accumulator, client) => accumulator + client.balance, 0);
}

// The info function to return information of a client by index
function info(clientIndex) {
    return clients.find(client => client.index === clientIndex);
}

// The search function to find clients by name
function search(query) {
    return clients.filter(client => client.name.toLowerCase().includes(query.toLowerCase()));
}
